<template>
  <v-app>
    <v-main>
      <router-view></router-view>
<!--      <RegistrationForm @reg="reg" v-if="registration" ref="reg"/>-->
<!--      <AuthorizationForm @auth="auth" v-if="authorization"/>-->

<!--      <v-dialog v-model="showRes" v-if="showRes">-->
<!--        <div v-if="showRes"-->
<!--             style="right: 30px; bottom: 10px; position: fixed; width: 300px; height: 100px;">-->
<!--          <v-card text="..." variant="tonal"></v-card>-->
<!--        </div>-->
<!--      </v-dialog>-->

<!--      <v-alert :color="color"-->
<!--               :icon="icon"-->
<!--               :title="title"-->
<!--               :text="text"-->
<!--               variant="tonal"-->
<!--               max-width="500"-->
<!--               v-if="showRes" ></v-alert>-->
    </v-main>
  </v-app>
</template>

<script>
import RegistrationForm from "@/components/user/RegistrationForm.vue";
import AuthorizationForm from "@/components/user/AuthorizationForm.vue";

export default {
  name: 'App',

  data: () => ({
    registration: true,
    authorization: false,
  }),
  created() {
    this.$router.push('/authorization')
  },
  methods: {
    // changeForm() {
    //   if (this.registration) {
    //     this.registration = false;
    //     this.authorization = true;
    //   } else {
    //     this.registration = true;
    //     this.authorization = false;
    //   }
    // },
    // reg(data){
    //   console.log(data)
    //   if(data){
    //     this.registration = false
    //     this.authorization = true
    //
    //     this.showRes = true
    //     this.icon = '$success'
    //     this.text = "Регистрация прошла успешно"
    //     this.color = 'success'
    //     this.title = 'Успешно!'
    //   }
    //   else {
    //     this.showRes = true
    //     this.icon = '$error'
    //     this.text = "Зарегистрироваться не удалось"
    //     this.color = 'error'
    //     this.title = 'Ошибка!'
    //   }
    //   setTimeout(()=> {
    //     this.showRes = false
    //   }, 5000)
    // },

    // auth(data){
    //   console.log(data)
    //   if(data){
    //     this.showRes = true
    //     this.icon = '$success'
    //     this.text = "Авторизация прошла успешно"
    //     this.color = 'success'
    //     this.title = 'Успешно!'
    //   }
    //   else {
    //     this.showRes = true
    //     this.icon = '$error'
    //     this.text = "Авторизоваться не удалось"
    //     this.color = 'error'
    //     this.title = 'Ошибка!'
    //   }
    //   setTimeout(()=> {
    //     this.showRes = false
    //   }, 5000)
    // }
  }
}
</script>
