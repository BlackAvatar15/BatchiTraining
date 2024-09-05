<template>
    <!--<v-container class="my-5">
        <v-card color="grey" flat class="text-xs-center ma-3">
            <v-row no-gutters v-if="address">
                <v-col cols="4">
                    <v-responsive class="pt-4">
                        <v-img :src="address.image"></v-img>
                    </v-responsive>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="8">
                    <h1>Hi my name is {{ address.name }}</h1>
                    <h1> My work is {{ address.work }}</h1>
                    <h1> I'm {{ address.age }}</h1>
                    <h1>From {{ address.address }}</h1>
                </v-col>
            </v-row>
        </v-card>
    </v-container>-->

    <v-container class="my-1">
        <v-layout row wrap justify-center>
            <v-flex xs12 sm6 md4 lg3>
                <v-card color="grey" class="pa-4" flat>

                    <v-row no-gutters v-if="address">
                        <v-col cols="12">
                            <v-responsive class="pt-4">
                                <v-img :src="address.image"></v-img>
                            </v-responsive>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="20">
                            <div class="text-center">
                                <h1>{{ address.name }}</h1>
                                <h1> My work is {{ address.work }}</h1>
                                <h1> I'm {{ address.age }}</h1>
                                <h1>From {{ address.address }}</h1>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>

            </v-flex>
        </v-layout>
        
    </v-container>

</template>

<script>
export default {
    name: 'Address View',
    data() {
        return {
            profileId: "",
            profileDetails: null,
            imageUrl: "",
            work: null,
            age: null,
            address: null,
            database: [
                {
                    id: "mark",
                    name: "Mark Aeron",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U01QSRSTC0P-00e9a506ad3c-192",
                    work: "Programmer 1",
                    age: 30,
                    address: "Cavite"
                },
                {
                    id: "caloy",
                    name: "Caloy Monroy",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U0490L84GVB-ea59068d89f0-512",
                    work: "Programmer 2",
                    age: 25,
                    address: "Catanduanes"
                },
                {
                    id: "ren",
                    name: "Ren Bacsa",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U01JT2AJ5PA-fc85c418734e-512",
                    work: "Programmer 3",
                    age: 30,
                    address: "Cavite"
                },
                {
                    id: "altabs",
                    name: "Jeyfferson Altabano",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U07GM1VBJ07-4252cad951cc-512",
                    work: "Programmer 4",
                    age: 25,
                    address: "Catanduanes"
                },

            ]
        }
    },
    created() {
        console.log(location.href.split('/profileAddress/')[1]);
        this.profileId = location.href.split('/profileAddress/')[1];

        this.address = this.database.find((x) => x.id === this.profileId);
        console.log(this.address)
    },
    methods: {

    },
}

</script>

<style>
.v-card-subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>