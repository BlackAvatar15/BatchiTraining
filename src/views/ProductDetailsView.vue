<template>
    <v-container>
        <v-col cols="12">
            <v-row no-gutters>
                <v-col cols="6">
                    <v-row no-gutters>
                        <v-col cols="12">
                            <v-label>Product Name</v-label>
                            <h3>{{ getProductDetailsData.brandName }}</h3>

                        </v-col>
                        <v-col cols="12">
                            <v-label>Model</v-label>
                            <h3>{{ getProductDetailsData.model }}</h3>


                        </v-col>
                        <v-col cols="12">
                            <v-label>RAM</v-label>
                            <h3>{{ getProductDetailsData.ram }}</h3>


                        </v-col>
                        <v-col cols="12">
                            <v-label>ROM</v-label>
                            <h3>{{ getProductDetailsData.rom }}</h3>


                        </v-col>
                        <v-col cols="12">
                            <v-label>PROCESSOR</v-label>
                            <h3>{{ getProductDetailsData.processor }}</h3>


                        </v-col>
                        <v-col cols="12">
                            <v-label>CAMERA</v-label>
                            <h3>{{ getProductDetailsData.camera }}</h3>


                        </v-col>
                        <v-col cols="12">
                            <v-label>PRICE</v-label>
                            <h3>{{ getProductDetailsData.price }}</h3>

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
        ...mapGetters(['getProductDetailsData'])
    },
    methods: {
        gotoRen() {
            this.$router.push('/ren')
        }
    }
}
</script>

<style></style>