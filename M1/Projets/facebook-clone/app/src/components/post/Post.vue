<script setup>
    import { API_PUBLIC_URL } from "../../config/api_config";
    import { computed, ref, watch } from 'vue';
    import Comment from '../comment/Comment.vue';
    import { useUserStore } from '../../stores/user';
    import { usePostStore } from '../../stores/post';
    import {formatDay} from "../../helpers/date"
    import CommentBody from "../comment/CommentBody.vue";
    import {fullNameFormater} from "../../helpers/formater" 

    const emits =  defineEmits(["refrechPost"])

    const props = defineProps({
        post : {
            required : true,
            default : {}
        },
        postIndex: {
            required : true,
            default : ""
        },
    })

    const userStore = useUserStore();
    const postStore = usePostStore();

    const displayComment = ref(true)
    const commentBtnText = ref('Voir les commentaires')
    const postRef = ref([])

    watch(() => props.post, (newVal) =>{
        postRef.value = newVal
        console.log(newVal)
    }, {
        deep : true,
        immediate: true
    })

    watch(
        () => userStore.isLoggedIn() , (newVal) =>{
        if(userStore.isLoggedIn()){
            commentBtnText.value = "Commenter"
        }else{
            commentBtnText.value = "Voir les commentaires"
        }
    },{
        deep :true,
        immediate: true
    })
    

    const clickComment = () =>{
        displayComment.value =  !displayComment.value
    }

    const fullName = computed(()=>{
        const user = props?.post?.user
        if(user != undefined){
            return fullNameFormater(user.first_name, user.last_name)
        }
        return ""
    })
    
    const refrechPost = (val)=>{
        displayComment.value =  true
        emits('refrechPost', val);
    }
    // https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png
</script>

<template>
    <section class="post">
        <main>
            <header>
                <div class="left">
                    <el-avatar class="post-avatar" :size="35" :src-set="props?.post?.img_url || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"/>
                    <div>
                        <h5 class="text item">{{fullName}}</h5>
                        <span class="small">{{formatDay(props?.post?.created_at)}}</span>
                    </div>
                </div>
            </header>

            <div class="post-content">
                <p>{{props.post.body}}</p>
            </div>
            <img crossorigin="anonymous" :src="API_PUBLIC_URL+'/'+props.post.image" class="img-post"  alt="img">
            <!--
                <img src="https://unsplash.it/1920/1080" class="img-post"  alt="img">
            -->

            <footer>
                <div class="info">
                    <div class="reactions">
                        <span class="medium">
                            15
                        </span>
                    </div>
                    <div class="stats">
                        <span class="medium">{{postStore.countComments(props.postIndex)}} commentaires</span>
                    </div>
                </div>
                <div class="btns">
                    <el-button v-if="userStore.isLoggedIn()" class="my-btn-no-border"  plain>J'aime</el-button>
                    <el-button class="my-btn-no-border" plain @click="clickComment()">{{commentBtnText}} </el-button>
                </div>
            </footer>
        </main>

        <Comment :display-comment="displayComment" :post-id="postRef.id" @refrechPost="refrechPost" />
        <div  v-for="comment in postRef.comments" :key="comment.id" class="comment-warapper">
            <CommentBody :comment="postRef.comments[0]"  />
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>