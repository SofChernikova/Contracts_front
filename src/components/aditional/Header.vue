<template>
  <v-card
      color="grey-lighten-4"
      flat
      height="60px"
      rounded="10"
      class="mb-4"
  >
    <v-toolbar>
      <v-btn icon
             :title="!authorized ? (registration ? 'Авторизация' : 'Регистрация') : 'Выйти'"
             @click="changeForm"
      >
        <v-icon color="black" large v-if="registration">
          mdi-account-key
        </v-icon>
        <v-icon color="black" large v-if="authorization">
          mdi-account-plus
        </v-icon>
        <v-icon color="black" large v-if="authorized">
          mdi-logout
        </v-icon>
      </v-btn>

      <v-btn icon
             v-if="authorized"
             title="Показать все контракты"
             @click="showAll"
      >
        <v-icon color="black" large>
          mdi-view-list
        </v-icon>
      </v-btn>

      <v-btn icon
             v-if="authorized"
             title="Создать новый контракт"
             @click="createNew"
      >
        <v-icon color="black" large>
          mdi-plus-box
        </v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn append-icon="mdi-account-circle"
             v-if="authorized"
             :title="name + ' ' + surname"
      >{{name}} {{surname}}
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Header",

  props:{
    registration: Boolean,
    authorization: Boolean,
    authorized: Boolean,
    name: String,
    surname: String,

    id: Number
  },

  data: () => ({

  }),
  methods: {
    changeForm() {
      if (this.registration) {
        // this.registration = false;
        // this.authorization = true;
        this.$router.push('/authorization')
        return
      }
      if(this.authorization){
        this.$router.push('/registration')
        return;
      }
      if(this.authorized){
        this.$router.push('/authorization')
      }
    },
    showAll(){
      this.$router.push('/' + this.id)
    },
    createNew(){
      this.$router.push('/' + this.id + '/create')
    }
  }
}
</script>

<style scoped>

</style>