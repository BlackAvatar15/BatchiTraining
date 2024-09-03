<template>
    <v-container>
        <v-row no-gutters v-if="age">
            <v-col cols="4">
                <h1>Hi my name is {{age.name}}</h1>
               <h1> My work is {{ age.work }}</h1>
               <h1> I'm {{ age.age }}</h1>
            </v-col>
            <v-col cols="8">

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Age View',
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

        this.age = this.database.find((x) => x.id === this.profileId);
        console.log(this.age)
    },
    methods: {

    },
}

</script>

<style></style>