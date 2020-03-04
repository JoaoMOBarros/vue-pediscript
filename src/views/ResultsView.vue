<template>
  <div>
      <main-header/>
      <results/>
  </div>
</template>

<script>
import Results from "../components/search_results/Results"
import MainHeader from "../components/navbar/SearchHeader"
export default {
    components:{
        Results,
        MainHeader
    }
}
</script>

<style>

</style>