<script setup>
    import Navbar from "./components/Navbar.vue"
    import NewPost from "./components/Post/NewPost.vue";
    import { useUserStore } from "./stores/user";
    
    const userStore = useUserStore()

    const toto = () =>{
        console.log(userStore.user)
    }
</script>

<template>
    <div>
        <Navbar/>
        <el-button @click="toto()">test</el-button>
        <RouterView/>       
    </div>

</template>

<style scoped>

</style>
