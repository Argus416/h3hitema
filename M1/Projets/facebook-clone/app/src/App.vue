<script setup>
import Navbar from "./components/Navbar.vue"
import NewPost from "./components/Post/NewPost.vue";
import Post from "./components/post/Post.vue";
</script>

<template>
    <Navbar/>
    <main id="body">
        <div class="content">
            <NewPost/>
            <Post/>
        </div>
    </main>

</template>

<style scoped>

</style>
