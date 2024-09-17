<template>

    <v-card>
        <v-container>
            <v-row>
                <v-col cols="12" md="5">
                    <v-text-field v-model="productName" :counter="10" :rules="nameRules" label="Product Name" hide-details
                        required></v-text-field>
                </v-col>

                <v-col cols="12" md="5">
                    <v-text-field v-model="category" :counter="10" :rules="nameRules" label="Category" hide-details
                        required></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                    <v-btn>ADD</v-btn>
                </v-col>

            </v-row>
        </v-container>
    </v-card>

</template>

<script>
import axios from 'axios'

export default {
    name: 'ProductView',
    data() {
        return {
            productName: "",
            category: "",
        }
    },

    methods: {

        mounted(){
            axios.get("http://localhost:8765/trainee-backend/api/product")
            .then(response => console.log(response))
        }

}
}
</script>

<style></style>