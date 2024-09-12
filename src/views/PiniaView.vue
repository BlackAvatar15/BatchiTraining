<template>
    <main>
        <header>
            <!--<img src="/src/assets/logo.png">-->
            <h1>PILI TASK</h1>
        </header>

        <div class="task-list">
            <p>All Tasks</p>
            <div v-for="pili in taskStore.tasks">
                <TaskDetails :pili="pili" />
            </div>
        </div>
        <div class="task-list">
            <p>Priority Tasks</p>
            <div v-for="pili in taskStore.prio">
                <TaskDetails :pili="pili" />
            </div>
        </div>
    </main>

</template>

<script>
import { useTaskStore } from '@/store/TaskStore'
import TaskDetails from '@/components/TaskDetails.vue';

export default {
    name: 'PiniaView',
    components: { TaskDetails },

    data() {
    },

    setup() {
        const taskStore = useTaskStore()

        return { taskStore }

    }

}


</script>

<style>
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
</style>