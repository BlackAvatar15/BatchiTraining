<template>

  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent>
      <v-text-field v-model="fullName" :rules="rules" label="Full name"></v-text-field>
      <v-text-field v-model="email" :rules="rules" label="Email"></v-text-field>
      <v-text-field v-model="password" :rules="rules" label="Password"></v-text-field>
      <v-text-field v-model="address" :rules="rules" label="Address"></v-text-field>
      <v-text-field v-model="role" :rules="rules" label="Role"></v-text-field>

      <v-btn class="mt-2" type="submit" block @click="insertCookie()">Submit</v-btn>
    </v-form>
  </v-sheet>

</template>

<script>

export default {
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      address: '',
      role: ''
    }
  },
  methods: {
    insertCookie() {

      this.$cookies.set('fullName', this.fullName, '1d');
      this.$router.push('/tables')
      const cookieVar = this.$cookies.get('fullName')

      localStorage.setItem('email', this.email)
      console.log(cookieVar)

      const storageEmail = localStorage.getItem('email')
      console.log(storageEmail)


    }

  }
}
</script>