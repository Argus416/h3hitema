<script setup>
    import { reactive } from '@vue/reactivity';
    import { onMounted, watch } from 'vue';
    import Posts from '../class/Posts';
    import { useRouter, useRoute } from 'vue-router'

    const router = useRouter();
    const route = useRoute();

    const { articleId } = route.params

    const state = reactive({
        post : []
    })

    


    onMounted(async () =>{
        state.post = await Posts.getPost(articleId);
    })


    console.log(state.post)

</script>

<template>
    <main
        class="article container mb-4"
    >
        <h2 class="h4">{{state.post?.title}}</h2>   
        <p>{{state.post?.body}}</p>  
    </main>
</template>

<style lang="scss">

</style>