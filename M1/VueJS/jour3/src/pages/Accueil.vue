<script setup>
    import { useTodoStore } from "../stores/todoStore.js"
    import {reactive, ref, watch} from "vue";

    const form = ref(null)
    const state = reactive({
        taches : [],
    })
    const tacheStore = useTodoStore();
    const triggerWatcher = ref(true);

    watch(triggerWatcher, async ()=>{
        console.log("triggerWatcher")
        state.taches = await tacheStore.tachesInit()
        },
        {
            deep : true,
            immediate: true
        }
    )

    const deleteTask = (id) =>{
        tacheStore.delete(id)
        triggerWatcher.value = !triggerWatcher.value
    }

    const submitHandler = () =>{
        const newTaskTitleInput = form.value.taskTitle
        tacheStore.add({nom : newTaskTitleInput.value})
        form.value.taskTitle.value = ""
        triggerWatcher.value = !triggerWatcher.value

    }
</script>

<template>
    <div class="container">

        <h1>Actions à réaliser</h1>

        <form @submit.prevent="submitHandler()" ref="form">
            <input
                type="text"
                class="form-control w-50 mx-auto mb-3 mt-4"
                placeholder="Ajouter une nouvelle tache"
                name="taskTitle"
            />
        </form>
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="tache in state.taches"
                :key="tache.id"
            >
                <div class="wrapper d-flex align-items-center justify-content-between">
                    <div class="left">
                        {{tache.nom}}
                    </div>

                    <div class="right">
                        <button class="btn btn-danger" @click="deleteTask(tache.id)">Supprimer</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>