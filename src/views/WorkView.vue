<template>
    <v-container>
        <v-row no-gutters v-if="work">
            <v-col cols="4">
                <h1>Hi my name is {{work.name}}</h1>
               <h1> My work is {{ work.work }}</h1>
               <img :src="profileDetails.image">
            </v-col>
            <v-col cols="8">

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Work View',
    data() {
        return {
            profileId: "",
            profileDetails: null,
            imageUrl: "",
            work: null,
            database: [
                {
                    id: "mark",
                    name: "Mark Aeron",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U01QSRSTC0P-00e9a506ad3c-192",
                    work: "Programmer 1"
                },
                {
                    id: "caloy",
                    name: "Caloy Monroy",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U0490L84GVB-ea59068d89f0-512",
                    work: "Programmer 2"
                },
                {
                    id: "ren",
                    name: "Ren Bacsa",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U01JT2AJ5PA-fc85c418734e-512",
                    work: "Programmer 3"
                },
                {
                    id: "altabs",
                    name: "Jeyfferson Altabano",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U07GM1VBJ07-4252cad951cc-512",
                    work: "Programmer 4"
                },

            ]
        }
    },
    created() {
        console.log(location.href.split('/profileWork/')[1]);
        this.profileId = location.href.split('/profileWork/')[1];

        this.work = this.database.find((x) => x.id === this.profileId);
        console.log(this.work)
    },
    methods: {

    },
}

</script>

<style></style>