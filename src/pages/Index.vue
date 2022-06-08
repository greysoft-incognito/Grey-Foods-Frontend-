<template>
  <q-page class="">
    <Menu/>
  </q-page>
</template>

<script>
import Menu from '../components/Menu.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components:{
    Menu
  }
})
</script>
