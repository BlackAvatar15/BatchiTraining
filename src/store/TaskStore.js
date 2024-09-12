import { defineStore } from 'pinia'

export const useTaskStore = defineStore( 'taskStore', {

    state: () => ({
        tasks: [
            {id: 1, title: "made pili nuts", isPriority: true},
            {id: 2, title: "Harvest pili", isPriority: true},
            {id: 3, title: "Buy sugar", isPriority: false}
        ],
    }),

    getters: {
        prio() {
            return this.tasks.filter(t => t.isPriority)//this is to get access to the state
        }
    }

})