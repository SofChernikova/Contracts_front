<template>
  <div class="container">
    <Header :authorized="true" :name="name" :surname="surname" :id="id"></Header>

    <h1 class="text-center">Список договоров</h1>
    <table class="table table-striped" style="table-layout: fixed;">
      <colgroup>
        <col style="width: 14%;">
        <col style="width: 14%;">
        <col style="width: 14%;">
        <col style="width: 14%;">
        <col style="width: 14%;">
        <col style="width: 14%;">
        <col style="width: 14%;">
      </colgroup>
      <thead>
      <th> Название </th>
      <th> Номер </th>
      <th> Инициатор </th>
      <th> Ответчик </th>
      <th> Описание </th>
      <th> Дата заключения </th>
      <th> Дата истечения </th>
      </thead>
      <tbody>
      <tr v-for="contract in contracts" :key="contract.id" @click="getByNum(contract.num)">
        <td>{{ contract.name }}</td>
        <td>{{ contract.num }}</td>
        <td>{{ contract.initiator }}</td>
        <td>{{ contract.defendant }}</td>
        <td>{{ contract.description }}</td>
        <td>{{ contract.conclusionDate }}</td>
        <td>{{ contract.expirationDate }}</td>
      </tr>
      </tbody>
    </table>
<!--кнопку для создания сделать чтобы она менялась с просмотром всех-->
  </div>
</template>

<script>

import ContractsService from "@/services/ContractsService.js";
import Header from "@/components/aditional/Header.vue";
import UserService from "@/services/UserService.js";

export default {
  name: "ContactsView",
  components: {Header},

  data() {
    return {
      contracts: [], //массив объектов
      name: '',
      surname: '',
      id: Number,
    }
  },
  created() { //при создании данного компонента вызовется метод ниже
    this.getAll()

    this.id = this.$route.params.id

    UserService.findById(this.$route.params.id).then(res => {
      this.name = res.data.name
      this.surname = res.data.surname
    })
  },
  methods: {
    getAll(){
      ContractsService.getAll(this.$route.params.id).then(res => {
        this.contracts = res.data
      })
    },

    getByNum(num){
      this.$router.push('/' + this.$route.params.id + '/' + num) // переходим на просмотр одного контракта
    }
  },
}
</script>

<style>
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #9ade99;
}
</style>