<template>
  <div class="corpo flex-column">
    <div class="edit-page flex">
      <div class="edit-template-container flex-column">
        <div class="edit-template-header flex">
          <h1>{{templateInfo.name}}</h1>
          <div class="btn-group flex">
            <div id="edit-template-copy-btn " class="btn flex">
              <img src="../../assets/images/copy.png" alt />
              Copy
            </div>
            <div id="edit-template-pin-btn" class="btn flex">
              <img src="../../assets/images/tack.png" alt />
              Pin
            </div>
          </div>
        </div>
        <div class="edit-template-body">
          <h2>Categories</h2>
          <p>{{templateInfo.organ_system}}, {{templateInfo.cheif_complaint}}, {{templateInfo.age}}, {{templateInfo.clinical_venue}}, {{templateInfo.section}}</p>
          <h2>Description</h2>
          <p>{{templateInfo.text}}</p>
        </div>
      </div>

      <div class="empty-space"></div>

      <div class="edit-container flex-column">
        <div class="row flex-column">
          <h1>Title*</h1>
          <input type="text" />
        </div>
        <div class="row flex">
          <div class="field-box">
            <h1>Dot Frase</h1>
            <input class="left" type="text" />
          </div>
          <div class="field-box">
            <div class="right">
              <h1>Disease*</h1>
              <input type="text" />
            </div>
          </div>
        </div>

        <div class="row flex">
          <div class="field-box">
            <h1>Organ System*</h1>
            <select class="left" name id></select>
          </div>
          <div class="field-box">
            <div class="right">
              <h1>Chief Compliment*</h1>
              <select name id></select>
            </div>
          </div>
        </div>

        <div class="row flex">
          <div class="field-box">
            <h1>Age*</h1>
            <select class="left" name id></select>
          </div>
          <div class="field-box">
            <div class="right">
              <h1>Clinica Venue*</h1>
              <select name id></select>
            </div>
          </div>
        </div>

        <div class="content-box flex-colunm">
          <h1>Template*</h1>
          <textarea></textarea>
        </div>
        <div class="btn-container flex">
          <div class="btn-outlined-blue">
            <h2>Copy</h2>
          </div>
          <div class="right flex">
            <div class="btn-solid-blue">
              <h2>Save</h2>
            </div>
            <div class="btn-solid-blue flex">
              <h2>Save and Share</h2>
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
      templateInfo: {
        name: "Chest Pain",
        disease: "",
        organ_system: "Card",
        cheif_complaint: "Chest Pain",
        age: "Adolescent",
        clinical_venue: "Primary Care",
        section: "HPI",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet, lacus at posuere faucibus, leo arcu euismod ligula, sit amet commodo nisl sapien sit amet enim. Sed rhoncus vitae nibh id volutpat. Vivamus non eleifend arcu. Suspendisse eu lacinia arcu, sed tincidunt lorem. Aliquam erat volutpat. Vivamus feugiat dui vel sem iaculis, vel dapibus quam posuere. Pellentesque dui nunc, blandit quis finibus dictum, tempor sed nisi. Mauris vestibulum accumsan odio. Fusce elementum tellus sed odio luctus, rhoncus imperdiet odio convallis. Suspendisse tincidunt, nisi eu egestas tempus, mauris nisi tempus ligula, vel pretium augue libero nec neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas euismod elit sodales, pharetra ipsum nec, condimentum sapien. Sed auctor libero turpis. Morbi ornare nunc vitae urna feugiat consequat. Nunc ex odio, vestibulum ut scelerisque vel, gravida non sem. Vivamus eget tincidunt nibh. Mauris nibh est, tristique quis feugiat at, tempor nec justo. Quisque maximus, dolor in aliquet dictum, urna purus aliquam est, posuere cursus nibh nisl sit amet velit. Curabitur facilisis, ante in facilisis egestas, ipsum dui gravida arcu, quis sodales ex odio at nunc. Morbi justo felis, gravida sit amet sapien a, sollicitudin iaculis nulla. Donec nibh turpis, lobortis vel finibus id, ultricies nec erat. Ut sollicitudin sapien eros, a finibus ligula vestibulum ac. Morbi interdum tortor sit amet libero congue vulputate. Curabitur tortor nulla, ultricies eget lectus quis, interdum cursus nisl. Praesent vehicula, leo semper pharetra finibus, nisi ipsum maximus ipsum, ac dapibus tellus ante vel tortor. Vestibulum est libero, facilisis maximus euismod et, mollis eu metus. Cras feugiat tellus et hendrerit semper. In dapibus faucibus ex ut sollicitudin."
      }
    };
  }
};
</script>

<style>
</style>