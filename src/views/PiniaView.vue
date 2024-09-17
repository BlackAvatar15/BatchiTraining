<template>
    <main>
        <header>
            <!--<img src="/src/assets/logo.png">-->
            <h1>PILI TASK</h1>
        </header>

        <!--THIS IS YOUR ADD TASK FOR TASK FORM-->
        <div class="new-task-form">
            <TaskForm />
        </div>
        
        <!--filter nav-->
        <nav class="filter">
            <v-btn @click="filter = 'all'">All Tasks</v-btn>
            <v-btn @click="filter = 'prio'">Priority Tasks</v-btn>
        </nav>

        <!--loading.. this is for the refresh-->
        <div class="loading" v-if="taskStore.loading">Loading Task...</div>


        <div class="task-list" v-if="filter === 'all'">
            <p>You have {{ totalCount }} task left to do</p>
            <div v-for="pili in tasks">
                <TaskDetails :pili="pili" />
            </div>
        </div>
        <div class="task-list" v-if="filter === 'prio'">
            <p>You have {{prioCount }} task left to do</p>
            <div v-for="pili in prio">
                <TaskDetails :pili="pili" />
            </div>
        </div>
<!--THIS WILL RESET-->
        <button @click="taskStore.$reset">Reset State</button>

    </main>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '@/store/TaskStore'
import TaskDetails from '@/components/TaskDetails.vue'
import TaskForm from '@/components/TaskForm.vue'
import { storeToRefs } from 'pinia';


export default {
    name: 'PiniaView',
    components: { TaskDetails, TaskForm },

    data() {
    },

    setup() {
        const taskStore = useTaskStore()

        const { tasks, loading, prio, totalCount, prioCount} = storeToRefs(taskStore)

        //fetch tasks
        taskStore.getTasks()

        const filter = ref('all')

        return { taskStore, filter, tasks, loading, prio, totalCount, prioCount }

    }

}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap');

body {
    background: #f2f2f2;
    color: #444;
    margin: 0;
}

body * {
    font-family: "Poppins";
}

header {
    text-align: center;
    background: #e7e7e7;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

header img {
    max-width: 60px;
}

header h1 {
    margin: 0;
    font-size: 2em;
    padding-top: 25px;
    margin-left: 15px;
    color: #777;
}

/*task list*/
.task-list {
    max-width: 640px;
    margin: 20px auto;
}

.task {
    padding: 6px 20px;
    background: #fff;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task h3,
.task .icons {
    display: inline-block;
}

.task .icons {
    text-align: right;
}

.task i {
    font-size: 1.4em;
    margin-left: 6px;
    cursor: pointer;
    color: #bbb;
}

/**filter nav */
.filter {
    width: none;
    margin: 10px auto;
    text-align:center;
}

/*this is no use code*/
.filter v-btn {
    display: inline-block;
    margin-left: 10px;
    background: #fff;
    border: 2px solid #555;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 0.8em;
}

.loading {
   max-width: 640px;
   border: 1px solid #ffd859;
   background: #ffe9a0;
   color: #3a3a3a; 
   padding: 5px 0;
   text-align: center;
   margin: 30px auto;
}
</style>