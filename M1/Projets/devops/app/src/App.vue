<script setup>
    import Navbar from "./components/Navbar.vue"
    import NewPost from "./components/Post/NewPost.vue";
    import { useUserStore } from "./stores/user";
    import { usePostStore } from "./stores/post";
    
    const userStore = useUserStore()
    const postStore = usePostStore()

    const toto = () =>{
        console.log(postStore.post)
    }
</script>

<template>
    <div>
        <Navbar/>
        <RouterView/>       
    </div>

</template>

<style scoped>

</style>
