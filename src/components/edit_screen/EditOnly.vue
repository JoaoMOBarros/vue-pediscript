<template>
  <div class="corpo flex-column">
    <div class="edit-page flex">
      <div class="edit-search-container flex-column">
        <h1>Need help to start?</h1>
        <h2>
          Search and start from one of our templates. <br/> <br/>Some examples include: adolescent neuro, emergency hyperglycemia,
          nephrotic syndrome, pelvic osteotomy, etc.
        </h2>
        <div class="search-box">
          <input type="text" placeholder="Find any template you need" />
          <div class="search-block"></div>
          <img src="../../assets/images/search.png" class="input-img" />
        </div>
      </div>

      <div class="space-between"></div>

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
        <footer-custom/>
    </footer>
  </div>
</template>

<script>
import FooterCustom from "../footer/Footer";
export default {
  components: {
    FooterCustom
  }
};
</script>

<style>
</style>