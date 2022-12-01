<script setup lang="ts">
    import {reactive, watch} from "vue";

    const props = defineProps({
        searchCocktail : {
            type: String,
            default : 'margarita',
            required: false
        }
    });
    import Cocktails from "../class/Cocktails";

    const state = reactive({
        cocktails : []
    })

    watch(() => props.searchCocktail ,async (newVal, oldVal) =>{
        state.cocktails = await Cocktails.searchCocktails(newVal)
        console.log(state.cocktails)
    },{
        deep : true,
        immediate : true
    })

</script>

<template>
    <div class="row gx-3 ">
        <div class="card col-lg-3 " v-for="cocktail in state.cocktails" :key="cocktail.idDrink">
            <img :src='cocktail.strDrinkThumb' class="card-img-top" alt="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{cocktail.strDrink}}</h5>
                <p class="card-text">{{cocktail.strInstructions}}</p>
                <a href="#" class="btn btn-primary">go</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>