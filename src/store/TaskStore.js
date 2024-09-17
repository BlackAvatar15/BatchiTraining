import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('taskStore', {

    state: () => ({
        tasks: [],
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

    actions: {
        async getTasks() {
            this.loading = true

            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data
            this.loading = false
        },

        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: { 'Content-Type': 'application/json' }
            })
        
            if (res.error) {
                console.log(res.error)
            }

        },
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