<script setup>
    import { onMounted, ref } from 'vue';
    import Posts from '../class/Posts';
    import { useRouter, useRoute } from 'vue-router'

    const route = useRoute();

    const { articleId } = route.params

    const post = ref({})

    


    onMounted(async () =>{
        post.value = await Posts.getPost(articleId);
    })



</script>

<template>
    <main
        class="article container mb-4"
    >
        <h2 class="h4">{{post.title}}</h2>   
        <p>{{post.body}}</p>  
    </main>
</template>

<style lang="scss">

</style>