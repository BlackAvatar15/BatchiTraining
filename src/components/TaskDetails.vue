<template>
    <div class="pili">
        <h3>{{ pili.title }}</h3>
        <div class="icons">
            <!--<i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>-->

            <v-btn @click="taskStore.deleteTask(pili.id)" class="material-icons">Delete</v-btn>
            <v-btn @click="taskStore.togglePrio(pili.id)" :class="{active: pili.isPrio}" class="material-icons">Priority</v-btn>

        </div>

    </div>

</template>

<script>
import { useTaskStore } from '@/store/TaskStore';

export default {
    props: ['pili'],
    setup() {
        const taskStore = useTaskStore()

        return { taskStore }
    }
}

</script>

<style scoped>
.v-btn .active{
    color: red;
}

</style>