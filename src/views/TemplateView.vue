<template>
  <div class="flex-column">
      <main-header/>
      <template-page/>
  </div>
</template>

<script>
import TemplatePage from '../components/search_results/Template'
import MainHeader from "../components/navbar/SearchHeader"
export default {
    components:{
        TemplatePage,
        MainHeader
    }
}
</script>

<style>

</style>