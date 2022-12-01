<script setup lang="ts">

import {watch, ref} from "vue";
import {CatalogueInterface} from "../interfaces/Catalogue";
import Catalogue from "../class/Catalogue";
import useCatalogueStore from "../stores/Catalogue";

const catalogues: CatalogueInterface = ref([])
const catalogueStore = useCatalogueStore()

watch(() => catalogues, async (newVal, oldVal) => {
    catalogues.value = await catalogueStore.initCatalogue()
}, {
    deep: true,
    immediate: true
})

</script>

<template>
    <div class="container">
        <h1>Accueil</h1>

        <div class="d-flex align-items-center gap-3">
            <div class="card" style="width: calc(100% / 3);" v-for="catalogue in catalogues">
                <img :src="catalogue.image" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ catalogue.nom }}</h5>
                    <p class="card-text">{{ catalogue.descritpion }}</p>
                    <router-link :to="{name:'product', params:{productId: catalogue.id}}" class="btn btn-primary">Go
                        somewhere
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>