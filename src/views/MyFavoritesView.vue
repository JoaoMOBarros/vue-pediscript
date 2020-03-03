<template>
  <div class="flex-column">
      <main-header/>
      <favorites/>
  </div>
</template>

<script>
import Favorites from '../components/favorites/MyFavorites'
import MainHeader from "../components/navbar/SearchHeader"
export default {
    components:{
        Favorites,
        MainHeader
    }
}
</script>

<style>

</style>