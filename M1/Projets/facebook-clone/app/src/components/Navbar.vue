<script setup>
    import {ref} from 'vue';
    import { useUserStore } from '../stores/user';

    const searchResult = ref('')
    const displayOptionsMenu = ref(false)
    const userStore = useUserStore();

    const clickOptions = () =>{
        displayOptionsMenu.value = !displayOptionsMenu.value
    }
</script>

<template>
    <header class="header">
        <el-row class="wrapper">
            <el-col :span="8">
                <div class="searchWrapper">
                    <router-link :to="{name: 'home'}">
                        <el-avatar  :size="38" src-set='https://logo.clearbit.com/facebook.com'/>
                    </router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <el-icon :size="30">
                    <router-link :to="{name: 'home'}">
                        <HomeFilled color="#1877F2"/>
                    </router-link>
                </el-icon>
            </el-col>

            <el-col :span="8" class="right-side">
                <el-avatar @click="clickOptions()" class="icon" :size="30" src-set='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'/>
                <div v-if="displayOptionsMenu">
                    <ul class="menu">
                        <router-link v-if="!userStore.user.isLoggedIn" :to="{ name:'signup' }" @click="clickOptions()">Créer un compte</router-link>
                        <router-link v-if="!userStore.user.isLoggedIn" :to="{ name:'login' }" @click="clickOptions()">Me connecter</router-link>
                        <li v-if="userStore.user.isLoggedIn" class="danger" @click="userStore.logout()">Déconnexion</li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </header>
</template>


<style lang="scss">
@mixin centerElements($col:'row', $gap:0) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: $col;
  gap: $gap;
}

.header {
  height: auto;

  .wrapper {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding-block: .7em;
    padding-inline: 1.5em;
    @include centerElements();

    & > :nth-child(2) {
      @include centerElements();
    }

    & > :last-child {
      @include centerElements();

      justify-content: flex-end;
    }
  }

  .searchWrapper {
    display: flex;
    align-items: center;

    div {
      margin-left: 5px;

      .el-input__wrapper {
        border-radius: 50px !important;
        height: 36px;
      }
    }
  }
}

</style>