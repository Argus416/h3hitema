<script setup lang="ts">
    import Menu from './components/Menu.vue'
    import MyModal from './components/MyModal.vue'
</script>

<template>
    <Menu />
    <div class="container">

        <MyModal>
            <template #header>
                <h1>toto</h1>
            </template>
            <template #body>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                </p>
            </template>
            <template #footer>
                <button class="btn btn-danger" data-bs-toggle="modal">Fermer</button>
            </template>
        </MyModal>
    </div>
</template>

<style scoped lang="scss">

</style>
