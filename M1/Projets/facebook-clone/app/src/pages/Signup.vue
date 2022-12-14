<script setup>
    import { reactive, ref } from "vue";
    import {useRouter} from "vue-router"
    import UserContller from "../controllers/User"

    const router = useRouter()
    const form = ref()
    const emailIsUsed = ref(false)

    const newUserReactive = reactive({
        email : "",   
        password : "",   
        first_name:"",
        last_name:"",
    })
    
    const rules = reactive({
        email : [
            { required: true, message: "Veuillez remplir le champ", trigger: 'blur' },
            { min: 3, max: 255, message: 'Taillez minimum entre 3 et 255', trigger: 'blur' },
        ],   
        password : [
            { required: true, message: "Veuillez remplir le champ", trigger: 'blur' },
            { min: 6, max: 255, message: 'Taillez minimum entre 3 et 255', trigger: 'blur' },
        ],   
        first_name:[
            { required: true, message: "Veuillez remplir le champ", trigger: 'blur' },
            { min: 3, max: 255, message: 'Taillez minimum entre 3 et 255', trigger: 'blur' },
        ],
        last_name:[
            { required: true, message: "Veuillez remplir le champ", trigger: 'blur' },
            { min: 3, max: 255, message: 'Taillez minimum entre 3 et 255', trigger: 'blur' },
        ],
    })

    const createAccount = async (formEl) =>{
        try{

            if (!formEl) return
            
            const emailExistAlready = await UserContller.getUserByEmail(newUserReactive.email)
            console.log(emailExistAlready)
            if(emailExistAlready.length){
                emailIsUsed.value = true
                return
            }else{
                emailIsUsed.value = false

                await formEl.validate( async (valid, fields) => {
                    if (valid) {
                        const newUser = await UserContller.createUser({...newUserReactive})
                        console.log('New user has been added')
                        router.push({name : "login"})

                    } else {
                        console.log('error submit!', fields)
                    }
                })
            }

        }catch(err){
            console.error("Error in createAccount function", err)
        }
    }
</script>

<template>
    <div class="w-6/12 mx-auto mt-10 ">
        <h1 class="mb-3 text-xl">Créer un compte</h1>
        <el-form ref="form" :model="newUserReactive" :rules="rules" status-icon>
            <div class="mb-2 flex justify-between gap-3">
                <el-form-item class="w-full " prop="first_name">
                    <el-input type="text" v-model.trim="newUserReactive.first_name" placeholder="Prènom" />
                </el-form-item>

                <el-form-item class="w-full " prop="last_name">
                    <el-input type="text" v-model="newUserReactive.last_name" placeholder="Nom" />
                </el-form-item>
            </div>

            <el-form-item class="w-full relative" prop="email">
                <el-input  type="email" v-model.trim="newUserReactive.email" placeholder="Email" :class="`${emailIsUsed ? 'mb-2' : ''}`" />
                <span v-if="emailIsUsed" class="text-left text-red-500 absolute left-0 top-9 text-xs">
                    L'email est utilisé par un autre utilisateur
                </span>
            </el-form-item>
           
            <el-form-item class="w-full " prop="password">
                <el-input type="password" v-model.trim="newUserReactive.password" placeholder="Mots de passe" />
            </el-form-item>

            <el-form-item class="   mt-3">
                <el-button class="items-center" type="success" @click="createAccount(form)">Créer un compte</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<style lang="scss">
    .el-form-item__content{
        justify-content: center;
    }

    
</style>