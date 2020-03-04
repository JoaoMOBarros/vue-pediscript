<template>
  <div class="corpo flex">
      <div class="sign-in-container flex">
            <div class="side-information-sign-in flex-column wrap">
                <img src="../../assets/images/desktop.png" alt="">
                <h1>PediScripts</h1>
                <h2>Clinical Documentation with efficiency</h2>
            </div>
            <div class="credentials-sign-in flex-column wrap">
                <h1>Create an account</h1>
                <input type="text" class="sign-in-input-email" placeholder="Email">
                <input type="password" class="sign-in-input-password" placeholder="Password">
                <button class="btn-solid-blue">Sign Up</button>
                <div @click="goToForm()" class="sign-in-redirection flex">
                    <h3>Already have an account <span>Sign in</span></h3>
                </div>
                <button class="btn-outlined-blue">Use without an account</button>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        goToForm(){
            this.$router.push("/sign-up-form")
        }
    }
}
</script>

<style>

</style>