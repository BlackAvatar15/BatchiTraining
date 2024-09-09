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

                    <v-list-item @click="goToAddress('caloy')" style="cursor: pointer;">
                        PROFILE
                    </v-list-item>
                    <v-list-item @click="goToCard('card')" style="cursor: pointer;">
                        CARD VIEW
                    </v-list-item>
                    <v-list-item @click="gotonewProfile('profilenew')" style="cursor: pointer;">
                        NEW PROFILE
                    </v-list-item>
                    <v-list-item @click="gotoNavbar('navbar')" style="cursor: pointer;">
                        Nav
                    </v-list-item>
                    <v-list-item @click="gotoProduct('product')" style="cursor: pointer;">
                        Product
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
                            <v-data-table style="text-align: center !important;" :headers="headers" :items="phones"
                                :search="search">
                                <template v-slot:item.image="{ item }">
                                    <v-img :src="item.image"></v-img>
                                </template>
                                <template v-slot:item.action="{ item }">
                                    <v-btn @click="goToProductDetails(item)">{{ item.action }}</v-btn>
                                </template>
                            </v-data-table>

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
import { mapActions, mapGetters } from "vuex";

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
                { key: "image", title: "Product Image", },
                { key: "brandName", title: "Brand Name", },
                { key: "model", title: "Model", align: 'center' },
                { key: "ram", title: "RAM", align: 'center' },
                { key: "rom", title: "ROM", align: 'center' },
                { key: "processor", title: "Processor", align: 'center' },
                { key: "camera", title: "Camera", align: 'center' },
                { key: "price", title: "Price", align: 'center' },
                { key: "action", title: "View Details", align: 'center' }

            ],
            phones: [
                {
                    image: "data:image/jpeg;base64,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",
                    brandName: 'Vivo',
                    model: 'Y20',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 10000,
                    action: "View",

                },
                {
                    image: "data:image/jpeg;base64,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",
                    brandName: 'Oppo',
                    model: 'A20',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 20000,
                    action: "View",



                },
                {
                    image: 'data:image/jpeg;base64,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',
                    brandName: 'Oppo',
                    model: 'F20',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 23000,
                    action: "View",
                   


                },
                {
                    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUSDxIPFRIVEBAXFRAVEBUVFRUQFRYWFxUWFRUYHSggGBolGxUWITIhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFhANFSsdFRktKy0tLS0rKy0rKysrLS0rKystNysrKy0rLS0rLy0rLSsrKywrNy0tLSstKy0rMC0rK//AABEIAOAA4AMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgUGBwEDBAj/xABJEAABAwIBBAoPBwMEAwEAAAABAAIDBBEFBhIhMRNBUWFxcnORsbMHFyIjMjM0U3SBkpOhstEUFkJSVILBYqLwQ2PC4SSj8WT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHBEBAQEBAQEBAQEAAAAAAAAAAAExEQIhYUES/9oADAMBAAIRAxEAPwC8UIQgEIQgELD3AAk6gCSd4KNty5oSAc+SxAI7y/S0i4OrbCCSoUa+/FD+eT3T/osffqg/PJ7p/wBEEmQoz9+6D88nuX/RY+/lB+eT3L/ogk6FGPv7h/55PdP+iPv7h/55PdP+iCToUYGXuH+ck90/6JA7IGH2vnyWJcATE4Alps619diglSFFe2Dh3nH+wVjth4d5x/uyglaFE+2Jh3nH+7KUeyFhvnj7BQSpCivbCw3zx9go7YWG+ePsFBKkKK9sLDfPH2Cs9sHDfPH2CglKFF+2Bh3nT7BWfv8AYd50+wUEnQoy3LugOqRxNibCNxNgCToG8CVIqeZsjGvYbtc1rmnda4XB5ig2IQhAIQhAIQhBprPFv4j+gqkcHPeW8VvytV3Vni38R/QVRuEv7y0/0t+UIO6SUNBc5wa1ou5znBrWjfcSAP5XJTYpBKSIponkXOayRrjYazYG9t+ygOXuJPkqTBe0cQZZm0ZXNDnvO6dOaNwNCjkjXxODmusWlpbI07esFrk4LpL0gvTTgGIGeFrneEWMcdy5uDb1tJ9aiuUWVE4mcyF2Y1hLfBaS4jXe4Oi+0oqel6QXJkyZxh1VDnPAD2mxtqO/ZOxcgUXKL1VKyWeJsjQ4bHVGx3dlH1UkJTAJAKmK/m6oevZQrNS4UcDpvMx8y0vwWnH+kzmT+1gKTJTrt8cuo27CqfzTOZanYZB5pnMniqhsuB6vIvTjgeBUz4pnfZmSOY0FrANJOnuRw2SYsn4pKRtW6jbEI5XCWMscA6B1hsgDtIzTbXtXUi7Hbbma/wCWPpKsOmpGPaWPALXNLXNOotIsRzLPF6qQ5O0nmIuZY+71J5iLmUiqMLdBnwkkvpzYE630x0xv4QNB4DuLjss8Xpp+71J5iLmR93qTzEXsp2siygjVfhsMM9MYo2MJlkBLRa42Ny9F5P8AklP6NB8jVQGP6JqXlZercr+yf8kp/RoPkapWocEIQoBCEIBCEINNZ4t/Ef0FUXhh703is+RqvSs8W/iP6CqHw93exxWfI1BFcs8Ce+TZobFxa0OZcDOzRZr2k6Cc0AFuvRfSDoj9Pgs7yBKNjYDt2ueK0aSVY2K4jDBHnVDrNdcNaG575CNYazbA1EkgX0XvoTRQZS0L35rQ6Jx0AyRta0ncz2uOb69G+gc8JptiZa2bqAb+VoFgOHb9aZsZyWbPIZGOLSdLgN7b3uFSIu/zfThguMmlzyGB2fmgG9rEX3tIN9IUv4pgwnDmU0eY31n/ADhK7CUkuSS5AouUVxqXNkhP9NR1ikpcoplH4UPFqOsVmpT5hOJh2gnSpBFZwVa00xabhTDA8RztB1rpK5WHGshBCYqiKxUhkN1w1UQWiOvJCr2Fk7juQDnksrKwaua9oIKqGR2ZTT2/NTdYnjJbHi0gEqFqwMq6TTHUt1t7iTfidu8B+BKiWIUmxv0eCdLeDbHq+im1NVtnicw2Ic0jnCij2kh0L9bT3J4PBPrGgrLP+uX8pqsiy2Fttf8AhRmo6mDKAd+peVl6pyv3J/ySn9Gg+RqoTKId+peWl6pyvvJ/ySn9Gg+RqzdWO9CEKKEIQgEIQg4sZmLKaVzbXbFIRfVfNOtUVRO72OKz5Gq8sofJJ+Rk+UqiaR3cDix/I1BBstp3OrHgnQ1kLWcTMBHOXOPCSmWoYLXbfNvovbO9dlOsosEbUWdpD2iweBfudYa9u2BtEabG1jYJmosmrOBkLpLHQ3NLW/uLtrgTokeT8znQsz732KO5Ou9iBf1BqiWUVS6SpkbI4jNNowTZrW6Dc8I03G2QprTRZg06ybkjVfcA3ANC5a7C4ZiHSNBI27DUkHJknVySQd8JNiQ1x1lu1p29sepPJctMETWNzWiwSi5RSi5cdBhsdVUxRy51tgqiC02IcJW2O/r21vLltyaP/mw+j1fWsVmpXLi2Q08V3Rd9Z/SDngb7Nfs34AmWmD4nX0jT/gV20iRieTlNVAl7c15/1WAB37tFnjhW2Ff0c4e0FaaybaAJTpi2TFRS90G7JEPxxgmw3Xx628IuE0PkzhdpuN5VOG6ulIppri1zB8JE1UFbmnWuvHL/AGaU6dDofnUbglKJYtvJnHSLAncT9iADnbILabXVT4VXFttKmeH4o+ZobG0vII7kNLtG2DZSsWfD7VQZzc8awBnDbI2iAuPNW2GsLHbVxoIDtTTwaDcetZnjANh8Ny+i6N+L2IzlMO+0vLS9U5XnkrIXUNOTa/2eIaNWhoH8KjsqB32l5aXqnK78kfIKfkGdCzddJh3QhCihCEIBCEIG/KHySfkZPlKoSnd3I4sfyNV/YzCX08rAQC6KQAnVctOtefYz3P7Y+rag5scxuOkDQW7JM5ucI84tYyM+C95Gkk20NFtGknSAmalyyOdaohjDD+KLOa5u/muJDuDQd8Lgyuc5taX6RnNhew7gDGtFuBzSPUmmpIcM4OLnuOluab5xO7tqyfBZIkBFwQQQCCNRBFwRvEEFYLk3YQxzI2sdrZGxp3naSR/cF2lyypRcklySXJBcgUXLdk++1ZD6PVda1cpKRRzZlTAf9qpH/sCs1Li1KSRO0D1GMOqLgJ8p5Ftg5tfZR7Hclaapu9veZj/qxgWcf9yPU7h0HfTxnrRJNZUVDlbhFRTRvhlYCZczYpWG8byx7XOFz4JDbmx9V1GqfByPGPaN4d0fopl2UMcz6mCmadEd5JOUe2zB6m3P71HY1Wa5Z62GEWiiDnD8cpzuZgsOe64n4zUP7l0r83zYOYy25mssF0YzSkDPHAUzs1rCyJ/kjVXbm7VjYbmab6v3BTNw6B8AFWeSdUc+19tt/wBwcPXpaFZ1lr+En2o1lUO+0nLS9U5Xdkh5BT8gzoVJ5VjvtJy0vVOV3ZKxltDTg2v9niOjVpaD/KxdbmHVCEKKEIQgEiaUMaXONmtaSTvAXKWmTLOr2KikO24Bo9Z0/wBoKCAw4iZ8VfFT1M0VOYZ3FglsHyAGzWMkuAd0NG0TvqCxu0DiRdWxPWRtHs1RUSOFxDR1B/c9pZ0EphjOgcSLq2KK119GyZua9ocASQCSC1x1lrhpF9saQdxcNJg0cTs5jGh353OLyOKCLA76cyUklBljQ0WH/wBO6UFySXJBcgWXJJckkpBKBZK4at+bJAf9uo6wLqJXDiPhQcnUdYFZqXE7wGrzmhSull0Kt8m6mxzVO6GTQujEPQeuLEapsUbpHmzWNc5x3gLlbmOUH7KWK5lO2Bp7qUgu5Np0D1kf2lRVYV9a+ad08nhPkLjvXOgeoWHqT/CFGHqVYe3OjY7daE6ljqEAe0tOoiyimIUZieWnd0cCm1I1Jx/CNkjzwO6HQoRGskozJUiIG2e3Rxoy2Toa5W64afWqkycgP26AaR35t9rQPCHNdW5ZWKjWVvjaTlpeqcrxyf8AJKf0aD5Gqj8r/GUnLS9U5XRkgP8AwKfkI+hZurDwhCFFCEIQCgfZXrc2BkYPhFzj6rAdLlPFT/Zbrr1BbfwGtHMM7/mUHV2MMNc6grZQBnShzG30aGMdt7Vy74KvL/JF1bFd+Q9DsGERNOt0D3nhku4fAjmVGvOn9sXVsUUolJLkkuSSUCiUklJJSSUCiUklYJSSUCiVy4hrg5Oo6wLcStNbrg5Ko6wKzUrpwybMeDvqycKeHtBG4qzp26VOclqoWzStspW02GnQLa95UnlliRqap7/wg2YNxo1fDTwkqystcWENPsbT3ctxwRDwz69Df3KpJ2lxJ3UDa9TDJNufT222vcPUdKjJpiVLsh4rbIw/0OHxBQOcFOQU/UlOHNsRoISmUidKGnsoI1Q4AI6xsltDRI715pA6VIbJyqYgGF23YDnIXBZWCLZYjvlJy0vVOV1ZKMLaGnDrX+zxHQb62g/yqXyy8ZSctL1TlduT3klP6NB8jVm6sOCEIUUIQhBglUBlVKaqtzW6TLOGj979A+NleGP1OxUsrr2OxuAP9Tu5HxKpvImm+0YvFuMMkh3s0HN+JCKuqWIMgLG6mxFo4A2wXmqU6f2xdWxema3xb+I/oK8xznuv2xdWxEBKSSkkpJKilErBKSSkkoFEpJKwSkkoFErFQLug5Ko6wJN1tcLug5Go6wKzUrawJ2wupLHXTaGrc0G1hrJAHCdAXRhjGJ31MhedXgt4rT9b8y4m4fvKUQ4eAALagAlmk3lFRplBvJ3wGLMl4Wkfz/C6nUy2U8VnA76CUUbQQnOCKyZ8KkvZSKBlwlHNXDvfC4fyf4TdZOmKMs1o3XdA/wC022SCKZaDvlJy0vVOV2ZPeR0/o0HyNVK5beMpOWl6pyurJ7yOn9Gg+RqzdWHBCEKKEIQgiXZLrNjo80HS939rQf8AkWqK9hejzpqmc/hayMHhOcegLf2Xq7umRjU1gJ4XE3HMG86fOxJQ7FhrXkaZpJJDwXzR8GoqXVvi38R/QV5hqT3X7YurYvT1b4t/Ef0FeXqo92eLF1bEQglYJSbrF1FKJSSVi6wSgySsEpJKxdAq66B4cHI1HWBct11x+HByNR1jVZqXHaGp0wOjz3lx1MGjjn6DpXA1qm+C4dscTWkd1rdxjpPNq9S6sNbaZDqZPAgSXQLKmN9MtYgsnmSBaHQIOLCpbOIO04j4qcYUzOAUAlBZMeEHnAKn+Szs5gVTrTlEy2YOOflCZ7J8yo8YwbjD8Xf9JmsoqI5cDvlJy8vVOV05PeR0/o0HyNVMZdDvlHy8vVOVz5PeR0/o0HyNWbqw4IQhRQhC01s+xxPefwMe72QT/CCj+yTWmWrkA092Wj1HMHyhXPgFEKelhhH4IY2+sNFzz3VH4dAavFIWHSDUAu4jDc/Bqv8ARWmt8W/iP6CvLlWe7PEh6pi9R1vi38R/QV5arT3Z4kPVMRGolYusXSbqKVdYusXWLoM3RdYWEGbrvpx3yDkKjrGpvTlRjvkHIVHWNWvOpcSbJ6h2WZtx3LO6d6vBHP0FT6KCya8k8PzIQ4jupDnHi6mDm0/uUga1dHNpEaS6JdYagsUU2yRLQYk5yMWgsUVGcajzXg7rB8CR9FKsgH5zDvJnx2nuGnjjnsf4Tn2PXju27irnbz07MpT3+25G3pJ/lNVk54/pqH72YP7Qm+yy6Ifl54dHy83VOVy5PeR0/o0HyNVN5fDu6Pl5uqcrkye8jp/RoOrapWocEIQoBMGXNXsVFIfzWb/JHM0p/Vf9lqtzYo47685xHwHwzudBGexLR7LiMkp1RQu0/wBbyAPhnK5lXfYWo7Us0xGmScgHdaxo/lx5lYiDTW+LfxH9BXlit8YeJD1TF6nrfFv4j+gryvXeMPEh6piDSsLCworKFhJJKBSEm5WLlAtSDJqh+0VVNHpsYKjOO4wSNLvho9YUcBKm3Y7jzq2Ef/iq+ujV86lWe2w1WG9vJWemvEqBxGgkcBUbqsL06XPP7iu8jCch6XnBVrJh7BraDw6elJbRsH4Gew36KXyLIeQtTrKCR0zfyt9kLMrWtF7N5gs8VK61ucBxukEfyFtyOjMc7xuhV03OdICwuzs4WsSOhWzgNAAxspcM/NGdub/Ajn7mObFdM0h/rPw0fwuSy3VDs5xO65x5ykWWXRDOyAO7o+Xm6pyuLJ7yOn9Gg6tqp7sheHR8vN1TlcOT3kdP6NB1bVmtQ4IQhAKm+y1W3qS24Ia1oFjuC+nfu5yuNzgASdQFyd5ef8ccayuazblqGNtx36R8bIsXHkLh5p8Op4yCHbEHOB1hz+6N9/Sn5JiYGtDRqAAHANCUiNNb4t/Ef0FeVq7xh4kPVMXqmt8W/iP6CvKtf4w8SHqmINCwhYUVlCwhAIWEIMqc9jPy6H0Kr66NQVT3sXi9fD6DV9dGrNRaFRFdNdRQ3UhewDXYLiqJmDdPAF1lZRiooN5cElLZPeIVjz4ADd86T9FFsQhe8925zuE6ObUr04zNWxM/ECdxuno0BNVXWOedAslmkO0FsjhDNwu+A4N076hbxsoGmLS46SNW9vnXdTLBaiV0Wc64a7wRut/N69pRjA8NNRJd4OxMILv63bTP5J3OFTSyzazJ37WCsWSrIWWkL7Ifh0fLzdU5W/k95HT+jQdW1VD2RfDo+Xm6pyt7J7yOn9Gg6tqjUOCEIQNuUdRsdJK7/bIHC7uR8Sqh7H9L9oxdjjpEQklPDqb8SFZ2X2d9gkLb6M0ngvr6FG+w9gzmRy1cjSDMQ2O4sdiadJ4CflQWMhCEGmt8W/iP6CvKdcLSHiQ9UxerK3xb+I/oK8p1574eJD1TEGhYRdYUVlCwhBlCwhBlTnsauIrobfoqvro1BlKckMUhpamGSeRkbPslU3OcbDOMrCB8DzKzRcMsi4ppAo7NlrQHVVQe2ub72ULtdXTj9631k+zOC430xdqC1U2UeF/irab1yLtjypwr9bS25QKdHOzCidXPu/8AS6W4HYadG+u2HK3BxrrqT3i4qvLjDHu0VdOGjUM/4lOpw408DY2hrBYDp2yd8paZPvjhv6yn9tH3xw39ZT+2op8WLJk++OG/rKf20ffHDf1lP7agZuyOLuo+Xm6pyt7J3yOn9Gg6tqpLLTHKWpkpG088UhbNKSGOuQDE4XKu3J3yOn9Gg6tqKcEIQg0VtKyaN0Ugux7S1zb2u06CLhbmNAAAAAAAAGoAbSyhAIQhAl7QQQdRBBG8VE5OxvhjrZ0TzZrWgmZ5Oa0WaL32gpchBDu1jhXmHe9f9VjtYYT5h3vn/VTJCCG9rDCfMO98/wCqx2r8J8w730n1UzQghnavwnzDvfSfVHavwnzDvfSfVTNCCG9q/CfMO99J9Uip7F+GPYGZszQ0uLbSl2bnEF2bn3ABspqhBAoOxJhbTdwneLeC57QOHuGg/Fbj2KcI8y/3z/qpuhBCO1ThHmH++f8AVL7VuEfpz7x/1U0Qghfatwj9OfeP+qO1bhH6c+8f9VNEIIX2rcI/Tn3j/qjtW4R+nPvH/VTRCCGHsW4R+nPvH/VZ7V+Efpz7x31UyQgiEPY1wthzmQua6zhnCV4IDgQbG+jQSFK6aBsbGsYLNY1rWjXZrRYDmC2IQCEIQf/Z",
                    brandName: 'Samsung',
                    model: 'S24',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 50000,
                    action: "View",
                    


                },
                {
                    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESEBMQDxMQEA4QEA8QDxAPEBAPDxAQFRUWFxUSFRUYHSggGBonGxYVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0eHSUrLS8tLSs3NS0tLS0tLS0tLS0rLS0rLS0tLS0tKy0tLS0tLS0tLS0tKystKy0tLTcrN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCBgcDAQj/xABLEAACAQICBAYOBQsCBwAAAAAAAQIDBAURBhIhMRNBUWFxcwciMjVSdIGRobGys8LRJUJTkpQUFyMkM2JjcqLB0qPxFUNEVILh4v/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgICAgMBAAAAAAAAAAABAhEDMSFBIjIEE2ES/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjOaSzbyRkQbmr20m91NLJfvNf8AtekD2dw/qwk1ytqPo3jh5eB/Ujh2lnZcuI3E6dmqXBU5yg6lWM58I4vJuMVJKMc1ztm4djzTZYjCcasVTuaWrrqLlqSjLPKUc+h7OLLnROldug8PLwP60OGn4H9aK3hMt2fO09xMt6ua2716Ro2xvsUjRg6lbVhCKbcpVIpJGnT7L+GqTjF1ajjsfA0qlVedRyfkZSaT03ieLqxqOX5BZ0VcXFOLaVao5ZQpyy4tmt/smtrnwdtR/RwhThBKMIU4qEc+JJIvjhtFy0rfzw4d4N3n4tU+R9/O/h/gXf4ar8j1w2g5PXm25S2tnPuyXjmMUL3g7Th6dpwdN0pUaPCRqNrt3KWq+2Us1lnuSfGWy45jGePLcrqN7/O/h/gXn4ap8h+eDD/Au/w1T5HGHpZj/wBpe/h//g2HQHGsYr3tOnc/lFS3kp8Pw1DUhCOq8pKWqsnrZLLjzKSS3TS5WTbo67L+H+Bd/hqvyM6fZfwvWSqSr0tZ5J1berFZ87yyR7UK7pT1W3qSf3XyljXoxnFxqRjODWTjNKUWuRpl7xf1XHk2vsOxCjcU1VoVIVaUlnGcGpJko5JgtL/hWM0beg3HD8TjVcaGbcaNxDbLV8GLTTy58tx1sys1dNJdgAISAAAAAAAAAAAAAAAAFTebeEXLUivRAtipuv8AmdbH1QJiK/OOkOiN1a3NSMaNatRcp6k6EJ1FKm3moyUU2nu378thufYzwKtbynXrR4OpWdOMKX1oU4ttuXI3mtm9au3edDxCFKUoxnsnPWUNj25LNrPd5zS+yjeTtbFcA5RlXqxoSqReUo03Gcmk+JvVyz52WV3vw3uN1TnJwjVjr7pwjKDl5eNFhbPa/wCU/J1opwarUpOEoNNTj2kqc/3XvfTu25H6Y0KxKdxa0qtRZTnb0Zy/mlBSfrBprOjO3GsU6ux9mRbaRzznSp8W2b9S/uVOi/frFOrsPYkT8cl+twXJTXrZtx+mXLfC6sIbEWdOJBs9yLCBfJji+nlUR75GEolZV7FFilDYSMMra9NZ749q/Ie19DYVmDzyqSg+NZrpRa9K4eLpT6Xr6Swfxm490jqRy7TBfSWD+NXHukdRObPt149AAKLAAAAAAAAAAAAAAAABWVqefCfz/DEsyHT7qp1nwxJiKpatPb2y3PNZrj5Srx/C6V1QnQrR1oSyfGmmtqlF8TTNvdNMx4CPIidq6cTtOxlTVRa9StWpp5qk4qClzSkt66EjrWC2DpUnmkm1uWxJLckWcaKXEj7V3MJc00SeeM4o/wCHYexIm6SrK7pvlpr0SZD0Tf0zinV2HsSMOyViCpyoxpv9Yam9n1YNrKXnTy6Gb8U3phzWTG2rqrj9vbxXCz7bLZCPbT83F5SMtOYv9nRnJcsml6DSMJw1zevUzlJ7W3tZt9hh0Utx1frntwfty9LGjpc3voSXRIsbbSGjPZLWpt+EtnnRCpWa5D1eHxfEZ5YY+mmPJmtKzUo5xaafGnmigqvg60ZfvLPoPdUZ0tsO5448TI+JtTjrx8vKnyFdemsy9oGmXfLB/Grj3SOoHKNI6ute4JLluLjPpVJI6ucufbtx6AAUWAAAAAAAAAAAAAAAACBbb6nWz9USeQLXfU66fqiSivcABAYVdzMzCruYHNdDu/GKdVYexI1jH6zr4hWm9qjPUjzRjsXq9JtOhz+mcUf8Kw9iRqMI/p5t+HJ+k6/x3F+XfEjZcKo5JGw2yKHDqmxF5bVDprjxWFM94kWEj1UzGxtK9ZopryOrLLins8vEWsqhR43WyyfI0yNL3Jr+Mz/WcKXg3d4v9FM7McTxeed9hy5Lq5f+gdsOTk+zu4/qAAo0AAAAAAAAAAAAAAAACHQik6mX2rflcYtkwiUt9TrPhiEV6A+glD4zwuKnavJrPpM6+4gV3sZMLWjaFL6YxTqsP9iRrt9buNzVXJUkvSbJoP34xTqsP9iR44vbRndznDbGbzT4m9z9KZvxXTl/Jm5EG2lkWttcmH5BsPCpQlE6Zk4bNL2jXJCrGt07preSFf8AOW0iZLerXNdxq6zyXOjK5xHZvKKpcOpWhFbW5pekizwmZbqZeUs73C21mp3tzHpSorP1nazlek1nwN5gdPjVzc6z5ZOmm/SdUPPz+z18JqAAKLgAAAAAAAAAAAAAAABEpd1U6z4IEsiUu6qdZ8EAivUAEoYyWZDrWux7SaYVdzA5Tg9d08RxjLunSw6nHplGa9WZfqy1VSfM0+nf8zVbZ/S+Ix4m8PfmhP5nQp0s6OfHFqXzNsLpz8vm6R1b7DxrWiZZ047D5OBp/pzXBrF5h3IU1zbSRu9WkVt1ao1xzYZYNGuIy4zPRu3cr2in9rD1l1fWiQ0Nts76HJHWl5ky2V+NRxz5yLXT3vjg3jVz7pHRznOn/fHBvGrn3SOjHn5dvagACqQAAAAAAAAAAAAAAAAiUu6qdZ8ECWQ6XdVOs+CARXrmfMwCUBhV3MzMKu5gcgtI/S+IvkeHrzwn8jpVkk45Pc1kzn2HU88Rxh+BHDZeia/ub7hU84LoNJ0wy+z7b7M4vfF5PyHpJGV3TyeuuiX9meaqJl+/LKzXh5VEQq6JtSRBuJF8WOcUuI7mTex9aZ1KtbijFQXS3m/V6SrxOo5NQjtlJ5JLfmX+iP6Gs6D+tTz6Zra/W/MTnficGPz2g9kFfSODeNXPukdEOd9kLvjgvjVz7pHRDkr04AAhIAAAAAAAAAAAAAAAAQ6XdVOs+CBMIdLuqnWfBAIr0ABKAwq7jMwrbgOcaKUOExXGoeFQskunUnl6TYdH62cEuNbGUugvfrFursPZmW7hwN1UhujN8JDolt9eaNMWXJ6rYYMh3NjJbaX3W8vMyRRnmiQmJdK2S9tbryqLfTn91v1EOVvcVNkKcl+9NakV5zcT4y/7P4zvDL7UGG4FGj+km9es13X1Y80fmQK0+DvKM+JzUX0S2f3Noqmp49+0p8vCwy85Eu+06mOtMOyH3xwbxu590johzvsh98cG8bufdI6IY11wABCQAAAAAAAAAAAAAAAAh0+6qdZ8MSYQYvKrUi/ratSPOtVRfpj6UEV7AAlAYVtxmYVdwGgaDd+sW6vD/ZmbTpNZOUFWh3dHa+eHGvJv85puDXatNIa1Oq9SOI21PgZPZGVei3lT6dV+dpHS2i0Vym5pQ4ZcqUUy1gyivbR21TWj+wm9n8OT+q+bkLK2uVJbC9Yzx4qbmGeSmHMqsxrPYa3Up8LeUaa3RnwkuiO0tcTvIwi22fdGbCUda4qLKpV7lPfGnvXle/zFuorrdUHZB744L41c+6R0M5npLcK60gw+0ovW/IFWuLrLaoOpFKMG+KWSzy5JI6YZV0wABCQAAAAAAAAAAAAAAAA8Lm2U8nm4zjm4TW9cq50+NHuAK2U68XlwXCLw4ThFP/xk9npHDVvsJ/fo/wCRZAnaNK3hqv2E/v0f8g6tX7Cf36P+RZAbNNJ0s0VV/T1KtCakmpQmqlKM4SW6UZKWxlLZ4FpFR7SlfcJSSSirujb1qiXPU1taT52dQA2ac3qYdpJJOMrizcXsadrSaa++QqGjekEO5ubZLk4Cm0v6zqoG6i4yuZLCNI/+5tfw1P8AzDwfSN/9Ta/h6f8AmdNA3T/McpejWPuanK4tZOLzSlb03FPly1yXVwPSKs1CpfwoU3snK3t6EJ5c0s3KL50dLA2mYyNc0N0Ot8OhJUtapXqvWr3FV61WrJ7W2+k2MAhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",
                    brandName: 'Apple',
                    model: '15',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 70000,
                    action: "View",
                    


                },
                {
                    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAQDxAQFQ8PFQ8QEBUPDw8PDw8QFREXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0dHx8rKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQoAvQMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABMEAABAwIBBAoQAwcDBAMAAAABAAIDBBEhBQYSMRM0QVFhcYGxstEHFCIjMlJTcnN0kZKTobPBFTNUQkNigqK00ySU4RaV0vBEY8L/xAAaAQADAQEBAQAAAAAAAAAAAAAAAgMBBAUG/8QAMxEAAgIBAwIEBQMDBAMAAAAAAAECAxEhMTIEEhNBQlEFInGRoRRh0RUzsSMkgcFS4fD/2gAMAwEAAhEDEQA/APYspZRERDG2MjsRfU0b56lSEO7UnZZ2lFWZUN7Eud/MWjkDbLojWjllYwYVwOtv9cnWn7BO9nTWjxf65OtHYHeyF+UQP2f65Otb4aM72ROyr/CPek60eGg72N/Fj4o96TrR4aN72dGVT4o96TrR4Yd7HjKf8A96TrR2B3sy2dufwpXCCFmlObAkF7tEk2DWi+LtzrUJySeEXhBtZZVRVeWpwHCjlscRs9VsJt5jXMI5QhQtfkN3VofsWWv0jf8Afzf5keFaHfWc2PLX6Rv+/l/zI8K0O+sWjlv9IP8AuEv+ZHhWm+JWDSx5caL9rynza4uPs2RZ4VoeJWZyoz1rI3ujk2ZkjDZzXz1LXNO8QXXUm5LRlEosVTnrVxmzi/UDhUzkEEYEEOsQtbknhglF+RdZPnyzOwPjpp9B2LTJVSRXG+A94NuGyeMLHqhHKtFgyHLYG1QeF2UJL/KVb4VpniVndjy3+kZ/3Cb/ADLfCtDxKzmx5b/SM/383+ZHhWh4lYzZ8tsNxSm48nXyE8mlKQt8C72/wc767pU8OX+QzIXZVqqWdtPlGKUAkAtmA2UAm2k19hpD/wBupSjh4ksHTCanHug8o9roaxk8bJYnB0cgDmkboU2sPBVPKyZJ8pfVSOO8SOInD5ALsisQRwzeZszWdeXG0w3HSO8Ft7cp4Frl2oIw7mZI57zj93F/V1pPGfsU8Be5E/PyfycXsd1o8Z+weBH3IJM/p/Jxex3Ws8d+xv6ePuE5Hz52SQRzsa0OwDm3AB4bpoX5eGLOjCyjatxxGoroOclaxAHaklkb3jW1pt52ofMhLJ4RsFmSRQZiZFY6qra140nxTSUlOXY6AiAbI8fxON8fO3yo9NDOZM6b5Y+VG8XWcwloHEAJACQBmM8szIsohrtLYqlgsyVrdK7fEe3DSG9jce0GNtKn+zKV2OBTZsdjJlPMJqqVs7o7GNgjLYmuGpzrk6VtwYDjSV9MovL1Hne2sLQ9AXSQEgBIAinl0cN0p4RycXV9R2LtjuwbTVcHi9pR555DZW0crSO+xtdJA79pkjRfA7xtY8fAFC+tTg0eh8OnKq1Pye5b9ijKp7UtIRouZTzNubWdJH3wDg0mn2rysZSPp84bDaf89/mM5l1+hHD6meYZ/XNa/eDYxxXB/wCVKzcvVsZyV2yPswBo1NFwMANbnHdwuSUmM7FdgOWa7dFwGk04O3bbrTvjVZK2ai3zDyHFX1UkU+loMiMgDXFl3abWi5GOFypyko6lIxcnhGarohFUSxtJIimkjaTrLWSloJ4bBbkzB7XkNpNPATrMcfRC9FbHmy3LaGFAosqQ2gceFnTClY/lZWpfMivzGHeKjhrMof3Dk3TcB7+Zol0ERIASAOIASAEgBIASAEgCGpqAwfxbipCHcQuu7Fhblc6Uk3OtdKikeS45eWdYb/8AutY0NCnIqx5DHAbx5kqWT0a6lFFDmE+1HTX3aeDpyrw69j157mroj313o4+iF0vijk9TMPnHA2aqq4f3jm074uEtD7j5hJJZf/BaDxH/AJMDVDRJAw3HNdgWndHCossgOZwDdd3E47wH3KUYOzTzjdk+odK2PZA+N0bmg6JA0g64P8qVpPcbLWxSyzGaaSUts6WSSQgY6Jc8uI5LoA98zagvS0/oo+iF6GdDzXuzQQU4GtI2akDZwkCncBvx9MKctmVr5Iosxdrz+uZQ/uHKvTcAv5miVyQkAJaYJACQBxACQAkACVdaGYDF3MrV1OWrIWW40iVL5yTcrsUMHK45JIWlxsAeTWUsmomqrJY01OTg0FzhgQxrn6PAbDDlXLZdGPJ4+p11UPyQS/IkzmuOgG4Hw3tG5/DdcsviFK0Tz9P/AHg6V0s2YjMnadL6vD05Fx1bHRbubGh/NPo4+iFd8UcvqZ5lnxUOjygXsNnsETmnhAKlZui9XEpc7KuGWVk0d2vlY107LYRzajY7xFjyqTLIz0kZIBGIJthrvvEJRgyDIUlg+V4gaRrf4RHA3WmUPfQVz9tSxgrqOlYWRNdLI4Fum4DEuwvwa1uYrYNXuev5tzhtHS7+xRdELqwcLerDn163tMyV2U6rSjI4Wn+oJbF8rHqfzoHzE2vP65lD+4cjp+BS7maKy6CQrIMOIASAEgBIA44gYnUtSbMbwVddlL9lntXXV0/nIhKTl9Cpc8krrSSMUEWGTclvlda2q17mwb5x3OLE8FsVx9V1tdK1ep0U9NKx6GtosixsHd92d4i0fu7v8xK+eu+IW2PT5f8AP3/jB6NfSwh+5bx2AAAAA1ACwHIuPOdWW7RTnuHea7mQjDxrMnadL6vD05F6VWxy27myofzT6OPohdD4o5fUzzDP6Bz65+iMAxhcSQ1rRbdJwClZudFWxjRJa/jX7rftvY8qiWIoap0cjnxO0Ta1xbAne+azONgxncifKZHXkc4k3uXOudW+UGgzTiOMc6U09ryTUWp4RvRxj+kL047I8yW7CTOmFwNfJcHk6QUruDK080F5ibXn9cyh/cOS9PwK3cjRq5ISAOFaAkGCCAIZ6hrN253gnhW5CuWCpqqlz+LeC7K61EnhvchZSk4mwbulxAA5SndiQyiG0lICe5wbuuIsT5oPOfnrXndT13asR1f4OynpXLWWi/Jo6KzGhrRYDn3TwnhXz9kpTl3SeWepGKisIOZKpBgma9BjQBnHlMU1JPKdbWEN4Xuwb8yq0w75qIklg8vzJ2nS+rw9ORehVscVu5saD813o4+iFd8UcvqZ5N2TnWrnDc0Gcyhbujpp2MbNNpeFiRhfUbcO+pFsFrSUDaije6AEVFKS+VgJOzQutaQDfbiDwLd0ZsykiddwsQDja5sLpRiJhxHGOdYB7Bk53eYvMZzL1I7I817sJD1opJG7Xyc4UruDK1c0WeYm15/XMof3DkvT8Cl3I0auSyJACstAFnr4meE8E7ze6N+G2pUjVOXkK5JFZU5dGprXW4w354q0aMbiOWStlyq46mM/m0nH5EKuMGpEH4jIT4QA/ha0fO1/mlkysYrzDqaS5BOJ33EuI5SuG1yejZ2VpLZFzTSrzbEdcWHxzrmcCmQqOdTaNCWTJcGGE7K+V7Mipgdd5X/NrR0l6fw2nPdN/QhdLGhU5k7TpfV4enIirY5LdzY0H5rvRx9ELofFHL6meRdlPb58xnMue3dHTTxMe7HwdEAYXdiXO9ikWDM3srGkqY5bYtOjIB4MkTsDhy/NCeAayjQ535siGVlXTaPalQ1zwSbNjJaSRfcQzEYOF+LeMc6Qc9oyczvEXmM6IXqx2R5j3ZMWrTB8W7yc4UruDKVc0WuYe15/XMof3DkvT8Cl3I0dlcjgFra1sXC84hoNsN8ncCpXW5/QxvBSVVc9+DnYeK3Bvs3eW67I1xjsTcmwCR6cUgeUMZELylHREXJWUTDaSZcdyOqtltDVLhlA6VINiqlGUB1ILjqFJwHTC46jhUnEbJ43ndlTtiqmkv3Ny1nmtwHNflXv9PV4dSicNksyyabMjadN6CHpyLzatidu5saD813o4+iF0Pijl9TPIeytcV97YFjbbxsue7dHTRsYtz9HVctvpAg2INtRUS4NM/W4+E6wA3QBun2BYB6n2NMstqqZ+T6g6wdjN8W4bhVI66iS0MJnPkB9HUlljo6Q0eEE4JZRwzYyyj13JkBFPDcY7GzohektjzZbse+FADGstfk6QU7uDK1c0WGYe15/XMof3DkvT8Cl3I0iuSMpVSkvkJ1l8g4g1xaB7AF6MElFJexGW4M5yYUheUAROKwZELigZEDykY6OMlIUZRyWjLAVDVqMqysZh0NZwrnlWVUw+GrUZQKqRDl7KuxU0jge6cNBvG7DmuUUU99iRs54ieVyglew08HIeg5kbTpvQQ9OReJVsFu5saA99d6OPohdD4o5fUzLZ8ZuitaO60XsN2ncSyrU1gaFjgzAP7HVR47Pe/4Uv0z9y/6iPsMPY2qPHZ7Ufpn7h+pj7B2R8xaymkbJG+PSaQcXW+y2NElrkWV8WsYNqcg1FZJE+rbA1sVjaPSe95Gq5OA39Sp2e5N2f+JoZKXRAAGAwHEq5IgksK0wDnjsDydIKdvBlauaCMwdrT+uV/8AcOWdPwKXcjSq5Ioss5ONzKwXBxeBrB8YDe3/AG7pt1U2rHaxJxzqijcV0kiJxQBE9BqIZHJWOgclIyiOFKxsjbpWMObKQlayMpYCoaxRlWUjMCy7OZdFm43E8ZXZ0dGE5MndbrgpZKZdcoaElM12ZG06b0EPTkXzFWx027mvoT31w3QxrTwFosfmF0Pijl9TBK090U0RWCkpjDgKACIigwtKJ6RmoOkguEiY7RXT09lRMTBU5SGi3VrIH3+yS3iylPI7mBtaf1yv/uHLOn4FbuRpLK5LAkGFZlDI7JLub3D+DwXHhH3HzV67nHR6oVxTMxUwOjcWPFnDm3CDuhdkZKSyiTWAWQrWagWQpGORlYMNJWG5GEpcDZOXS4NydGOG+hRy8IM41Ce1N9erFKKwjhlbl5IJqXA8R5kSGjYW2YzSaOmsCe8Q6h/HIvkanoepZua6nfeqqSPHl1eeb/NXX9tHLPmwKt8JUiIwMlMYcBQBPEUGFhTPWM0uqZ9wpMohVEN0JmNGczgj0Wt877FFj+VjVciDMDa03rlf9dyKOBS3kaZXJnEAJBhlc6ZgZWtGtjbO43G4HIBf+ZdvTrEc+5KxlA9VYqIHLBiMrDRpQaMKUYSUYsMjUmyOLtxvOrVaPuZDqJadq8y5kpFdWHE0Az0+Bw3DzKjloYnqX/YZcO0mYC+wUusbmnMvj/I+i8wmi2zU+fN9Ry7FwRwy5sFrfCKrHYRgblphwIAljKADYHLDC2pJEkkOmWQxCmOUOdUB2Jrhqa4E8RFh8ysk/lY1fIq8wNrTeuV/13J+n4DW8jTK5I4gDoQB5/PIXkvd4TyXHjOK9LbQ43LUGeEDpkLgsGRE5AwwrBhiw1CAvgNZwHGswbk2+S6ARRtafC1u4zrQ5eRwzn3PJNLGmiybBJYcDxHmTuWgmdSTsN7UZ6Cl6c6+ZWx9J5hlHtmp9JN9Ry7VwRwy5sFrtZVIiMCK0w4tAkYVgBcLkGFjTPSs1FrBIpNFEyrzteRCwA4OeAeGwJHzSy2ZSHJFT2P9rTeuV/13J6OBtvI0qsTEgBLTDL5bySWOdJGLxuJc4DWwnXhvcy6qrU1h7nPbW85RRSNVySYO8IKIheEFERlYMNQBcZtUOySbIR3MerhfuezX7Er0J3Twse5rHFIjkIJHKiQjZE/wXcTuZbLYVbjOw1tRvoKXpzr5xbH0vmG09u2agt8FzpHC5vcF7sfuu1L5EcMnmbA644lUWxNgRWgcugB7SgAiJyADoHrDCzp5EjQ6YBnW68Ufn/8A5KlLZla+SK7sf7Wm9cr/AK7k9HAa3kaVWJnFoHUAK6wCvq8jwyXJbouO6zufaNSrG2UScq4sp6nNZ37uVp4HtLfmL8yquoXmhfCxsytmzaqBqY13mvb97J1dA3tYI/IVSP3D+Sx5it8SHubhkZyLUbsMgG+RYBapxemQeiyavJ1KIY2sG5i477jrKVvLOKcu55JXuWpCEDiqJE2cd4LuI8yWWwR3BuxHXRRUceykgugprWub2dNvca+eSbWh9I2k9SxpPzXejj6K7nxRwepgdbrKZbCghWgMWgOaVgE8ZQAZC5YYHwPWM1EOcDdKC9/Ac0jhvh91GezLVP5kV/Y/2tN65X/Xcmo4D28jSqxMSAEgBIASAEgBIA4tACrpbnRGoYnj3Ar1R8zmun6UCOcrYOYhe5OkKyIFOTZIfBdxHmU57GxWpm8w9p0/oYunIvCq2Pft3NVSnvrvRx9ELq9KOT1MDrdZTIUEK0BhWgdBQBKwrAConIANhesMOZYf3h3G3pBSs4srVyQF2P8Aa03rlf8AXcijgVt5GlViYkAJACQAkAJACQBDUTaIvunUqQj3MSc+1FW5y60ji3I3OTJAQvcnSFaONWsTBOfBdxHmUZ7GpamZzD2nT+hi6ci8OrY9y3c1NN+a70cfRC6vSjk9TA604lMhQQlaAwrQFdAEjCsAnjcgAyJ6ww5lN3eX/wAvSCnbxZWrmiHsf7Wm9cr/AK7ktHArbyNMrkziAEgBIASAEgBr3gAk6gtSbeEY2kssqaibSNzycAXbCHasHFKTk8kDinSMwRPcnSNwRFyfBmB8aVmdpO49y7iPMpS2BIzWYe06f0MXTkXhVbHsW7mopvznejj6IXV6UcnqYHWHEpkKBuTANKAOXWmDmlYaTRuWAFRuQB2vd3p38vSClbwZSrmjnY92rN63X/Xclo4FbeRplYQSDBIASAEgDjiALnUFq1MbSWSqq6nSOHgjV1rsrr7Uck59z/YFKsKiN5TIZIHe5OkNgaCmDBLGUjDtJJHdyeI8ynJaGqJn8w9p0/oYunIvAq2PRt3NNTnvrvRs6IXV6UcnqYHWHEp0KCErQGFaYcugDoKAJWOWGhEblgDqt3e3cnSCnbwZSrmiTse7Vm9br/ruSUcCtvI0ysIJBgkAJAHHOAFzqC1LOiMbSWWVlVUl2A8Hc4eErrrr7fqcc7HN/sCqpiQxyZDpEbkyGSItBNkY6I0dwYJWRJXI0kdH3LuI8ylKWgGazD2nT+hi6ci8OrY7rdzSwfmu9GzohdXpRxvkwKsOJTowEJWmDSVoDSUGiBQBI0rDCeNyw0fUO727k6QU7eDKVc0Edjvas3rdf9cpKOBa3kahWJnLIAVkARzShoxPEN0poxcthJzUFqV08xecdW4NxdUIKJySk5vUgKoaojStHSGlq3IyRzY1uRsHRGs7jcDwxZkB7WJWzB7mdy7iPMkk9AMhmEP9HT+hi6ci8erY7bdzRwnvx9GzohdfpRxvkwKsOKZGAhKYwaSg0aSgwQKAHNKDSVjlgEkzu4dxfcKVvBlKuaDex1tWb1uv+uUlHAtbyNQrEzjnAYk2CEm9jG0tWCy1e432lWjV7nNO/wAogrscTrVkSUW3ljHBaiqiMITDJC0UZGwLRRk07orMgdDUZAlip3O1A8O8OMpJTS3AErsq01P+ZLpO3GQDTJ/m8EJXKT/b6/xuPGuUtikyvnbIIrwMZEHggEjZZLW13OA5Ap6NtPX8fhfyXXT4WWwLMHacHoYelIvOq2Hs3NDGe/O8yPorr9KOJ8mBVhxTowEJWgMJQYNJQAroAcCgCRrkGkj3dy7i+4UreDKVc0Hdj6UNpJrn/wCXX8f55SdPFuOg984xlqzQPqXHwG8px+S61Wluzlle3xRE6JxxdflwTqUVoiTjKWsiMlo1vYOORg+6bV+T+wygMM8flYviMP3W4l7P7FFEbs8flY/fBRqvIdRYtlj8dvJc/ZZ3f/aG9kvY6Hs8b2MkPMFnevdfdfyb2S9n9mPaW/8A2ckE3/ikd0V6l91/Iypsfpf2JGt3o5Tx7GwfN1/koy6utepfl/8AX/ZRdLa/IlbG7cbEzj0pnfPRA9hXNPr4+Sb/AB/L/KLQ6F+pifAD4Zc/zyC33BZo9i459XY9n2/T+d/ydcOmrj5Z+p5tnBV7NVSEag7Rb5rcBzL1Onh2VJEpvMgPL0lg1vit+ZVaVnLFmy67H+04fQxdJ686rYlZuaBh787zGdFdnpRxPkwGsOJTIwEJWmDCUANJQacugwcCg0e0oMJCe5dxfcKV3BlauaIM0a1zIJmtNv8AVVv7LSfzzukLp6GuMqsszqV/qFq6te7W9/vuA9i7eyK2ROMRmB1gX4RdI2ysYoe3DUoT1OiJNEb6lzTSRaJZQN0Rwrhm+46IrAQ1yi0Pke1yRo0kDlmDTuklwA1z1jRoFlWs2KGWTxWm3GcB8yE1VffNIyTwsnmNCNKUcd1709InHHVgmW5tJ7uX2KlccQFm8s1HY/2nD6GLpPXk1bCWbl8Pzj5jOiuxcUcT5MArDimRgKStMGEoAaSgBXQAgUAOBQBK04O4vuFK7gytXNFZm2+0c/rVZ9Yr0Phy/wBBfVm9RzLcPXW0STJBIpSiVTJYrnALnsxFZZWGWWNO0N4151knI64rAS16g0UTJA5I0NkeHJGjcjw9Lg0WmswaNc9K0MjMZ8VujE2Ma3m54m/88y7egrzNy9iN8sLBlMmmwe/xQbca9GxZwjnj7lLWSXJ5VfGhNs2vY/2nD6KLpSLxatgs3L6/fj5jOiF2LijifJgFWcUyMBHFaYMJQA0lAHLoA7dAHQUASsODvNPOFO7gytXNFRkB3cz+s1n1ivS+GL/br6sOp5lqHrucSCYRC0u4lzWyUUWri5FhEA3UvOsbk8s7I4WxO16g4lEyRr1NxHTJmyJHEZMeHqbQ2R2mkaNOGRZg0jL0jQyPP87q3ZKhwBwjswcmv53Xs9HX2159zkulmQI52hBwvPyVcZmLtEoZ3a1Z7Eze9j7acPooulIvDq2Ns3Lwnvx8xnRC7FxRxPkwCrOKZGAhK0waSgBpK0Dl0AK6AOgrAJYjg7zTzhTu4MpVzRTZDPcz+s1f1nL1vhS/26+rM6r+4XUEN9er5q9tqWkRYQzuHNNlwSWdWdS0JGvU3EdMeHpHEZMkEim4jJj2yKbiOmSCRScRkx2yKbiOmcMiVo1MGrarY43vP7IJ5dz5ohDuko+4zlhZPNXPL3knW439pXuJYRw7snyrJYNaNwJa15myfkUkpTS2EPQux9tOH0UXSkXiVbDWbl0fzj5jOiF2x4o4pbsAqzitRgKStMGFaA0lAHEAK6AOgoAmh/a8084UruDKVc0VubrRoznd7ZrPrOXd0En+nS/dj3JeJkug5dDQqY4OSOI2RwelcRkxwepuIyY8PSOI6Y8SKTiMmPEim4jpndkU3EZM4ZFJodMoM7q3RjbGDi83PENXz5l09JXmXd7C2y0wZjJ7buudQxXfPYhEHr5dJxK1LCMbywB26sewHovY9H+jh9FF0pF4dWxtm5cO/OPmM6IXdHijilyYBV60yFBSgBhK0BiAOXQB26AOoAlgPheaecKV3BlKuaK7N89zP6zWfWcu/wCHr/QX1Y9/MtQ5dmCWR2klwbk6HpXEZM6HpHEZMcHpHEZMcHqbiOmd2RScR0xbIpuIyYtkUXEomYnLdZssrjuDAcQXo0w7I4Izllip26MRO67AJsd0sGd2EAvjuquBPuInw4HlSShoMmb3sebTh9FF0pF4Few9m5bv/OPmM6IXdHijilyYBV60yFBCtAYUANKAOIASAOoAmg/b8084UruDK1c0VuQfAn9ZrPrFej8N/sL6sOo5lndd2CORByzBuR10rRuRaSVoZM7pJGhkzumpuIykc01NxHUhGRSlEdMCyrWaETscXdyOXWlhDMh86GSYNJ3GuwQuJ47Brd4fNVphpk55z1BTCr9ovcRSxYHiKnKOgyka7sd7Ti9FF0nr5evY6rNy5mFpnDea0ewLujxRxS5MrqrWmQoI5aAwoAaUAcQAkAdQBLAfD8084UruDKVc0VGbUwd223dZVVQPEX3H39i7/hcs049mN1K+fJcr0znEsA4swAtJLgbJzSStGpnC9I4jZOF6k4jJjS5SkiiZQZYn036I1Nw5d1UrhhG9w7JFLd2kRgMeVU7cvAkpaB74rldsY4RyuRG6Fbg3IHW2Yx7jqa1zjyBStajByfkmPDVpGm7He04vRRdJ6+Tr2O6zcu8pMLaqVp3NIewkLtg8wRxzWJMqqrWnQgI5aA0oAYUAJACQAkASQ/tAbrX25Bf7JLFmLHreJI84dld9HX1T2Wc18shc0mzXsc8uab7hs7A8K5Om6mXTy7lr7o7rK1NYZpoM96Vw7oSsO6CzS+YK9qPxShrXKON9NNbEn/WdJ48nwnJv6l0/u/sZ+nsF/wBZUnjyfCcj+pdP7/gP09g0540njv8AhOWf1Lp/f8G/p7DhzwpPHf8ACel/qXT+7+xvgTGnPCk8Z/w3LH8Qo9/wb4ExpzvpfGf8NyV9fR7/AIN8GZHJndTWNnPvud7cp/raM7/g1UzK38ep73Lne45W/qHT+/4N8KZaU2dVGxltN993vTk0PiHTp5bf2JyosZIc7qPx3/Ccrf1Tpvd/Yn+lsIpM7qS2DpDwCM/dY/ivTe7+xq6WwzOX84zUDY42lkW7cjTfx21DgXldb8Rd67ILEfyzqpo7NXqz2fsP5O2akubgMZTsFrC50XOcMd7SXAniJRrLNjnVm+ZH9sQ+Ha0jbYuG+FWm3C7WSuqz8yMVWUElzZjj5o0uZdakjkaYA6kk8nJ7jupNlGDDSSeTk9x3UjKAaaSTycnuO6luUAu1JPJye47qRlALtSTycnuO6kZQC7Uk8nJ7jupGUB1lNKCCI5LixHe3dSzKNMnnZmbK97qmnjfouxe0tcDGeXW3ePtsuG2rDyjtqtTWGZI5BqtynlPCxhePa24XOXOfgVV+lqPgydSMAL8Cqv0tR8GTqRgBfgVV+lqPgydSMAc/Aav9LUfBk6kYA5+A1X6Wo+DJ1IwAvwKq/S1HwZOpGAF+BVX6Wo+DJ1IwAvwKq/S1HwZOpGAOfgVX+lqPgydSAF+A1f6Wo+DJ1IAQyDV/pajlheOcIAus2cwaytlaxkRDbjTcbaLBu6R1Di1plHzYrl5H1BmxkNlBTR08eOiLuduvedZRJ5CKwWqUYDyhTMcLuYwnHEtaSng2JNIozTM8RnutVskDnazPEZ7rUZMF2szxGe61GQF2szxGe61GQF2szxGe61GTTvazPJs91qMs3BztZniM91qMmC7WZ4jPdajJgLX5PhNiYYid8xsJ9tlpoA3J0N/yYtz92zqQ0gTYz8Phv+TF8NnUtwgyyT8Oh8jF8JnUjCNyxpydD5GL4bOpGEZlnPw6HyMXw2dSMIMs5+Hw+Ri+GzqRhBljPw+HyMXw2dSMIzLG9oQ+Ri+GzqW4QZYu0IfIxfDZ1IwgyxdoQ+Ri+GzqRhBllrknJcBc28EJ164oz9kktNh46mxgiaxoDGtaN5oDR7AudvJdLBIsNP/Z',
                    brandName: 'Infinix',
                    model: 'Zero',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 15000,
                    action: "View",


                },
                {
                    image: 'data:image/jpeg;base64,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',
                    brandName: 'Infinix',
                    model: 'Zero',
                    ram: '8GB',
                    rom: 256,
                    processor: 'Snapdragon 888',
                    camera: '50mp',
                    price: 15000,
                    action: "View",

                }
              
            ],

        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        ...mapActions(["saveProductDetails", "saveProductImage"]),
        goToProductDetails(data) {
            // console.log(data)
            // return;
            this.saveProductDetails(data)
            this.saveProductImage(data);
            this.$router.push("/product-details")
        },
        goToAltabs() {
            this.$router.push('/altabs/')
        },
        goToMark() {
            this.$router.push('/mark/')
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
        gotonewProfile(profileNew) {
            this.$router.push('/profilenewView/')
        },
        gotoNavbar(navbar){
            this.$router.push('/navbar/')
        },
        gotoProduct(product){
            this.$router.push('/product/')
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
th,
tr {
    text-align: center !important;
    align-content: center !important;
}

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