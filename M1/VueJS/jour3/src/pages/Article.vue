<script setup>
    import { onMounted, ref } from 'vue';
    import Posts from '../class/Posts';
    import { useRouter, useRoute } from 'vue-router'

    const route = useRoute();
    const router = useRouter();

    const { articleId } = route.params

    const post = ref({})


    onMounted(async () =>{
        post.value = await Posts.getPost(articleId);
    })

    const goBack = () =>{
        router.go(-1)
    }

</script>

<template>
    <main
        class="article container mb-4"
    >
        <button
            class="btn btn-primary mb-3"
            @click="goBack()"
        >
            Prev
        </button>
        <h2 class="h4">{{post.title}}</h2>   
        <p>{{post.body}}</p>  
    </main>
</template>

<style lang="scss">

</style>