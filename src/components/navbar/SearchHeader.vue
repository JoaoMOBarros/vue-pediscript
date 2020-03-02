<template>
  <div class="top-page">
    <header class="flex">
      <div class="left-space"></div>
      <div class="logo-container flex">
        <img id="logo-img" src="../../assets/images/logo.png" alt="logo-img" />
        <p class="logo-text">Pediscripts</p>
      </div>
      <div class="search-container flex">
        <input
          type="text"
          id="header-search-bar"
          class="input-search"
          placeholder="Search any template you need..."
        />
        <div class="search-block"></div>
        <img src="../../assets/images/search.png" class="input-img" />
      </div>
      <div class="profile-container flex">
        <div class="flex">
            <div class="user-info-container flex-column">
                <p class="user-name">{{userInfo.name}}</p>
                <p class="user-profession">{{userInfo.profession}} at {{userInfo.location}}</p>
              </div>
          <div class="dropdown-menu-sandwich flex">
            <ul class="main-navigation flex">
              <li>
                <img src="../../assets/images/arrow.png" alt="">
                <ul>
                  <li>
                    <a href>My Templates</a>
                  </li>
                  <li>
                    <a href>My Favorites</a>
                  </li>
                  <li>
                    <a href>Settings</a>
                  </li>
                  <li>
                    <a href>Sign Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-space"></div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    goToTemplateLibrary() {
      this.$router.push("/content-table");
    }
  },
  data() {
    return {
      userInfo: {
        name: "Paulo Lemos",
        profession: "Doctor",
        location: "Boston Central Hospital"
      },
      neuros: [
        "Neuro PC",
        "Neuro Adol",
        "Neuro ED",
        "Neuro HM",
        "Neuro NICU",
        "Neuro PICU"
      ],
      cardios: [
        "Cardio PC",
        "Cardio Adol",
        "Cardio ED",
        "Cardio HM",
        "Cardio NICU",
        "Cardio PICU"
      ],
      resps: [
        "Resp PC",
        "Resp Adol",
        "Resp ED",
        "Resp HM",
        "Resp NICU",
        "Resp PICU"
      ],
      gis: ["GI PC", "GI Adol", "GI ED", "GI HM", "GI NICU"],
      gus: ["GU PC", "Female GU Adol", "Male GU Adol", "GU ED", "GU HM"],
      endos: ["Endo PC", "Endo Adol", "Endo ED", "Endo HM"],
      hos: ["Heme Onc PC", "Heme Onc Adol", "Heme Onc ED", "Heme Onc HM"],
      ids: ["ID PC", "Acute Illness Adol", "ID ED", "ID HM", "ID NICU"],
      rheums: ["Rheum PC", "Rheum Adol", "Rheum HM"],
      derms: ["Derm PC", "Derm Adol", "Derm ED", "Derm HM", "Derm NICU"],
      eents: [
        "EENT PC",
        "EENT Adol",
        "EENT ED",
        "EENT HM",
        "Ophoto PC",
        "Ophoto Adol",
        "Oral PC",
        "Oral Adol"
      ],
      msks: ["MSK PC", "MSK Adol", "MSK ED", "MSK HM"],
      surgs: ["Surg PC", "Surg HM", "Post Op PICU"],
      psychs: ["Psych PC", "Adol PC", "Dev PC", "Psych ED", "Psych HM"],
      gps: [
        "Cardiology PC",
        "Dermatology PC",
        "DVP PC",
        "Endo PC",
        "ENT PC",
        "Genetic PC",
        "GI PC",
        "GU PC",
        "Heme Onc PC",
        "ID PC",
        "Misc PC",
        "MSK PC",
        "Neurology PC",
        "NewBorn PC",
        "Nutrition PC",
        "Ophtho PC",
        "Oral PC",
        "Psych PC",
        "Resp PC",
        "Rheum PC",
        "Surgery PC",
        "Telephone Triage PC",
        "Wellcheck"
      ],
      adols: [
        "Cardiology Adolescent",
        "Dermatology Adolescent",
        "DVP Adolescent",
        "Endo Adolescent",
        "ENT Adolescent",
        "Genetic Adolescent",
        "GI Adolescent",
        "GU Female Adolescent",
        "GU Male Adolescent",
        "Heme Onc Adolescent",
        "Neurology Adolescent",
        "Nutrition Adolescent",
        "Ophtho Adolescent",
        "Oral Adolescent",
        "Psych Adolescent",
        "Resp Adolescent",
        "Rheum Adolescent",
        "Surgery Adolescent",
        "Wellcheck Adolescent"
      ],
      emergs: [
        "Cardiology ED",
        "Dermatology ED",
        "Endo ED",
        "EENT ED",
        "Genetic ED",
        "GI ED",
        "GU ED",
        "Heme Onc ED",
        "ID ED",
        "MSK ED",
        "Neurology ED",
        "Nutrition ED",
        "Ophtho ED",
        "Oral ED",
        "Psych ED",
        "Resp ED",
        "Rheum ED",
        "Surgery ED",
        "Toxicology ED"
      ],
      hms: [
        "Cardiology HM",
        "Dermatology HM",
        "Endo HM",
        "EENT HM",
        "GI HM",
        //"GU HM",
        "Heme Onc HM",
        "ID HM",
        "MSK HM",
        "Neurology HM",
        "Newborn HM",
        //"Nutrition HM",
        //"Ophtho HM",
        //"Oral HM",
        "Psych HM",
        "Respiratory HM",
        "Renal HM",
        "Rheum HM",
        "Surgery HM"
      ],
      picus: [
        "Cardiology PICU",
        "Neurology PICU",
        "MISC PICU",
        "POSTOP PICU",
        "PROC PICU",
        "Respiratory PICU"
      ],
      nicus: [
        "Basic NICU",
        "Cardiology NICU",
        "Dematology NICU",
        "Neurology NICU",
        "GI PICU",
        "ID PICU"
      ],
      contents: [
        "Neurology",
        "Cardiology",
        "Dermatology",
        "Respiratory",
        "Gastroenterology",
        "Genitourinary/ Renal",
        "Endocrinology",
        "Hematology/Oncology",
        "Infectious Disease",
        "Rheumatology",
        "EENT",
        "Trauma & Musculoskeletal",
        "Surgical Referrals",
        "Psychs"
      ]
    };
  }
};
</script>

<style>
</style>