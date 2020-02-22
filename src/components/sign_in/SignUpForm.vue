<template>
  <div class="corpo flex">
    <div class="sign-up-form-container flex-column">
      <h1>Complete your info</h1>
      <h2>You are almost ready to access PediScripts</h2>
      <input type="text" class="input-text-field" placeholder="First Name*" />
      <input type="text" class="input-text-field" placeholder="Last Name*" />
      <select class="input-text-field">
        <option value disabled selected>Ocupation*</option>
        <option v-for="user in user_types" :key="user">{{user}}</option>
      </select>
      <input type="text" class="input-text-field" placeholder="Organziation*" />
        <label class="container-check">
        Yes, I undestand and agree to the
        <span class="link">Teams of Service</span>,
        <span class="link">User Agreement</span> and
        <span class="link">Privacy Policy</span>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <button class="btn-solid-blue">Save & Complete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_types: ["MD", "Resident", "Medical Student", "NP", "PA", "Other"]
    };
  }
};
</script>

<style>
</style>