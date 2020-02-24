<template>
  <div>
    <main-header/>
    <content-table/>
  </div>
</template>

<script>
import ContentTable from '../components/content_table/ContentTable'
import MainHeader from "../components/navbar/Header"
export default {
    components:{
        ContentTable,
        MainHeader
    }
}
</script>

<style>

</style>