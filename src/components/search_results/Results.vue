<template>
  <div class="corpo flex-column">
    <div class="content">
      <div class="results-page flex">
        <div class="results-container">
          <div
          @click="goToTemplate()"
            v-for="result in searchResults"
            :key="result.index"
            class="results-template flex-column"
          >
            <div class="results-title flex">
              <h1>{{result.name}}</h1>
            </div>
            <div class="results-body flex-column">
              <div class="flex">
                <h2>Tags:</h2>
                <p
                  class="tag"
                >{{result.organ_system}}, {{result.cheif_complaint}}, {{result.age}}, {{result.clinical_venue}}, {{result.section}}</p>
              </div>
              <br />
              <div class="template-content">
                <p>{{result.text}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="empty-space"></div>
        <div class="tags-container">
          <p class="tag-title">Organ System</p>
          <select class="input-text-field"></select>
          <p class="tag-title">Chief Compliment</p>
          <select class="input-text-field"></select>
          <p class="tag-title">Age</p>
          <select class="input-text-field"></select>
          <p class="tag-title">Clinical Venue</p>
          <select class="input-text-field"></select>
          <p class="tag-title">Section</p>
          <select class="input-text-field"></select>
        </div>
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
    goToTemplate(){
      this.$router.push("/template");
    }
  },
  data() {
    return {
      searchResults: [
        {
          name: "Chest Pain",
          disease: "",
          organ_system: "Card",
          cheif_complaint: "Chest Pain",
          age: "Adolescent",
          clinical_venue: "Primary Care",
          section: "HPI",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel consequat enim, ut varius enim. Integer sed semper enim. Pellentesque volutpat nibh in nunc egestas porta. Fusce non tincidunt mauris. Nunc tincidunt vel erat vel feugiat. Nullam malesuada, magna sed consequat varius, nibh odio pharetra quam, ac ullamcorper sem diam id tortor. Nam purus lectus, sodales id eros eget, lacinia varius tortor. Maecenas sagittis, quam sit amet mollis mattis, justo arcu commodo ante, ut eleifend risus metus vitae nulla. Pellentesque ultricies nisi nec odio malesuada, vel egestas lacus varius. Praesent finibus, justo vitae cursus sollicitudin, justo magna molestie nibh, nec aliquam magna orci eget purus. In hac habitasse platea dictumst."
        },
        {
          name: "Asthma",
          disease: "",
          organ_system: "Resp",
          cheif_complaint: "Cough",
          age: "Adolescent",
          clinical_venue: "Primary Care",
          section: "Pertinent Negatives",
          text:
            "Proin consectetur egestas accumsan. Donec sit amet nunc cursus, tincidunt odio id, facilisis est. Mauris quis purus posuere, ornare risus id, finibus libero. Ut fermentum urna arcu, et rutrum libero aliquam vitae. Integer consectetur urna in ultrices feugiat. Sed ac convallis nisi, a tincidunt mauris. Nunc id risus dui. Vivamus nec vehicula lorem, sed semper ipsum. Mauris rutrum vestibulum mauris, ac dapibus arcu lacinia tincidunt. Phasellus ut ligula id nibh rutrum dignissim eu sed dui."
        }        
      ]
    };
  }
};
</script>

<style>
</style>