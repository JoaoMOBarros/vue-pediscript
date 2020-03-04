<template>
  <div class="flex-column">
      <main-header/>
      <my-template/>
  </div>
</template>

<script>
import MyTemplate from '../components/my_templates/MyTemplate'
import MainHeader from "../components/navbar/SearchHeader"
export default {
    components:{
        MyTemplate,
        MainHeader
    }
}
</script>

<style>

</style>