import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {

    state: () => ({
        tasks: [],
        loading: false
    }),

    getters: {
        prio() {
            return this.tasks.filter(t => t.isPriority)//this is to get access to the state
        },
        prioCount() {
            return this.tasks.reduce((p, c) => {
                return c.isPriority ? p + 1 : p
            }, 0)

        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },

    actions: {
        async getTasks() {
            this.loading - true
            const res = await fetch('http://localhost:3000/tasks') //the res a response for the db.json
            const data = await res.json()

            this.tasks = data
            this.loading = false
        },

        addTask(task) {
            this.tasks.push(task)

        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },

        togglePrio(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isPriority = !task.isPriority

        }

    }

})