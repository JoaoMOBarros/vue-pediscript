<template>
  <footer>
      <div class="footer-container flex">
        <h1>Pediscripts © 2020 - All Right Reserved</h1>
        <div class="footer-pages flex">
          <h1 @click="goToTemplateLibrary()">Template Library</h1>
          <h1 @click="goToAbout()">About</h1>
          <h1 @click="goToToU()">Terms of Use</h1>
          <h1 @click="goToContactUs()" >Contact Us</h1>
        </div>
        </div>
  </footer>
</template>

<script>
export default {
  methods:{
    goToTemplateLibrary(){
      this.$router.push("/template-library");
    },
    goToAbout(){
      this.$router.push("/about");
    },
    goToToU(){
      this.$router.push("/terms-of-use");
    },
    goToContactUs(){
      this.$router.push("/contact-us");
    }
  }
}
</script>

<style>

</style>