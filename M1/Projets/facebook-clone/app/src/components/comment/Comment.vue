
<script setup>
    import { ref } from 'vue';
    import CommentBody from './CommentBody.vue';
    import { useUserStore } from '../../stores/user';

    const userStore = useUserStore();

    const props = defineProps({
        displayComment: {
            type: Boolean,
            default : false,
            required: true
        }
    })

    const newComment = ref('')

    const submitNewComment = () =>{
        newComment.value = ""
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

            <CommentBody v-if="props.displayComment" />
        </section>
</template>


<style lang="sass" scoped>

</style>