<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div class="container">
            <router-link class="navbar-brand" :to="{name:'accueil'}">Jour 3</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link router-link class="nav-link "  :to="{name:'accueil'}">Accueil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link"  :to="{name:'contact'}">Contact</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link"  :to="{name:'blog'}">Blog</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>