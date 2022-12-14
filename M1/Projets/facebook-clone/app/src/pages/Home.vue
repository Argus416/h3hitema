<script setup>
    import NewPost from '../components/post/NewPost.vue';
    import Post from "../components/post/Post.vue"
    import { useUserStore } from '../stores/user';
    import { usePostStore } from '../stores/post';
    import { watch, reactive } from 'vue';
    
    const userStore = useUserStore();
    const postStore = usePostStore();

    const state = reactive({
        posts : [],
        refrechWatcher : false
    })

    watch(()=> state.refrechWatcher , async () =>{
        console.log('reload')
        await postStore.LoadPosts()
        state.posts = postStore.posts
    },{
        immediate : true,
    })

  
</script>

<template>
     <main id="body">
        <div class="content">
            <NewPost v-if="userStore?.isLoggedIn()"  @refrech-post="state.refrechWatcher = !state.refrechWatcher" />
            <div v-if="state.posts.length">
                <div v-for="(post, postIndex) in state.posts" :key="post?.id">
                    <Post :post="post" :post-index="postIndex" @refrech-post="state.refrechWatcher = !state.refrechWatcher" />
                </div>
            </div>
            <div v-else class="text-center text-red-500 font-bold mt-4">
                <h1 class="text-2xl">Aucun post n'est publié</h1>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped>

</style>