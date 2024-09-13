<template>
    <form @submit.prevent="handleSubmit">
        <input style=" border-radius: 1px; padding: 7px; outline-color: brown; outline-style: solid;" type="text" placeholder="What to do..." v-model="newTask">
        <button style="background: brown; color: white; padding: 10px 20px; border: none; border-radius: 5px;cursor: pointer;">ADD</button> <!--difference between v-btn and button?-->
    </form>
</template>

<script>
import { useTaskStore } from '@/store/TaskStore'
import { ref } from 'vue'

export default {
    setup() {
        const taskStore = useTaskStore()

        const newTask = ref('')

        const handleSubmit = () => {
            if (newTask.value.length > 0) {
                taskStore.addTask({
                    title: newTask.value,
                    isPriority: false,
                    id: Math.floor(Math.random() * 10000)
                })
                newTask.value = ''
            }
        }
        return { handleSubmit, newTask }
    }

}

</script>

<style></style>
