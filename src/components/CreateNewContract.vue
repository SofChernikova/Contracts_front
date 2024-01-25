<template>
  <div>
    <Header :authorized="true" :name="name" :surname="surname" :id="id"></Header>
    <v-sheet width="600" class="mx-auto mb-4">
      <v-form ref="contrForm" fast-fail @submit.prevent>

        <v-text-field
            v-model="contractName"
            label="Название договора"
            :rules="contractNameRules"
        ></v-text-field>

        <v-text-field
            v-model="initiator"
            label="Инициатор"
            :rules="initiatorRules"
        ></v-text-field>

        <v-text-field
            v-model="defendant"
            label="Ответчик"
            :rules="defendantRules"
        ></v-text-field>

        <v-text-field
            v-model="description"
            label="Описание договора"
            :rules="descriptionRules"
        ></v-text-field>

        <v-text-field
            v-model="conclusionDate"
            label="Дата заключения договора в формате ДД.ММ.ГГГГ"
            :rules="conclusionDateRules"
        ></v-text-field>

        <v-text-field
            v-model="expirationDate"
            label="Дата истечения договора в формате ДД.ММ.ГГГГ"
            :rules="expirationDateRules"
        ></v-text-field>

        <v-btn type="submit" block elevation="8" color="#9ade99" class="mt-2" @click="create">Сохранить
        </v-btn>
      </v-form>
    </v-sheet>
  </div>

</template>

<script>
import ContractsService from "@/services/ContractsService.js";
import Header from "@/components/aditional/Header.vue";
import UserService from "@/services/UserService.js";

export default {
  name: "CreateNewContract",
  components: {Header},
  data() {
    return {
      name: '',
      surname: '',
      id: Number,

      contractName: '',
      contractNameRules: [
        value => {
          if (value.trim().length > 0) return true
          return "Реквизиты инициатора договора должны содержать хотя бы один символ"
        },
      ],
      initiator: "",
      initiatorRules: [
        value => {
          if (value.trim().length > 0) return true
          return "Реквизиты инициатора договора должны содержать хотя бы один символ"
        },
      ],
      defendant: "",
      defendantRules: [
        value => {
          if (value.trim().length > 0) return true
          return "Реквизиты ответчика договора должны содержать хотя бы один символ"
        },
      ],
      description: "",
      descriptionRules: [
        value => {
          if (value.trim().length > 0) return true
          return 'Описание договора должно содержать хотя бы один символ'
        },
      ],
      conclusionDate: "",
      conclusionDateRules: [
        value => {
          if (value.trim().length > 0
              && /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d\d$/.test(value)) return true
          return 'Дата должна быть в формате ДД.ММ.ГГГГ'
        },
      ],
      expirationDate: "",
      expirationDateRules: [
        value => {
          if (value.trim().length > 0
              && /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d\d$/.test(value)) return true
          return 'Дата должна быть в формате ДД.ММ.ГГГГ'
        },
      ],
    }
  },
  created() {
    this.id = this.$route.params.id

    UserService.findById(this.$route.params.id).then(res => {
      this.name = res.data.name
      this.surname = res.data.surname
    })
  },
  methods: {
    create() {
      this.$refs.contrForm.validate().then(value => {
        if (value.valid) {
          ContractsService.create(this.$route.params.id,
              this.contractName, this.initiator, this.defendant,
              this.description, this.conclusionDate, this.expirationDate)
              .then(res => {
                console.log(res.data)
                this.$router.push('/' + res.data.user.id)
              })
        }
      })
    },
  }
}
</script>

<style scoped>

</style>