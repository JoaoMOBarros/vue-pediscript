<template>
  <div class="flex-column">
    <main-header/>
    <content-table/>
  </div>
</template>

<script>
import ContentTable from '../components/content_table/ContentTable'
import MainHeader from "../components/navbar/SearchHeader"
export default {
    components:{
        ContentTable,
        MainHeader,
    }
}
</script>

<style>

</style>