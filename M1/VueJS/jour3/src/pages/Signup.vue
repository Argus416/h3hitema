<script setup>
    import { useUserStore } from "../stores/userStore.js";
    import {ref} from "vue"

    const userStore = useUserStore()
    const form = ref(null)

    const submitHandler = () =>{
        let {email, password} = form.value
        userStore.add(
            {email: email.value, password:password.value}
        )

        form.value.email.value = ""
        form.value.password.value = ""
    }
</script>

<template>
<main class="form-signin w-50 m-auto">
    <form @submit.prevent="submitHandler()" ref="form">
        <h1 class="h3 mb-3 fw-normal">Créer un compte</h1>

        <div class=" mb-3">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" name="email" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Password">
        </div>


        <button class="w-100 btn btn-lg btn-primary" type="submit">Je crée un compte</button>
    </form>
</main>


</template>

<style lang="scss" >
</style>