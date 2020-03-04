<template>
  <div class="corpo flex-column">
    <div class="content-table-page flex-column">
      <div class="content-table-container flex-column">
        <h1 class="title">Template Library</h1>
        <div class="content-table-box flex wrap">
          <div class="content-table-item flex" v-for="content in contents" :key="content">
            <h1>{{content}}</h1>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer-container flex">
        <h1>Pediscripts © 2020 - All Right Reserved</h1>
        <div class="footer-pages flex">
          <h1>Content Library</h1>
          <h1>About</h1>
          <h1>Terms of Use</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        "Cardiology",
        "Dermatology",
        "EENT",
        "Endocrinology",
        "Gastroenterology",
        "Genitourinary/ Renal",
        "Genetics",
        "Hematology/Oncology",
        "Infectious Disease",
        "Neurology",
        "Nutrition",
        "Trauma & Musculoskeletal",
        "Psychosocial",
        "Respiratory",
        "Rheumatology",
        "Surgical",
        "Wellcheck"
      ]
    };
  }
};
</script>

<style>
</style>