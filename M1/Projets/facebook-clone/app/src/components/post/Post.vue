<script setup>
    import { ref, watch } from 'vue';
    import Comment from '../comment/Comment.vue';
    import { useUserStore } from '../../stores/user';
        
    const userStore = useUserStore();
    const displayComment = ref(false)
    const commentBtnText = ref('Voir les commentaires')

    watch(() => userStore.isLoggedIn() , (newVal) =>{
        console.log(userStore?.user)
        if(userStore.isLoggedIn()){
            commentBtnText.value = "Commenter"
        }else{
            commentBtnText.value = "Voir les commentaires"
        }
    },{
        immediate: true
    })

    const clickComment = () =>{
        displayComment.value =  !displayComment.value
    }
</script>

<template>
    <section class="post">
        <main>
            <header>
                <div class="left">
                    <el-avatar class="post-avatar" :size="35" src-set='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'/>
                    <div>
                        <h5 class="text item">Mohamad</h5>
                        <span class="small">11 h</span>
                    </div>
                </div>
            </header>

            <div class="post-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta hic nulla facere saepe itaque facilis odit. Quis cupiditate dignissimos consectetur!</p>
            </div>
            <img src="https://unsplash.it/1920/1080" class="img-post"  alt="img">

            <footer>
                <div class="info">
                    <div class="reactions">
                        <span class="medium">
                            15
                        </span>
                    </div>
                    <div class="stats">
                        <span class="medium">19 commentaires</span>
                    </div>
                </div>
                <div class="btns">
                    <el-button v-if="userStore.isLoggedIn()" class="my-btn-no-border"  plain>J'aime</el-button>
                    <el-button class="my-btn-no-border" plain @click="clickComment()">{{commentBtnText}} </el-button>
                </div>
            </footer>
        </main>

       <Comment :display-comment="displayComment" />
    </section>
</template>

<style lang="scss" scoped>

</style>