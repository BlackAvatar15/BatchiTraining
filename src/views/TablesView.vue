<template>
    <v-card>
        <v-layout>
            <v-app-bar color="primary" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">

                </v-app-bar-nav-icon>

                <v-toolbar-title>Product Table</v-toolbar-title>

                <v-spacer></v-spacer>

                <template v-if="$vuetify.display.mdAndUp">
                    <v-btn icon="mdi-magnify" variant="text"></v-btn>

                    <v-btn icon="mdi-filter" variant="text"></v-btn>
                </template>

                <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
            </v-app-bar>
            <!--
            <v-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBAq4WslL80_1hdR9bq9aF26Atpnvz0S6Q0czpk4_OrWDSxck7a7uFRP6Qn95rIsf6Eo&usqp=CAU"
          alt="Sidebar Image"
          class="sidebar-image"
        ></v-img>-->

            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
                <v-list>
                    <v-list-item @click="goToMark('mark')" style="cursor: pointer;">
                        MARK
                    </v-list-item>
                    <v-list-item @click="goToCaloy('caloy')" style="cursor: pointer;">
                        CALOY
                    </v-list-item>
                    <v-list-item @click="goToRen('ren')" style="cursor: pointer;">
                        REN
                    </v-list-item>
                    <v-list-item @click="goToAltabs('altabs')" style="cursor: pointer;">
                        ALTABS
                    </v-list-item>
                    <v-list-item @click="goToCard('card')" style="cursor: pointer;">
                        CARD VIEW
                    </v-list-item>

                </v-list>
            </v-navigation-drawer>
            <!--this is the side bar-->
            <div class="rightsidebar"></div>

            <v-main style="height: 500px;"> <!--this is the search bar-->
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-text-field v-model="search" :loading="loading" append-inner-icon="mdi-magnify"
                                density="compact" label="Search here" variant="solo" hide-details single-line
                                @click:append-inner="onClick"></v-text-field>

                        </v-row>
                        <v-row no-gutters class="mt-4">

                            <!-- <v-table height="300px" fixed-header>

                                <thead>
                                    <tr>
                                        <th class="text-center">
                                            BRAND
                                        </th>
                                        <th class="text-center">
                                            MODEL
                                        </th>
                                        <th class="text-center">
                                            RAM
                                        </th>
                                        <th class="text-center">
                                            ROM
                                        </th>
                                        <th class="text-center">
                                            PROCESSOR
                                        </th>
                                        <th class="text-center">
                                            CAMERA
                                        </th>
                                        <th class="text-center">
                                            PRICE
                                        </th>
                                        <th class="text-center">
                                            MODEL
                                        </th>
                                        <th class="text-center">
                                            RAM
                                        </th>
                                        <th class="text-center">
                                            ROM
                                        </th>
                                        <th class="text-center">
                                            PROCESSOR
                                        </th>
                                        <th class="text-center">
                                            CAMERA
                                        </th>
                                        <th class="text-center">
                                            PRICE
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="item in phones" :key="item.brandName">
                                        <td>{{ item.brandName }}</td>
                                        <td>{{ item.model }}</td>
                                        <td>{{ item.ram }}</td>
                                        <td>{{ item.rom }}</td>
                                        <td>{{ item.processor }}</td>
                                        <td>{{ item.camera }}</td>
                                        <td>{{ item.price }}</td>
                                        <td>{{ item.model }}</td>
                                        <td>
                                            <v-btn>{{ item.ram }}</v-btn>
                                        </td>
                                        <td>
                                            <v-text-field :v-model="item.rom"></v-text-field>
                                        </td>
                                        <td>{{ item.processor }}</td>
                                        <td>{{ item.camera }}</td>
                                        <td>{{ item.price }}</td>
                                    </tr>
                                </tbody>

                            </v-table> -->
                            <v-data-table :headers="headers" :items="phones" :search="search"></v-data-table>

                        </v-row>


                    </v-container>



                </v-card-text>
            </v-main>

        </v-layout>
        <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
            <div>
                <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mt-4" variant="text"></v-btn>
            </div>

            <div class="pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
                cursus commodo
                interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at
                orci sed
                massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et
                faucibus. Morbi
                vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
                iaculis dui
            </div>

            <v-divider></v-divider>

            <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </div>
        </v-footer>
    </v-card>




</template>

<script>
export default {
    name: 'TablesView',
    data() {
        return {
            search: '',
            drawer: false,
            group: null,


            /*items: [
                {
                    title: 'Caloy',
                    value: 'foo',
                },
                {
                    title: 'Altabs',
                    value: 'bar',
                },
                {
                    title: 'Mark',
                    value: 'fizz',
                },
                {
                    title: 'Ren',
                    value: 'buzz',
                },
            ],
*/
            header: [
                { key: "brandName", title: "Brand Name" },
                { key: "model", title: "Model" },
                { key: "ram", title: "RAM" },
                { key: "rom", title: "ROM" },
                { key: "processor", title: "Processor" },
                { key: "camera", title: "Camera" },
                { key: "price", title: "Price" },

            ],
            phones: [
                {
                    brandName: 'Vivo',
                    model: 'Y20',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 10000,

                },
                {
                    brandName: 'Oppo',
                    model: 'A20',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 20000,
                },
                {
                    brandName: 'Oppo',
                    model: 'F20',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 23000,
                },
                {
                    brandName: 'Samsung',
                    model: 'S24',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 50000,
                },
                {
                    brandName: 'Apple',
                    model: '15',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 70000,
                },
                {
                    brandName: 'Infinix',
                    model: 'Zero',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 15000,
                },
                {
                    brandName: 'Infinix',
                    model: 'Zero',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 15000,
                },
                {
                    brandName: 'Infinix',
                    model: 'Zero',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 15000,
                },
                {
                    brandName: 'Infinix',
                    model: 'Zero',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 15000,
                },
                {
                    brandName: 'Infinix',
                    model: 'Zero',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 15000,
                },
                {
                    brandName: 'Infinix',
                    model: 'Zero',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 15000,
                },
            ],

        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        goToMark(mark) {
            this.$router.push('/mark/' + mark)
        },
        goToWork(work) {
            this.$router.push('/profileWork/' + work)
        },
        goToAge(age) {
            this.$router.push('/profileAge/' + age)
        },
        goToAddress(address) {
            this.$router.push('/profileAddress/' + address)
        },
        goToCard(card) {
            this.$router.push('/profileCard/' + card)
        },
        /*
        goToProfile(crud) {
            this.$router.push('/profileCrud/' + crud)
        },*/
        goToAnyRoute(route) {
            this.$router.push(route)
        },



    }
}
</script>

<style scoped>
/*
.sidebar-image {
  height: 50px; 
  width: 50%; 
}

.rightsidebar {
  background-color: yellow;
  height: 400px;
}
*/
</style>