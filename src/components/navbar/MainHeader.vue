<template>
  <div class="top-page">
    <header class="flex">
      <div class="logo-container flex">
        <img id="logo-img" src="../../assets/images/logo.png" alt="logo-img" />
        <p class="logo-text">Pediscripts</p>
      </div>
      <nav class="menu-container flex">
        <ul class="flex">
          <li class="menu-item">New Template</li>
          <li class="menu-item">Recently Views</li>
          <li class="menu-item">Template Library</li>
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
    </header>

    <div class="second-navbar">
      <ul class="main-navigation">
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
          <a href="#"> Derm/EENT/MSK/Surg</a>
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
              <a href>Trauma & Musculoskeletal </a>
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
            <a href="">Psych</a>
            <ul>
                 <li v-for="psych in psychs" :key="psych">
                  <a href>{{psych}}</a>
                </li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
      eents:["EENT PC", "EENT Adol","EENT ED","EENT HM", "Ophoto PC", "Ophoto Adol", "Oral PC", "Oral Adol"],
      msks:["MSK PC", "MSK Adol", "MSK ED", "MSK HM"],
      surgs:["Surg PC", "Surg HM", "Post Op PICU"],
      psychs:["Psych PC","Adol PC", "Dev PC", "Psych ED", "Psych HM"]
    };
  }
};
</script>

<style>
</style>