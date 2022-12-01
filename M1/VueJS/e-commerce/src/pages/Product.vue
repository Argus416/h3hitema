<script setup lang="ts">
import useCatalogueStore from "../stores/Catalogue";
import {ref, watch} from "vue";
import {CatalogueInterface} from "../interfaces/Catalogue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const {productId} = route.params
const catalogueStore = useCatalogueStore()
const catalogue: CatalogueInterface = ref({})

watch(catalogue.value, async (newVal, oldVal) => {
    catalogue.value = await catalogueStore.getCatalogue(productId)
    console.log(catalogue.value)
}, {
    deep: true,
    immediate: true
})


</script>

<template>
    <div class="container">
        <div class="d-flex">
            <div class="left me-4">
                <img :src="catalogue.image" class="img"/>
            </div>
            <div class="right">
                <h1>{{ catalogue.nom }}</h1>
                <p>{{ catalogue.descritpion }}</p>

                <form class="mt-5">
                    <input class="form-control w-50" type="number">
                    <button class="btn btn-primary text-center mt-3">Ajouter au pannier</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.img {
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
}
</style>