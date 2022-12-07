<script setup>
import  Comment  from './comment/Comment.vue';


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

            <img src="https://unsplash.it/1920/1080"  alt="img">

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
                    <el-button plain>J'aime</el-button>
                    <el-button plain>Commenter </el-button>
                </div>
            </footer>
        </main>

       <Comment />
    </section>
</template>

<style lang="scss" scoped>

</style>