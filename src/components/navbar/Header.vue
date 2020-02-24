<template>
  <div class="top-page">
    <header class="flex">
       <div class="left-space"></div>
      <div class="logo-container flex">
        <img id="logo-img" src="../../assets/images/logo.png" alt="logo-img" />
        <p class="logo-text">Pediscripts</p>
      </div>
      <div class="menu-container-empty"></div>
      <nav class="menu-container flex">
        <ul class="flex">
          <li class="menu-item">New Template</li>
          <li class="menu-item">Recently Views</li>
          <li @click="goToTemplateLibrary()" class="menu-item">Template Library</li>
          <li class="menu-item">About</li>
        </ul>
      </nav>

      <div class="search-container flex">
        <input class="input-search" type="text" placeholder="Search a tamplate" />
        <img class="input-img" src />
      </div>

      <div class="profile-container flex">
        <div class="flex flex-column">
          <p class="profile-txt">Usuario</p>
          <p class="sign-out-txt">Sign Out</p>
        </div>
      </div>
      <div class="dropdown-menu-sandwich flex">
        <ul class="main-navigation flex">
          <li><img src="../../assets/images/hamb-menu.png" alt="">
          <ul>
            <li v-for="content in contents" :key="content">
              <a href="">{{content}}</a>
              </li>
          </ul>
          </li>
        </ul>
      </div>
      <div class="right-space"></div>
    </header>

    <div class="second-navbar">
      <ul class="main-navigation flex">
        <div class="left">
          <li>
            <a href="#">Neuro/Card/Resp</a>
            <ul>
              <li>
                <a href="#">Neurology</a>
                <ul>
                  <li v-for="neuro in neuros" :key="neuro">
                    <a href>{{neuro}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Cardiology</a>
                <ul>
                  <li v-for="cardio in cardios" :key="cardio">
                    <a href>{{cardio}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Respiratory</a>
                <ul>
                  <li v-for="resp in resps" :key="resp">
                    <a href>{{resp}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">GI/GU/Endo</a>
            <ul>
              <li>
                <a href="#">Gastroenterology</a>
                <ul>
                  <li v-for="gi in gis" :key="gi">
                    <a href>{{gi}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Genitourinary/ Renal</a>
                <ul>
                  <li v-for="gu in gus" :key="gu">
                    <a href>{{gu}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Endocrinology</a>
                <ul>
                  <li v-for="endo in endos" :key="endo">
                    <a href>{{endo}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">HO/ID/Rheum</a>
            <ul>
              <li>
                <a href>Hematology/Oncology</a>
                <ul>
                  <li v-for="ho in hos" :key="ho">
                    <a href>{{ho}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>Infectious Disease</a>
                <ul>
                  <li v-for="id in ids" :key="id">
                    <a href>{{id}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>Rheumatology</a>
                <ul>
                  <li v-for="rheum in rheums" :key="rheum">
                    <a href>{{rheum}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Derm/EENT/MSK/Surg</a>
            <ul>
              <li>
                <a href>Dermatology</a>
                <ul>
                  <li v-for="derm in derms" :key="derm">
                    <a href>{{derm}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>EENT</a>
                <ul>
                  <li v-for="eent in eents" :key="eent">
                    <a href>{{eent}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>Trauma & Musculoskeletal</a>
                <ul>
                  <li v-for="msk in msks" :key="msk">
                    <a href>{{msk}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>Surgical Referrals</a>
                <ul>
                  <li v-for="surg in surgs" :key="surg">
                    <a href>{{surg}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href>Psych</a>
            <ul>
              <li v-for="psych in psychs" :key="psych">
                <a href>{{psych}}</a>
              </li>
            </ul>
          </li>
        </div>
        <dev class="right">
          <li>
            <a href>Primary Care</a>
            <ul>
              <li>
                <a href>General Pediatrics</a>
                <ul>
                  <li v-for="gp in gps" :key="gp">
                    <a href>{{gp}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>Adolescent</a>
                <ul>
                  <li v-for="adol in adols" :key="adol">
                    <a href>{{adol}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>Telephone Triage</a>
              </li>
            </ul>
          </li>
          <li>
            <a href>Emergency</a>
            <ul>
              <li v-for="emerg in emergs" :key="emerg">
                <a href>{{emerg}}</a>
              </li>
            </ul>
          </li>
          <li>
            <a href>Hospital Medicine</a>
            <ul>
              <li>
                <a href>Hospital Medicine</a>
                <ul>
                  <li v-for="hm in hms" :key="hm">
                    <a href>{{hm}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>PICU</a>
                <ul>
                  <li v-for="picu in picus" :key="picu">
                    <a href>{{picu}}</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href>NICU</a>
                <ul>
                  <li v-for="nicu in nicus" :key="nicu">
                    <a href>{{nicu}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </dev>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
      goToTemplateLibrary(){
        this.$router.push("/content-table");
      }
    },
  data() {
    return {
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
      contents:[
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