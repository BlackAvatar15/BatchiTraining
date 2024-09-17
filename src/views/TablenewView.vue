<template>
    <v-container>
        <v-row>
            <v-col cols="12">


                <v-card elevation="5" class="pa-3" color="black">
                    <v-table height="300px" fixed-header text-align="center">
                        <thead>
                            <tr>
                                <th class="not_mapped_style" style="text-align:center">
                                    Product Name
                                </th>
                                <th class="not_mapped_style" style="text-align:center">
                                    Category
                                </th>
                                <th class="not_mapped_style" style="text-align:center">
                                    Edit
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="item in product" :key="item.productName">
                                <td v-if="!item.ifEdit">{{ item.productName }}</td>
                                <td v-if="!item.ifEdit">{{ item.category }}</td>
                                <td v-if="!item.ifEdit">
                                    <v-btn @click="item.ifEdit = true;">Edit</v-btn>
                                </td>
                                <td v-if="item.ifEdit">
                                    <v-text-field v-model="item.productName"></v-text-field>
                                </td>
                                <td v-if="item.ifEdit">
                                    <v-text-field v-model="item.category"></v-text-field>
                                </td>
                                <td v-if="item.ifEdit">
                                    <v-btn @click="saveItem(item)">Save</v-btn>
                                </td>


                            </tr>
                        </tbody>

                    </v-table>

                </v-card>
                <v-btn @click="getProduct">Get Table Data</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <center>
                    ADD DATA HERE
                </center>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="5">
                <v-text-field v-model="productName" label="Product Name"
                    placeholder="Enter Product Name"></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field v-model="category" label="Category" placeholder="Enter Category"></v-text-field>
                
            </v-col>
            <v-col cols="2">
                <v-btn @click="addProduct">
                    Add Product
                </v-btn>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";


export default {
    name: 'TablenewView',
    data() {
        return {
            productName: "",
            category: "",
            
            product: [
                {
                    productName: 'Frozen Yogurt',
                    category: 159,
                },
                {
                    productName: 'Ice cream sandwich',
                    category: 237,
                },
                {
                    productName: 'Eclair',
                    category: 262,
                },
                {
                    productName: 'Cupcake',
                    category: 305,
                },
                {
                    productName: 'Gingerbread',
                    category: 356,
                },
                {
                    productName: 'Jelly bean',
                    category: 375,
                },
                {
                    productName: 'Lollipop',
                    category: 392,
                },
                {
                    productName: 'Honeycomb',
                    category: 408,
                },
                {
                    productName: 'Donut',
                    category: 452,
                },
                {
                    productName: 'KitKat',
                    category: 518,
                },
            ],


        }
    },

    methods: {


        async getProduct() {
            this.product = [];
            await axios.get("http://localhost:8765/trainee-backend/api/products",

                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.$cookies.get('auth_token')
                    }
                }
            ).then(async (response) => {
                console.log(response.data);
                await response.data.forEach((data) => {
                    this.product.push({
                        id: data.id,
                        productName: data.productName,
                        category: data.category,
                        ifEdit: false
                    })
                })
            }).catch((err) => {
            })
        },
        
        
        async addProduct() {
            await axios.post("http://localhost:8765/trainee-backend/api/products",
                {
                    "productName": this.productName,
                    "category": this.category
                },

                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.$cookies.get('auth_token')
                    }
                }
            ).then(async (response) => {
                this.productName = "";
                this.category = "";
                await this.getProduct();

            }).catch((err) => {
            })
        },
        
        
        async saveItem(data) {
            await axios.post("http://localhost:8765/trainee-backend/api/products/update-product/" + data.id,
                {
                    "id": data.id,
                    "productName": data.productName,
                    "category": data.category
                },

                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.$cookies.get('auth_token')
                    }
                }
            ).then(async (response) => {

                await this.getProduct();
                data.ifEdit = false;

            }).catch((err) => {

            })
        }


    }
}
</script>

<style scoped>
td {
    text-align: center;
}

.v-card {
    max-width: 600px;
    margin: auto;
}

.v-data-table {
    border-radius: 4px;
}

.v-data-table th {
    background-color: #f5f5f5;
    font-weight: bold;
}

.v-data-table td {
    text-align: center;
}

.v-card-title {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
}

.v-divider {
    margin: 0;
}
</style>