<template>
    <div class="pili">
        <h3>{{ pili.title }}</h3>
        <div class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>

        </div>

    </div>
    
</template>

<script>
export default {
    props: ['pili']

}

</script>