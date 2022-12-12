<script setup>
    import { reactive } from "vue-demi";

    const state = reactive({
        email : "",   
        password : "",   
        first_name:"",
        last_name:"",
    })

    const createAccount = () =>{
        console.log(state)
    }
</script>

<template>
    <div class="w-6/12 mx-auto mt-10 ">
        <h1 class="mb-3 text-xl">Créer un compte</h1>
        <el-form>
            <div class="mb-2 flex justify-between gap-3">
                <el-input type="text" v-model="state.first_name" placeholder="Prènom" />
                <el-input type="text" v-model="state.last_name" placeholder="Nom" />
            </div>
            <el-input class="mb-2" type="email" v-model="state.email" placeholder="Email" />
            <el-input type="password" v-model="state.password" placeholder="Mots de passe" />

            <div class="text-center mt-3">
                <el-button type="success" @click="createAccount">Créer un compte</el-button>
            </div>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>

</style>