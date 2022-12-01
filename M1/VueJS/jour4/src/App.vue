<script setup lang="ts">
    import Menu from './components/Menu.vue'
    import MyModal from './components/MyModal.vue'

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
    </div>
</template>

<style scoped lang="scss">

</style>
