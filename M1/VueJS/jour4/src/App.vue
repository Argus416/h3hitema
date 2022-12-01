<script setup lang="ts">
    import { Suspense, ref } from "vue";
    import Menu from './components/Menu.vue'
    import MyModal from './components/MyModal.vue'
    import Cocktails from "./pages/Cocktails.vue";
    import CocktailsSuspence from "./components/CocktailsSuspence.vue";

    const searchCocktail = ref('')

    const allPays = [
        {id: 0, nom : "Pays"},
        {id: 1, nom : "France"},
        {id: 2, nom : "Belgique"},
        {id: 3, nom : "Allemagne"},
    ]

</script>

<template>
    <Menu />
    <div class="container">

        <MyModal>
            <template #header>
                <h1>Exo 1</h1>
            </template>
            <template #body>
                <form>
                    <select class="form-select" aria-label="Default select example">
                        <option  v-for="pays in allPays" key="pays.id">{{pays.nom}}</option>
                    </select>
                </form>
            </template>
            <template #footer>
                <button class="btn btn-danger" data-bs-toggle="modal">Fermer</button>
                <a href="https://google.com" target="_blank">google.com</a>
            </template>
        </MyModal>

        <div class="mt-3">
            <input class="form-control my-2" v-model='searchCocktail' placeholder="Rechercher un cocktail"/>

            <Suspense>
                <CocktailsSuspence :search-cocktail='searchCocktail'/>
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
