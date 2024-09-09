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
              <img style="width: 40%;" src="https://ca.slack-edge.com/T01J3BNRZGB-U0490L84GVB-ea59068d89f0-512">
            </center>
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
            <v-col cols="6">
              <v-btn :disabled="submitting" @click="loginUser" style="background-color: black; color:white">
                Login
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn @click="gotoSignup" style="background-color: black; color:white"> <!--base ka sa methods -->
                Sign up now
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
  name: 'LoginView',
  data() {
    return {
      email: "",
      password: "",
      submitting: false,
    }
  },
  methods: {
    backtoHome() {
      this.$router.push('/');
    },

    async loginUser() {
      this.submitting = true;



      /*this.$cookies.set('email', this.email, '2d')
      this.$cookies.set('password', this.password, '2d')
      const loginCookie = this.$cookies.get('email', 'password')
      this.$router.push('/home')

      localStorage.setItem('email', this.email)
      localStorage.setItem('password', this.password)
      console.log(loginCookie)

      const storeEmail = localStorage.getItem('email')
      console.log(storeEmail)
      const storePassword = localStorage.getItem('password')
      console.log(storePassword)*/


      // axios.post(

      // ).then((response) => {

      // }).catch((err) => {

      // })

      await axios.post("http://localhost:8765/trainee-backend/api/user/sign-in",
        {
          "email": this.email,
          "password": this.password,

        },
        {
          methods: "post",
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then(async (response) => {

        //this is how you set Token
        const loginToken = await response.data.token 
        this.$cookies.set('auth_token', loginToken, '2d')


        //this.$cookies.set('token', this., '1d')
        //this.$cookies.set('token', this.response, '1d')

        //const loginCookie = this.$cookies.get('token')

        this.submitting = false;
        await this.$router.push('/tables')
        console.log(response.data)

      }).catch((error) => {
        alert("ERROR")
        this.submitting = false;
      })
    },
    /* sayHello() {
      alert('Hello Caloy');
    },*/
    gotoSignup() {
      this.$router.push('/signup')
    }
  },

} 
</script>

<style scoped></style>