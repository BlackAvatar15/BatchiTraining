<template>
    <v-card>
        <v-layout>
            <v-app-bar color="primary" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>My files</v-toolbar-title>

                <v-spacer></v-spacer>

                <template v-if="$vuetify.display.mdAndUp">
                    <v-btn icon="mdi-magnify" variant="text"></v-btn>

                    <v-btn icon="mdi-filter" variant="text"></v-btn>
                </template>

                <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
                <v-list>
                    <v-list-item @click="goToProfile('mark')" style="cursor: pointer;">
                        MARK
                    </v-list-item>
                    <v-list-item @click="goToProfile('caloy')" style="cursor: pointer;">
                        CALOY
                    </v-list-item>
                    <v-list-item @click="goToProfile('ren')" style="cursor: pointer;">
                        REN
                    </v-list-item>
                    <v-list-item @click="goToProfile('altabs')" style="cursor: pointer;">
                        ALTABS
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 500px;">
                <v-card-text>
                    The navigation drawer will appear from the bottom on smaller size screens.
                </v-card-text>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    name: 'TablesView',
    data() {
        return {
            drawer: false,
            group: null,
            items: [
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

        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        goToProfile(name) {
            this.$router.push('/profileWork/' + name)
        },
        goToProfile(work) {
            this.$router.push('/profileWork/' + work)
        },
        goToProfile(age) {
            this.$router.push('/profileAge/' + age)
        },
        goToProfile(address) {
            this.$router.push('/profileAddress/' + address)
        },
        goToAnyRoute(route) {
            this.$router.push(route)
        },

    }
}
</script>

<style></style>