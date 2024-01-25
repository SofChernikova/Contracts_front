<template>
  <div>
    <Header :registration="true" ></Header>
    <v-sheet width="300" class="mx-auto mb-4">
      <v-form ref="regForm" fast-fail @submit.prevent>
        <v-text-field
            v-model="companyName"
            label="Название компании"
            :rules="companyNameRules"
        ></v-text-field>

        <v-text-field
            v-model="inn"
            label="ИНН"
            :rules="innRules"
        ></v-text-field>

        <v-text-field
            v-model="ogrn"
            label="ОГРН"
            :rules="ogrnRules"
        ></v-text-field>

        <v-text-field
            v-model="surname"
            label="Фамилия"
            :rules="surnameRules"
        ></v-text-field>

        <v-text-field
            v-model="name"
            label="Имя"
            :rules="nameRules"
        ></v-text-field>

        <v-text-field
            v-model="lastname"
            label="Отчество"
            :rules="lastnameRules"
        ></v-text-field>

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

        <v-text-field
            v-model="confirmPassword"
            label="Подтверждение пароля"
            :rules="confirmPasswordRules"
        ></v-text-field>

        <v-btn type="submit" block elevation="8" color="#9ade99" class="mt-2" @click="registration">Зарегистрироваться
        </v-btn>
      </v-form>
    </v-sheet>

    <div style="position: absolute; right: 10px; bottom: 20px;" v-if="showSuccess">
      <v-alert color="success"
               icon="$success"
               title="Успешно!"
               text="Вы успешно зарегистрированы и будете перенаправлены на страницу авторизации"
               variant="tonal"
               max-width="500"
               v-if="showSuccess"></v-alert>
    </div>
  </div>

</template>

<script>
import RegistrationService from "@/services/RegistrationService.js";
import {el, th} from "vuetify/locale";
import Header from "@/components/aditional/Header.vue";

export default {
  name: "RegistrationForm",
  components: {Header},

  data() {
    return {
      showSuccess: false,

      companyName: "",
      companyNameRules: [
        value => {
          if (value.trim().length > 0 && /^\D+$/.test(value)) return true
          return 'Название компании должно содержать хотя бы один символ и не может содержать цифры'
        },
      ],
      inn: "",
      innRules: [
        value => {
          if (value.length === 12 && /^\d+$/.test(value)) return true
          return "ИНН должен содержать 12 цифр"
        },
      ],
      ogrn: "",
      ogrnRules: [
        value => {
          if (value.length === 13 && /^\d+$/.test(value)) return true
          return "ОГРН должен содержать 13 цифр"
        },
      ],
      surname: "",
      surnameRules: [
        value => {
          if (value.trim().length > 0 && /^\D+$/.test(value)) return true
          return 'Фамилия должна содержать хотя бы один символ и не может содержать цифры'
        },
      ],
      name: "",
      nameRules: [
        value => {
          if (value.trim().length > 0 && /^\D+$/.test(value)) return true
          return 'Имя должно содержать хотя бы один символ и не может содержать цифры'
        },
      ],
      lastname: "",
      lastnameRules: [
        value => {
          if (value.trim().length > 0 && /^\D+$/.test(value)) return true
          return 'Отчество должно содержать хотя бы один символ и не может содержать цифры'
        },
      ],
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
      confirmPassword: "",
      confirmPasswordRules: [
        value => {
          if (value === this.password) return true;
          return 'Пароли не совпадают';
        },
      ],
    }
  },
  methods: {
    registration() {
      this.$refs.regForm.validate().then(value => {
        console.log(value.valid)

        if (value.valid) {
          RegistrationService.registration(this.companyName, this.inn, this.ogrn,
              this.surname, this.name, this.lastname, this.email, this.password)
              .then(res => {
                console.log(res.data)

                this.showSuccess = true

                setTimeout(()=>{
                  this.showSuccess = false
                  this.$router.push('/authorization') //Не показывает наличие функции, но работает
                }, 3000)
              })
              .catch(err => {
                console.log(err)
              })
        }
      });
    }
  }
}
</script>

<style>

</style>