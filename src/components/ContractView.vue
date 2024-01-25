<template>
  <div>
    <Header :authorized="true" :name="name" :surname="surname" :id="id"></Header>
    <v-sheet width="600" class="mx-auto mb-4">
      <v-form ref="contrForm" fast-fail @submit.prevent>

        <v-text-field
            :model-value="contractName"
            label="Название договора"
            disabled
        ></v-text-field>

        <v-text-field
            :model-value="number"
            label="Номер договора"
            disabled
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

        <v-btn type="submit" block elevation="8" color="#9ade99" class="mt-2" @click="edit">Редактировать
        </v-btn>
        <v-btn type="submit" block elevation="8" color="warning" class="mt-2" @click="deleteContract">Удалить
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
  name: "ContractView",
  components: {Header},
  data() {
    return {
      name: '',
      surname: '',
      id: Number,

      contractName: '',
      number: '',
      curInitiator: '',
      curDefendant: '',
      curDescription: '',
      curConclusionDate: '',
      curExpirationDate: '',

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
    this.getContractById();

    this.id = this.$route.params.id

    UserService.findById(this.$route.params.id).then(res => {
      this.name = res.data.name
      this.surname = res.data.surname
    })
  },
  methods: {
    getContractById() {
      ContractsService.getById(this.$route.params.id, this.$route.params.num)
          .then(res => {
            let date = res.data.conclusionDate.split("-")
            this.conclusionDate = date[2] + '.' + date[1] + '.' + date[0]

            date = res.data.expirationDate.split('-')
            this.expirationDate = date[2] + '.' + date[1] + '.' + date[0]

            this.contractName = res.data.name
            this.number = res.data.num
            this.initiator = res.data.initiator
            this.defendant = res.data.defendant
            this.description = res.data.description
          })
    },

    edit() {
      this.$refs.contrForm.validate().then(value => {
        if (value.valid) {
          ContractsService.edit(this.$route.params.id, this.$route.params.num,
              this.contractName, this.initiator, this.defendant,
              this.description, this.conclusionDate, this.expirationDate)
              .then(res => {
                console.log(res.data)
                this.getContractById()
              })
        }
      })
    },

    deleteContract() {
      ContractsService.delete(this.$route.params.id, this.$route.params.num)
          .then(() => {
            this.$router.push('/' + this.$route.params.id)
          })
    }
  }
}
</script>

<style scoped>

</style>