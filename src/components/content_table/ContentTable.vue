<template>
  <div class="corpo">
    <div class="content-table-container flex wrap">
      <div class="content-table-item flex" v-for="content in contents" :key="content">
        <h1>{{content}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
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