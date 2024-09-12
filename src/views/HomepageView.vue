<template>
    <v-container>
        <v-row justify="center" no-gutters style="background-color:none; color:white">
            <v-col cols="12">
                <v-btn v-for="link in links" :key="link" class="mx-2" color="black" rounded="xl" variant="text">
                    {{ link }}
                </v-btn>

                <v-btn style="background-color: brown; color: white;">Order now</v-btn>
            </v-col>
        </v-row>


        <v-row class="one-section">
            <v-col cols="7">
                <v-row>

                </v-row>
                <!--<h4 align="center">AMBITION IS THE FIRST KEY TO</h4>-->
                <!--<h1>S U C C E S S</h1>-->



            </v-col>
            <v-col cols="5">
                <v-row no-gutters style="margin-top: 20vh; width: 100% !important;">
                    <v-col cols="12" style="width: 100% !important">
                        <p style="color: white; font-size: 3rem; font-weight: 700; text-transform: uppercase; text-align: left;">Major
                            source of fat and protein in diet.</p>
                        <p class="mt-5"
                            style="color: white; font-size: 4.5rem; font-weight: 800; text-transform: uppercase; text-align: center;">
                            PILI NUTS</p>

                        <h5 style="color: azure; font-family: Arial, Helvetica, sans-serif; font-size: 20px">Now
                            available in Catanduanes</h5>
                    </v-col>
                </v-row>
                <v-row no-gutters  class="mt-10">
                    <v-col cols="12">
                    <v-btn size="x-large" style="color:brown; background-color: white; ">Buy Now</v-btn>
                </v-col>
                </v-row>


               
            </v-col>
        </v-row>
        <v-row style="height: 50vh !important;">
            <v-col class="about-me" cols="col" md="8">
            </v-col>
            <v-col cols="col" md="4" class="text-start pa-10">

                <v-row no-gutters>
                    <v-col cols="12">
                        <h3 style="font-size: 50px; color: brown"><strong>ABOUT <br> PILI</strong></h3>
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <v-col cols="12" style="font-size: 30px; text-align: justify;">
                        <h6>Pili, also known as fimbriae, are proteinaceous, filamentous polymeric organelles expressed
                            on the surface of bacteria. They range from a few fractions of a micrometer to > 20 μm in
                            length and vary from 2 to 11 nm in diameter. Their functions include mediation of
                            cell-to-cell interactions, motility, and DNA uptake.
                            <br>Pili nuts usually grow in the Region of Bicol. That's why it is one of the most common
                            livelihoods in the area and can be seen in the market. Tourism contributed to the growth of
                            the Pili Nut business in this area because this is what the tourists buy as a pasalubong.
                        </h6>
                    </v-col>
                </v-row>

                <v-col cols="12" md="4" sm="6">
                    <v-btn size="x-large" block
                        style="background-color: brown; font-weight: bold; color:white;">MORE</v-btn>
                </v-col>



            </v-col>
        </v-row>


        <v-row style="margin-top: 35vh!important; background-color: #7EACB5">

            <v-col cols="12" md="4">

                <v-card elevation="10" height="100%" style="position: relative; ">

                    <v-card-item>
                        <v-card-title style="font-size: 40px; text-align: center; color: brown;">
                            <strong>WHAT IS PILI</strong>
                        </v-card-title>
                        <h4 style="text-align: justify;"> Pili nut kernels are loaded with nutrients such as magnesium,
                            potassium and calcium. More importantly, they are rich in omega fatty acids, phosphorus, and
                            have high levels of protein, promoting heart health and balancing cholesterol (especially
                            important in a country like the Philippines that has love affair with fatty pork). <br><br>
                            These kernels can be processed into nut kernel oil, which is said to be healthier than olive
                            oil.</h4>

                        <v-btn style="background-color: brown; color:white;">Read More</v-btn>

                    </v-card-item>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card elevation="10" height="100%" style="position: relative; ">
                    <v-card-item>
                        <v-card-title style="font-size: 40px; text-align: center; color: brown;">
                            <strong>HISTORY</strong>
                        </v-card-title>
                        <h4 style="text-align: justify;">For a long time, the pili nut was the Philippines best kept
                            secret, even though they’re ubiquitous throughout the country, enjoyed by locals and coveted
                            by tourists who stuff them into their carry-on luggage at airports before heading home. <br>
                            To
                            this day, pili nuts in the Philippines are most often served salted and fried in refined
                            coconut oil, or carmelized in heaps of sugar. Delicious to be sure, but their nutrition
                            compromised for mainstream commercial sale in the country.</h4>

                        <v-btn style="background-color: brown; color:white;">Read More</v-btn>

                    </v-card-item>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <v-card elevation="10" height="100%" style="position: relative; ">
                        <v-card-item>
                            <v-card-title style="font-size: 40px; text-align: center; color: brown;">
                                <strong>HOW TO ORDER</strong>
                            </v-card-title>
                            <h4 style="text-align: justify;"> You can order our Pili Nut pasalubong online and in our
                                physical store. You can also visit some establishment here in Catanduanes that sells
                                Pili Nut and choose their available pasalubongs, you may try buying from the terminal as
                                there is vendor
                                who sells it or yoy may contact them to go to your home and deliver it to safely. Or you
                                can order from the provided number below at contact section.
                                <br><br>
                                So what are you waiting for, GO AND GRAB YOURS NOW!
                            </h4>

                            <v-btn style="background-color: brown; color:white;">Read More</v-btn>

                        </v-card-item>
                    </v-card>


                </v-card>
            </v-col>
        </v-row>
        <v-row>

            <!--OUR PRODUCTS-->

            <v-col cols="12" style="margin-top: 20px; height: 50vh !important;">
                <v-row no-gutters style="height:50vh !important">
                    <v-col>
                        <br>
                        <h1 style="margin-bottom: 20px;">OUR PRODUCTS</h1>

                        <v-row>
                            <v-col>
                                <v-card class="mx-auto" max-width="344">
                                    <v-img class="hover-img" height="200px"
                                        src="https://bulusanruralvagabond.wordpress.com/wp-content/uploads/2013/10/dsc00598-copy-copy.jpg"
                                        cover></v-img>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="mx-auto" max-width="344">
                                    <v-img height="200px"
                                        src="https://naturalzing.com/cdn/shop/products/coconut-pili-nuts-8-oz-794095.jpg?v=1692724064"
                                        cover></v-img>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="mx-auto" max-width="344">
                                    <v-img height="200px"
                                        src="https://jammys.sg/cdn/shop/files/IMG_3595.jpg?v=1714505406&width=1400"
                                        cover></v-img>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="mx-auto" max-width="344">
                                    <v-img height="200px"
                                        src="https://ph-test-11.slatic.net/p/3b171e0cb415760fe02161ec929f03fe.jpg"
                                        cover></v-img>
                                </v-card>
                            </v-col>
                        </v-row>


                        <v-row>
                            <v-col>
                                <v-card class="mx-auto" max-width="344">
                                    <v-img height="200px" src="https://i.ytimg.com/vi/6wNmqM3cWsM/hqdefault.jpg"
                                        cover></v-img>
                                </v-card>
                            </v-col>

                            <v-col>
                                <v-card class="mx-auto" max-width="344">
                                    <v-img height="200px"
                                        src="https://www.wikihow.com/images/2/2b/Make-Crispy-Pili-Final-Version-2.jpg"
                                        cover></v-img>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="mx-auto" max-width="344">
                                    <v-img height="200px"
                                        src="https://t4.ftcdn.net/jpg/03/67/34/57/360_F_367345706_mAoEDSNcFqqMI1E1qaDrrCK7U0eUi46L.jpg"
                                        cover></v-img>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="mx-auto" max-width="344">
                                    <v-img height="200px"
                                        src="https://images.yummy.ph/yummy/uploads/2017/02/nilupak-with-pili-2.jpg"
                                        cover></v-img>
                                </v-card>
                            </v-col>
                        </v-row>


                    </v-col>

                </v-row>
            </v-col>

            <!--THIS IS YOUR CONTACT FORM-->

            <v-col cols="12" style="height: 50vh !important;">
                <v-row no-gutters style="height: 50vh !important;">
                    <v-col class="left-contact" cols="cols" md="6" style="">
                        <!--INPUT HERE THE CONTACT LABELS OR TAGLINE-->
                        <center>
                            <h1 style="margin-bottom: 60px; margin-top: 10%">CONTACT FORM</h1>


                            <h3 style="justify-content: center; position: relative; margin-top: 60px; width: 500px;">
                                PILI NUTS <br>Address: Virac, Catanduanes<br>Contact Number: 09300400200<br> Facebook:
                                Virac Pili Nuts </h3>

                        </center>


                    </v-col>

                    <v-col class="right-contact" cols="cols" md="6" style="">

                        <!--
                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Full Name" placeholder="Full Name"
                                type="text"></v-text-field>
                        </v-row>

                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Address" placeholder="Address"
                                type="text"></v-text-field>
                        </v-row>

                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Age" placeholder="Age" type="text"></v-text-field>
                        </v-row>

                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Message" placeholder="messaege" type="text"
                                row-height="30" rows="4" variant="filled" auto-grow shaped></v-text-field>
                        </v-row>-->

                        <v-col cols="12" md="12" style="margin-top: 10%;">

                            <v-row>

                                <v-text-field label="Full Name" model-value="Full Name"
                                    variant="outlined"></v-text-field>
                            </v-row>


                            <v-row>
                                <v-text-field label="Email Address" model-value="Email Address"
                                    variant="outlined"></v-text-field>
                            </v-row>


                            <v-row>
                                <v-text-field label="Address" model-value="Address" variant="outlined"></v-text-field>
                            </v-row>

                            <v-row>
                                <v-text-field label="Contact Number" model-value="Contact Number"
                                    variant="outlined"></v-text-field>
                            </v-row>


                            <v-row>
                                <v-textarea label="Message here" model-value="Message here" row-height="50" rows="4"
                                    variant="outlined" auto-grow shaped></v-textarea>
                            </v-row>


                        </v-col>

                        <v-col cols="12" md="4" sm="6">
                            <v-btn rectangle="xl" size="x-large" block color="brown">Submit</v-btn>
                        </v-col>

                    </v-col>

                </v-row>

            </v-col>

        </v-row>

    </v-container>



</template>

<script>
export default {
    data: () => ({
        links: [
            'Home',
            'About Us',
            'History',
            'Our Products',
            'Contact Form',
        ],
    }),
}

</script>

<style scoped>
.hover-img{
    transition: transform .5s !important;

}
.hover-img:hover { 
    cursor: pointer !important;
    transform: scale(1.5);
}
.one-section {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://t3.ftcdn.net/jpg/05/98/25/30/240_F_598253060_xNA2VyrT062O8qyNURT3SRW0seJjSdsk.jpg');
    height: 75vh;
    opacity: 0.9;
}

.about-me {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/src/assets/pili.png');
    height: 80vh;
    position: relative;


}

.left-contact {
    margin-top: 80px;

    background-image: url('/src/assets/pili-icon.png');
    display: block;
    margin-left: auto;
    width: 50%;

}
</style>