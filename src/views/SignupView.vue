<template>
    <v-container>
        <v-row no-gutters>

            <!-- LEFT -->
            <v-col cols="4">

            </v-col>
            <!-- CENTER -->
            <v-col cols="4" class="pa-4">
                <v-card elevation="14" class="pa-5" color="surface-variant">
                    <!-- 12 -->
                    <v-row no-gutters class="mt-3">
                        <!-- pag percentage % size ng parent
          pag vw size ng buong screen 1-100 -->
                        <center>
                            <img style="width: 90%;"
                                src="https://ca.slack-edge.com/T01J3BNRZGB-U07GM1VBJ07-4252cad951cc-192">
                        </center>
                    </v-row>

                    <v-row no-gutters class="mt-3">
                        <v-text-field v-model="fullName" label="Full Name" placeholder="Enter full name"
                            type="text"></v-text-field>
                    </v-row>
                    <v-row no-gutters class="mt-3">
                        <v-text-field v-model="address" label="Address" placeholder="Enter your current address"
                            type="text"></v-text-field>
                    </v-row>

                    <v-row no-gutters class="mt-3">
                        <v-text-field v-model="email" label="Email address" placeholder="johndoe@gmail.com"
                            type="email"></v-text-field>
                    </v-row>

                    <v-row no-gutters class="mt-3">
                        <v-text-field v-model="password" label="Password" placeholder="Enter your password"
                            type="password"></v-text-field>
                    </v-row>
                    <v-row no-gutters class="mt-3">
                        <v-text-field v-model="confirmpassword" label="Confirm Password" placeholder="Enter your password"
                            type="password"></v-text-field>
                    </v-row>

                    <v-row no-gutters class="mt-3">
                        <v-col cols="6">
                            <v-btn :disabled="submitting" @click="registerUser" style="background-color: white; color:black">
                                Create Account
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn @click="gotoLogin" style="background-color: black; color:white">
                                Back to Login
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <!-- RIGHT -->
            <v-col cols="4">

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: 'SignupView',
    data() {
        return {
            fullName: "",
            email: "",
            address: "",
            password: "",
            confirmpassword: "",
            submitting: false,
        }
    },
    methods: {
        gotoLogin() {
            this.$router.push('/login')
        },
        registerUser() {
            this.submitting = true;

            // == equal
            // != equal
            // => equal or greater than
            // =< equal or less than

            
            if(this.password != this.confirmpassword) {
                alert("Password doesn't match! ");
                return;
            }

            axios.post("http://localhost:8765/trainee-backend/api/user",
                {
                    "fullName": this.fullName,
                    "email": this.email,
                    "password": this.password,
                    "address": this.address,
                    "role": "USER"
                },
                {
                    methods: "post",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then((response) => {
                alert("REGISTRATION COMPLETE");
                this.submitting = false;
                this.$router.push('/login')
            }).catch((error) => {
                alert("ERROR")
                this.submitting = false;
            })
        }
        /*
        registerUser() {
            // post = execute a function signup, create 
            // put = edit data
            // get = retreive data
            // delete = delete data 

            axios.post("http://localhost:8765/trainee-backend/api/user",
                {
                    // REQUEST BODY
                    "fullName": this.fullName,
                    "email": this.email,
                    "password": this.password,
                    "address": this.address,
                    "role": "USER"
                },
                {
                    // REQUEST HEADERS
                    methods: "post",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => {
                    alert("SUCCESSFULLY CREATED AN ACCOUNT");
                    this.$router.push("/login")
                    console.log(response.data)
                })
        }*/
    }
}

</script>

<style scoped></style>