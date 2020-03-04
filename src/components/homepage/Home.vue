<template>
  <div class="corpo flex-column">
    <div class="home-page flex-column">
      <div class="home-container flex-column">
        <h1>Try searching what you need</h1>
        <h2>
          Some examples include: adolescent neuro, emergency hyperglycemia,
          nephrotic syndrome, pelvic osteotomy, etc.
        </h2>
        <div class="search-box">
          <input  @click="goToResults()" type="text" placeholder="Find any template you need" />
          <div class="search-block"></div>
          <img src="../../assets/images/search.png" class="input-img" />
        </div>
        <p>Didn't find what you need?</p>
        <p @click="goToTemplateLibrary()" class="table-link">Try the template library</p>
      </div>
    </div>
    <footer>
      <footer-custom />
    </footer>
  </div>
</template>

<script>
import FooterCustom from "../footer/Footer";
export default {
  components: {
    FooterCustom
  },
  methods:{
    goToTemplateLibrary(){
      this.$router.push("/template-library");
    },
    goToResults(){
      this.$router.push("/results");
    }
  }
};
</script>

<style>
</style>