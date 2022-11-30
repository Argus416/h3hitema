<script setup>
    import { reactive } from '@vue/reactivity';
    import { onMounted, watch } from 'vue';
    import Posts from '../class/Posts';

    const state = reactive({
        posts : []
    })



    onMounted(async () =>{
        state.posts = await Posts.getPosts();
    })

</script>

<template>
    <main class="articles container">
        <section
            v-for="article in state.posts"
            class="article mb-4"
        >
            <h2 class="h4">{{article.title}}</h2>   
            <p>{{article.body}}</p>  
            <router-link :to="{ name:'article' , params:{ articleId: article.id } }">voir l'article</router-link> 
        </section>
    </main>

</template>

<style lang="scss" scoped>

</style>