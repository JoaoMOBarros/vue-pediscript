<template>
  <div class="corpo">
    <div class="favorites-page">
      <div class="favorites-container flex-column">
        <h1 class="page-title">{{userInfo.name}}'s Favorites</h1>
        <div
          v-for="result in searchResults"
          :key="result.index"
          class="favorites-template flex-column"
        >
          <div class="favorites-title flex">
            <h1>{{result.name}}</h1>
            <div class="remove-box flex">
                <img src="../../assets/images/cancel.png">
                <h2 class="remove">Remove</h2>
            </div>
          </div>
          <div class="favorites-body flex-column">
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
  data() {
    return {
      userInfo: {
        name: "Paulo Lemos",
        profession: "Doctor",
        location: "Boston Central Hospital"
      },
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
        },
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
        },
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