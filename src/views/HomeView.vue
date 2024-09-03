<template>
  <!-- <div class="row">
    <div class="col-md-12 col-lg-5 col-sm-12 col=xs-12">

    </div>
  </div> -->

  <!-- <div class="container"></div> -->
  <v-container>
    <v-col cols="12" style="height: 50vh !important;">
      <v-row no-gutters style="height: 50vh !important;">
        <!-- #REN -->
        <!-- LEFT SIDE BACKGROUND IMAGE -->
        <v-col class="left-section" cols="col" md="8" style="
        ">

        </v-col>
        <!-- RIGHT SIDE -->
        <v-col cols="col" md="4" class="text-start pa-10">
          <v-row no-gutters>
            <v-col cols="12">
              <h1>5 DAYS ONLY</h1>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <h1>20% OFF with CODE:</h1>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <h1 @click="sayHelloUser">CALOY2024</h1>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <h3>Promo code runs until December 01, 2024 only.</h3>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <v-btn size="x-large" style="background-color: black; color:white" @click="goToLoginPage">
                Login
              </v-btn>
            </v-col>
          </v-row>
          <v-row gutters>
            <v-col cols="12">
              <v-btn size="x-large" style="background-color: black; color:white" @click="gotoTables">
                See Tables
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      
      
    }
  },
  created() {

  },
  methods: {
    gotoTables() {
      this.$router.push("/tables")
    },
    goToLoginPage() {
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
.v-container {

  width: 100vw !important;
  height: 100vh !important;
}

.left-section {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/01/midjourney-desktop-background-of-a-cottage-by-the-sea.jpg');
}
</style>