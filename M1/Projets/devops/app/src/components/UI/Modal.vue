<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
    toggleModal : {
        type: Boolean, 
        default : false,
        required: true
    }
})

const dialogVisible = ref(props.toggleModal)

function toggleHandler(toggleModal, action = () => false){
    if(action() !== false){
        action()
    }
    dialogVisible.value = toggleModal 
}


</script>

<template>
    <div>
    <el-button text @click="toggleHandler(true)">
      <slot name="textBtn" />
    </el-button>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
    >
        <slot name="content"/>
        
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="toggleHandler(false)" type="info">Annuler</el-button>
          <el-button type="danger" @click="toggleHandler(false)">
            Confirmer
          </el-button>
        </span>
      </template>
    </el-dialog>
    </div>

</template>
  

  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>
  