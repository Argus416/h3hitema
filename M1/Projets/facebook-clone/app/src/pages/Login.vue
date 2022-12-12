<script setup>
    import { reactive } from "vue-demi";

    const state = reactive({
        email : "",   
        password : "",   
    })

    const Login = () =>{
        console.log(state)
    }
</script>

<template>
    <div class="w-6/12 mx-auto mt-10 ">
        <h1 class="mb-3 text-xl">Vous-connectez</h1>
        <el-form >
            <el-input class="mb-2" type="email" v-model="state.email" placeholder="Email" />
            <el-input type="password" v-model="state.password" placeholder="Password" />
            <div class="text-center mt-3">
                <el-button type="success" @click="Login">Créer un compte</el-button>
            </div>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>

</style>