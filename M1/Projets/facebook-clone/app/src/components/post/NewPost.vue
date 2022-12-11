
<script setup>
import Modal from '../UI/Modal.vue';
import { ref } from 'vue';
import { genFileId } from 'element-plus'

const newPost = ref('')
const upload = ref("")
const toggleModal = ref(false);

const submitNewPost = () =>{
    newPost.value = ""
}


</script>

<template>
    <section class="new-post-warapper ">
        <div class="new-post-form">
            <div class="new-post-input-wrapper">
                <el-avatar class="post-avatar" :size="35" src-set='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'/>
                <form @submit.prevent="submitNewPost()" class="w-full">
                    <el-input v-model="newPost"  placeholder="Publier un nouveau post..." class="w-full" />
                </form>
            </div>
            <el-upload
                ref="upload"
                class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
            >
                <template #trigger>
                <el-button type="primary">select file</el-button>
                </template>
                
                <el-button class="ml-3" type="success" @click="submitUpload">
                upload to server
                </el-button>
                        
            </el-upload>
        </div>

        
    </section>
</template>


<style lang="sass" scoped>

</style>