
<script setup>
import { ref } from 'vue';

const newPost = ref('')

const submitNewPost = () =>{
    newPost.value = ""
}

</script>

<template>
 <section class="new-post-warapper ">
        <div class="new-post-form">
            <el-avatar class="post-avatar" :size="35" src-set='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'/>
            <form @submit.prevent="submitNewPost()" class="w-full">
                <el-input v-model="newPost"  placeholder="Publier un nouveau post..." class="w-full" />

                <div>
                    <el-button plain>Uploader une image</el-button>
                </div>
            </form>
        </div>

    </section>
</template>


<style lang="sass" scoped>

</style>