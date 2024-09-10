<template>
    <v-container>
        <v-row justify="center" no-gutters style="background-color:white; color:white">
            <v-col cols="12">
                <v-btn v-for="link in links" :key="link" class="mx-2" color="black" rounded="xl" variant="text">
                    {{ link }}
                </v-btn>
            </v-col>
        </v-row>


        <v-row class="one-section">
            <v-col cols="12">
                <center>
                    <v-row>
                        <h4>AMBITION IS THE FIRST KEY TO</h4>
                        <h1>S U C C E S S</h1>
                    </v-row>
                </center>
                <v-btn style="background-color: black; color: white;">Book Now</v-btn>


            </v-col>
        </v-row>
        <v-row style="height: 50vh !important;">
            <v-col class="about-me" cols="col" md="8">
            </v-col>
            <v-col cols="col" md="4" class="text-start pa-10">

                <v-row no-gutters>
                    <v-col cols="12">
                        <h3>ABOUT ME</h3>
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <v-col cols="12">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel optio, ipsam hic beatae
                            consectetur
                            harum ex repellat animi exercitationem obcaecati, illo temporibus mollitia expedita,
                            fugiat
                            iure. Quisquam autem mollitia consequatur.</h5>
                    </v-col>
                </v-row>

                <v-row>
                    <v-btn>MORE</v-btn>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="margin-top: 35vh !important;">
            <v-col cols="12" md="4">
                <v-card>
                    <v-card-item>
                        <v-card-title>ONLINE COACHING</v-card-title>
                        <v-card-subtitle> Working on new habits and hobbies to achieve your goals.
                        </v-card-subtitle>
                        <v-row no-gutters class="mt-2">
                            <v-text-field v-model="email" label="Full Name" placeholder="Full Name"
                                type="text"></v-text-field>
                        </v-row>
                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Address" placeholder="Address"
                                type="text"></v-text-field>
                        </v-row>

                        <v-btn>Booking</v-btn>

                    </v-card-item>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <v-card-item>
                        <v-card-title>COUPLE GUIDANCE</v-card-title>
                        <v-card-subtitle> Working on new habits and hobbies to achieve your goals.
                        </v-card-subtitle>
                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Full Name" placeholder="Full Name"
                                type="text"></v-text-field>
                        </v-row>
                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Address" placeholder="Address"
                                type="text"></v-text-field>
                        </v-row>

                        <v-btn>Booking</v-btn>

                    </v-card-item>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <v-card-item>
                        <v-card-title>SELF IMPROVEMENT WORKSHOP</v-card-title>
                        <v-card-subtitle> Working on new habits and hobbies to achieve your goals.
                        </v-card-subtitle>
                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Full Name" placeholder="Full Name"
                                type="text"></v-text-field>
                        </v-row>
                        <v-row no-gutters class="mt-3">
                            <v-text-field v-model="email" label="Address" placeholder="Address"
                                type="text"></v-text-field>
                        </v-row>

                        <v-btn>Booking</v-btn>

                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" style="height: 50vh !important;">
                <v-row no-gutters style="height: 50vh !important;">
                    <v-col class="left-contact" cols="cols" md="6" style="">
                        <!--INPUT HERE THE CONTACT LABELS OR TAGLINE-->
                        <h1>CONTACT FORM</h1>
                        <h1></h1>
                        <h3 style="justify-content: center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                            optio, ipsam hic beatae
                            consectetur harum<br> ex repellat animi exercitationem obcaecati, illo temporibus mollitia
                            expedita, fugiat iure. Quisquam autem mollitia consequatur.</h3>

                    </v-col>

                    <v-col class="left-contact" cols="cols" md="6" style="">
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
                        </v-row>

                        <v-col cols="12" md="4" sm="6">
                            <v-btn rounded="xl" size="x-large" block color="blue">Submit</v-btn>
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
            'Team',
            'Services',
            'Blog',
            'Contact Us',
        ],
    }),
}

</script>

<style scoped>
.one-section {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/01/midjourney-desktop-background-of-a-cottage-by-the-sea.jpg');
    height: 75vh;


}

.about-me {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://aofoto.pl/wp-content/uploads/2022/06/03-professional-headshot.jpg');
    height: 75vh;

}
</style>