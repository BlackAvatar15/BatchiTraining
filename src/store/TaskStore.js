import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('taskStore', {

    state: () => ({
        id: "",
        title: "",
        isPriority: "",
        //tasks: [], this is for the db.json
        loading: false
    }),

    getters: {
        prio() {
            return this.tasks.filter(t => t.isPrio) //this is to get access to the state
        },
        prioCount() {
            return this.tasks.reduce((p, c) => {
                return c.isPrio ? p + 1 : p
            }, 0)

        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },

//pinia is ga distribute ning state o data na dae na kaipuhan ning event handling

    methods: {

        async getTasks() {
            this.tasks = []

            await axios.get("http://localhost:8765/trainee-backend/api/",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.$cookies.get('auth_token')
                    }
                }
            ).then(async (response) => {
                console.log(response.data);
                await response.data.forEach((data) => {
                    this.tasks.push({
                        is: data.id,
                        title: data.title,
                        isPriority: data.isPriority
                    })
                })
            }).catch((err) => {

            })

        async addTask() {

                await axios.post("http://localhost:8765/trainee-backend/api/product",
                    {
                        "title": this.title,
                        "isPriority": this.isPriority,
                    },

                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.$cookies.get('auth_token')
                        }
                    }

                ).then(async (response) => {
                    this.title = "";
                    this.isPriority = "";
                    await this.getTasks();

                }).catch((error) => {
                })

        async deleteTask(id) {
                this.tasks = this.tasks.filter(t => {
                    return t.id !== id
                })

                const res = await fetch('http://localhost:3000/tasks/' + id, {
                    method: 'DELETE',
                })

                if (res.error) {
                    console.log(res.error)
                }
            },

        async togglePrio(id) {
                const task = this.tasks.find(t => t.id === id)
                task.isPrio = !task.isPrio

                const res = await fetch('http://localhost:3000/tasks/' + id, {
                    method: 'PATCH',
                    body: JSON.stringify({ isPrio: task.isPrio }),
                    headers: { 'Content-Type': 'application/json' }
                })

                if (res.error) {
                    console.log(res.error)
                }

            }

        }

    })