
<script setup>
    import { ref } from 'vue';
    import CommentBody from './CommentBody.vue';
    import { useUserStore } from '../../stores/user';
    import { usePostStore } from '../../stores/post';
    import Comment from "../../controllers/Comment"

    const emits =  defineEmits(["refrechPost"])

    const userStore = useUserStore();
    const postStore = usePostStore();

    const currentUser = userStore.user

    const props = defineProps({
        postId:{
            type: String,
            default : false,
            required: true
        },
    })

    const newComment = ref('')

    const submitNewComment = async () =>{
        try{
            if(newComment.value){
                const newCommentBody = {
                    "content": newComment.value,
                    "postId": props.postId,
                    "userId": currentUser.id
                }
                const addComment = await Comment.addComment(newCommentBody)
                newComment.value = ""

                emits('refrechPost', true)
            }
        }catch(err){
            console.error(err)
        }
    }
</script>

<template>
     <section class="comment-warapper">
            <div class="comment-form"  v-if="userStore.isLoggedIn()">
                <el-avatar class="post-avatar" :size="35" src-set='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'/>
                <form @submit.prevent="submitNewComment()" class="w-full">
                    <el-input v-model="newComment"  placeholder="Ecrivez un commentaire..." class="w-full" />
                </form>
            </div>
        </section>
</template>


<style lang="sass" scoped>

</style>