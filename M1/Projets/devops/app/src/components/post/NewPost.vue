
<script setup>
import Modal from '../UI/Modal.vue';
import { reactive, ref } from 'vue';
import { genFileId } from 'element-plus'
import { useUserStore } from '../../stores/user';
import Post from "../../controllers/Post"

const emits =  defineEmits(["refrechPost"])

const newPost = reactive({
    content : "",
    imgUrl : ""
})

const upload = ref("")
const toggleModal = ref(false);

const userStore = useUserStore();
const currentUser = userStore.user

const addNewPost =async () =>{
    try{
        if(newPost.content){
            const newCommentBody = {
                body: newPost.content,
                image: newPost.imgUrl,
                userId: currentUser.id
            }
            const addPost = await Post.addPost(newCommentBody)
            newPost.content = ""
            newPost.imgUrl = ""
            console.log("addPost")
            emits('refrechPost', true)
        }
    }catch(err){
        console.error(err)
    }
}


</script>

<template>
    <section class="new-post-warapper ">
        <div class="new-post-form">
            <div class="new-post-input-wrapper">
                <el-avatar class="post-avatar" :size="35" src-set='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'/>
                <div class="w-full" >
                    <el-input type="textarea" v-model="newPost.content"  placeholder="Publier un nouveau post..." class="w-full" />
                    <el-input v-model="newPost.imgUrl"  placeholder="Url d'une image" class="w-full mt-3" />
                    <el-button @click="addNewPost" class="mt-3" type="success">Ajouter</el-button>
                </div>
            </div>
        </div>

        
    </section>
</template>


<style lang="sass" scoped>

</style>