<template>
    <v-container>
        <v-col cols="12">
            <v-row no-gutters>
                <v-col cols="6">
                    <v-row no-gutters class="text-start">
                        <v-col cols="12">
                            <v-img style="width: 200px; height: 350px;" :src="getProductImage.image"></v-img>
                        </v-col>
                        <v-col cols="12"> 
                            <h3> Product Name: {{ getProductDetailsData.brandName }}</h3>

                        </v-col>
                        <v-col cols="12"> 
                            <h3>Model: {{ getProductDetailsData.model }}</h3>


                        </v-col>
                        <v-col cols="12"> 
                            <h3>RAM: {{ getProductDetailsData.ram }}</h3>


                        </v-col>
                        <v-col cols="12"> 
                            <h3>ROM: {{ getProductDetailsData.rom }}</h3>


                        </v-col>
                        <v-col cols="12"> 
                            <h3>PROCESSOR: {{ getProductDetailsData.processor }}</h3>


                        </v-col>
                        <v-col cols="12"> 
                            <h3>CAMERA: {{ getProductDetailsData.camera }}</h3>


                        </v-col>
                        <v-col cols="12">
                            <h3>PRICE: {{ getProductDetailsData.price }}</h3>

                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="6">
                    <v-img alt="Product Image"></v-img>
                </v-col>
           
            </v-row>
        </v-col>
    </v-container>
</template>

<script> 
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'Product Details',
    data() {
        return {

        }
    },
    created() {
        if(this.getProductDetailsData == null) {
            this.$router.push("/tables")
        }

    },
    computed: {
        ...mapGetters(['getProductDetailsData', "getProductImage"])
    },
    methods: {
        gotoRen() {
            this.$router.push('/ren')
        }
    }
}
</script>

<style></style>