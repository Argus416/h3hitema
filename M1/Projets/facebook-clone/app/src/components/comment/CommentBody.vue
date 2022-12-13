
<script setup>
    import {fullNameFormater} from "../../helpers/formater" 

    const props = defineProps({
        comment:{
            default : {}
        }
    })

    console.log(props.comment)
</script>

<template>
    <div class="comment">
        <el-avatar class="post-avatar" :size="35" src-set='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'/>
        <div class="content">
            <div class="content-header">
                <h5>{{fullNameFormater(props.comment.user.first_name, props.comment.user.last_name)}}</h5>
                <span class="small">10/12/2022 à 13h05</span>
            </div>
            <p>{{props.comment.content}}</p>
        </div>
    </div>
</template>


<style lang="sass" scoped>

</style>