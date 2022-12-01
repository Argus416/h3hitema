<script setup lang="ts">

</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark mb-3">
            <div class="container">
                <router-link class="navbar-brand" to="/">E-commerce</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/products">Produits</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/basket">Panier</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/signup">Créer un compte</router-link>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-danger">Déconnexion</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

</style>