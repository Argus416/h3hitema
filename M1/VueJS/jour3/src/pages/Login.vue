<script setup>
    import { useUserStore } from "../stores/userStore.js";
    import { useRouter } from "vue-router";
    import { ref } from "vue";

    const router = useRouter()
    const userStore = useUserStore()
    const form = ref(null)

    const submitHandler = () =>{
        let { email, password } = form?.value
        const data =   {email: email?.value, password:password?.value}
        const isLoggedIn = userStore.login(
          data
        )

        if(isLoggedIn){
            form.value.email.value = ""
            form.value.password.value = ""
            alert('connected')
            router.push({ name : "accueil" })
        }else{
            alert('Error email or password')
        }

    }
</script>

<template>
    <main class="form-signin w-50 m-auto">
        <form ref="form" @submit.prevent="submitHandler()">
            <h1 class="h3 mb-3 fw-normal">Me connecter</h1>

            <div class=" mb-3">
              <label for="floatingInput">Email address</label>
              <input type="text" class="form-control" name="email" id="floatingInput" placeholder="name@example.com">
            </div>
            <div class="mb-3">
              <label for="floatingPassword">Password</label>
              <input type="password" class="form-control" name="password" id="floatingPassword" placeholder="Password">
            </div>


            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
</template>

<style lang="scss" >
</style>