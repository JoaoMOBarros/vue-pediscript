<template>
  <div class="flex-column">
      <main-header/>
      <edit-box/>
  </div>
</template>

<script>
import EditBox from '../components/edit_screen/EditWithResults'
import MainHeader from "../components/navbar/SearchHeader"
export default {
    components:{
        EditBox,
        MainHeader
    }
}
</script>

<style>

</style>