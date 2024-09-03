<template>
    <v-container>
        <v-row no-gutters v-if="imageURL">
            <v-col cols="4">
                <img :src="imageURL.image">
            </v-col>
            <v-col cols="8">

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Image View',
    data() {
        return {
            profileId: "",
            profileDetails: null,
            imageUrl: "",
            database: [
                {
                    id: "mark",
                    name: "Mark Aeron",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U01QSRSTC0P-00e9a506ad3c-192"
                },
                {
                    id: "caloy",
                    name: "Caloy Monroy",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U0490L84GVB-ea59068d89f0-512"
                },
                {
                    id: "ren",
                    name: "Ren Bacsa",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U01JT2AJ5PA-fc85c418734e-512"
                },
                {
                    id: "altabs",
                    name: "Jeyfferson Altabano",
                    image: "https://ca.slack-edge.com/T01J3BNRZGB-U07GM1VBJ07-4252cad951cc-512"
                },

            ]
        }
    },
    created() {
        console.log(location.href.split('/profileImage/')[1]);
        this.profileId = location.href.split('/profileImage/')[1];

        this.imageURL = this.database.find((x) => x.id === this.profileId);
        console.log(this.imageURL)
    },
    methods: {

    },
}

</script>

<style></style>