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
      <footer-custom/>
    </footer>
  </div>
</template>

<script>
import FooterCustom from "../footer/Footer";
export default {
  components: {
    FooterCustom
  },
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