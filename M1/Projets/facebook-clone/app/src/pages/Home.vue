<script setup>
    import NewPost from '../components/post/NewPost.vue';
    import Post from "../components/post/Post.vue"
    import { useUserStore } from '../stores/user';
    import { usePostStore } from '../stores/post';
    import { watch, reactive } from 'vue-demi';
    
    const userStore = useUserStore();
    const postStore = usePostStore();

    const state = reactive({
        posts : []
    })

    watch(state.posts, async () =>{
        await postStore.LoadPosts()
        state.posts = postStore.posts
    },{
        deep: true,
        immediate : true,
    })

</script>

<template>
     <main id="body">
        <div class="content">
            <NewPost v-if="userStore?.isLoggedIn()" />
            <div v-for="post in state.posts" :key="post?.id">
                <Post :post="post" />
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped>

</style>