<script setup>
    import { reactive, ref } from "vue";
    import {useRouter} from "vue-router"
    import UserContller from "../controllers/User"
    import {useUserStore} from "../stores/user"

    const router = useRouter()
    const form = ref()
    const userStore = useUserStore()

    const loginFormReactive = reactive({
        email : "",   
        password : "",   
    })
    
    const rules = reactive({
        email : [
            { required: true, message: "Veuillez remplir le champ", trigger: 'blur' },
            { min: 3, max: 255, message: 'Taillez minimum entre 3 et 255', trigger: 'blur' },
        ],   
        password : [
            { required: true, message: "Veuillez remplir le champ", trigger: 'blur' },
            { min: 3, max: 255, message: 'Taillez minimum entre 3 et 255', trigger: 'blur' },
        ],   
       
    })

    const Login = async (formEl) =>{
        try{

            if (!formEl) return

            await formEl.validate( async (valid, fields) => {
                if (valid) {
                    const login = await UserContller.Login({...loginFormReactive})
                    console.log(login)
                    console.log('Connected')
                    userStore.login(login)
                    router.push({name : "home"})
                } else {
                    console.log('error submit!', fields)
                }
            })
        }catch(err){
            console.error("Error in Login function", err)
        }
    }
</script>

<template>
    <div class="w-6/12 mx-auto mt-10 ">
        <h1 class="mb-3 text-xl">Connéxion</h1>

        <el-form ref="form" :model="loginFormReactive" :rules="rules" status-icon>
            <el-form-item class="w-full " prop="email">
                <el-input type="email" v-model.trim="loginFormReactive.email" placeholder="Email" />
            </el-form-item>
           
            <el-form-item class="w-full " prop="password">
                <el-input type="password" v-model.trim="loginFormReactive.password" placeholder="Mots de passe" />
            </el-form-item>

            <el-form-item class="   mt-3">
                <el-button class="items-center" type="success" @click="Login(form)">Connexion</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<style lang="scss">
    .el-form-item__content{
        justify-content: center;
    }
</style>