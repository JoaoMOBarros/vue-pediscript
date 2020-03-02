<template>
  <div class="flex-column">
      <main-header/>
      <home/>
  </div>
</template>

<script>
import MainHeader from "../components/navbar/Header"
import Home from "../components/homepage/Home"
export default {
    components:{
        Home,
        MainHeader
    }
}
</script>

<style>

</style>