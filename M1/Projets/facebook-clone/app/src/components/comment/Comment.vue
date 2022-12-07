
<script setup>
    import CommentBody from './CommentBody.vue';
</script>

<template>
     <section class="comment-warapper">
            <div class="comment-form">
                <el-avatar class="post-avatar" :size="35" src-set='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'/>
                <el-input  placeholder="Ecrivez un commentaire..." />
            </div>

            <CommentBody />
        </section>
</template>


<style lang="sass" scoped>

</style>