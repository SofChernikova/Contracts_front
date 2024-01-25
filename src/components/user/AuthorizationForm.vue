<template>
  <div>
    <Header :authorization="true"></Header>
    <v-sheet width="300" class="mx-auto mb-4">
      <v-form ref="authForm" fast-fail @submit.prevent>
        <v-text-field
            v-model="email"
            label="Почта"
            :rules="emailRules"
        ></v-text-field>

        <v-text-field
            v-model="password"
            label="Пароль"
            :rules="passwordRules"
        ></v-text-field>

        <v-btn type="submit" block elevation="8" color="#9ade99" class="mt-2" @click="authorization">Войти</v-btn>
      </v-form>
    </v-sheet>

    <div style="position: absolute; right: 10px; bottom: 20px;" v-if="showError">
      <v-alert color="error"
               icon="$error"
               title="Ошибка!"
               :text="errorMes"
               variant="tonal"
               max-width="500"
               v-if="showError"></v-alert>
    </div>

  </div>

</template>

<script>
import AuthorizationService from "@/services/AuthorizationService.js";
import Header from "@/components/aditional/Header.vue";

export default {
  name: "AuthorizationForm",
  components: {Header},
  data() {
    return {
      errorMes: '',
      showError: false,

      email: "",
      emailRules: [
        value => {
          if (value.trim().length > 0
              && /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) return true
          return 'Почта должна иметь вид: test@emple.com'
        },
      ],
      password: "",
      passwordRules: [
        value => {
          if (value.trim().length > 0) return true
          return 'Пароль должен содержать хотя бы один символ'
        },
      ],
    }
  },
  methods: {
    authorization() {
      this.$refs.authForm.validate().then(value => {
        console.log(value.valid)

        if (value.valid) {
          AuthorizationService.authorization(this.email, this.password)
              .then(res => {
                console.log(res.data)
                this.$router.push('/' + res.data.id)
              })
              .catch(err => {
                console.log(err)
                this.errorMes = err.response.data
                this.showError = true

                setTimeout(()=> {
                  this.showError = false
                }, 5000)
              })
        }
      });
    }
  }
}
</script>

<style scoped>

</style>