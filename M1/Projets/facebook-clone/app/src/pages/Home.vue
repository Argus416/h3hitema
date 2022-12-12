<script setup>
    import NewPost from '../components/post/NewPost.vue';
    import Post from "../components/post/Post.vue"

    import { useUserStore } from '../stores/user';
    
    const userStore = useUserStore();

</script>

<template>
     <main id="body">
        <div class="content">
            <NewPost v-if="userStore?.isLoggedIn()" />
            <Post />
        </div>
    </main>
</template>



<style lang="scss" scoped>

</style>