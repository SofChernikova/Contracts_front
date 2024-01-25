import {createRouter, createWebHashHistory} from "vue-router";

import AuthorizationForm from "@/components/user/AuthorizationForm.vue";
import RegistrationForm from "@/components/user/RegistrationForm.vue";
import CreateNewContract from "@/components/CreateNewContract.vue";
import ContractsView from "@/components/ContractsView.vue";
import ContractView from "@/components/ContractView.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/registration', component: RegistrationForm},
        {path: '/authorization', component: AuthorizationForm},
        {path: '/:id/create', component: CreateNewContract},
        {path: '/:id', component: ContractsView},
        {path: '/:id/:num', component: ContractView},
    ]
})