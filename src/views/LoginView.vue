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
            <v-text-field label="Email address" placeholder="johndoe@gmail.com" type="email"></v-text-field>
          </v-row>

          <v-row no-gutters class="mt-3">
            <v-text-field label="Password" placeholder="Enter your password" type="password"></v-text-field>
          </v-row>

          <v-row no-gutters class="mt-3">
            <v-col cols="6">
              <v-btn @click="backtoHome" style="background-color: black; color:white">
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
export default {
  name: 'LoginView',
  data() {
    return {

    }
  },
  methods: {
    backtoHome() {
      this.$router.push('/');
    },
   sayHello() {
      alert('Hello Caloy');
    },
    gotoSignup() {
      this.$router.push('/signup')
    }
  },

} 
</script>
