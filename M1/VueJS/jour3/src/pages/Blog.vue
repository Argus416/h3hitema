<script setup>
    import { onMounted, ref } from 'vue';
    import Posts from '../class/Posts';

    const posts = ref({})



    onMounted(async () =>{
        posts.value = await Posts.getPosts();
    })

</script>

<template>
    <main class="articles container">
        <section
            v-for="article in posts"
            class="article mb-4"
            :key="article.id"
        >
            <h2 class="h4" v-more='article.title'></h2>   
            <p v-more.body='article.title'></p>  
            <router-link :to="{ name:'article' , params:{ articleId: article.id } }">voir l'article</router-link> 
        </section>
    </main>

</template>

<style lang="scss" scoped>

</style>