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
              <a href="#">Neuro</a>
              <ul>
                <li v-for="neuro in neuros" :key="neuro">
                  <a href>{{neuro}}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Card</a>
              <ul>
                <li v-for="cardio in cardios" :key="cardio">
                  <a href>{{cardio}}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Resp</a>
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
              <a href="#">GI</a>
              <ul>
                <li v-for="gi in gis" :key="gi">
                  <a href>{{gi}}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">GU</a>
              <ul>
                <li v-for="gu in gus" :key="gu">
                  <a href>{{gu}}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Endo</a>
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
              <a href>HO</a>
              <ul>
                <li v-for="ho in hos" :key="ho">
                  <a href>{{ho}}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href>ID</a>
              <ul>
                <li v-for="id in ids" :key="id">
                  <a href>{{id}}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href>Rheum</a>
              <ul>
                <li v-for="rheum in rheums" :key="rheum">
                  <a href>{{rheum}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">HO/ID/Rheum</a>
          <ul>
            <li>
              <a href>HO</a>
              <ul>
                <li v-for="ho in hos" :key="ho">
                  <a href>{{ho}}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href>ID</a>
              <ul>
                <li v-for="id in ids" :key="id">
                  <a href>{{id}}</a>
                </li>
              </ul>
            </li>
            <li>
              <a href>Rheum</a>
              <ul>
                <li v-for="rheum in rheums" :key="rheum">
                  <a href>{{rheum}}</a>
                </li>
              </ul>
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
        "Neuro NIGU",
        "Neuro PICU"
      ],
      cardios: [
        "Cardio PC",
        "Cardio Adol",
        "Cardio ED",
        "Cardio HM",
        "Cardio NIGU",
        "Cardio PICU"
      ],
      resps: [
        "Resp PC",
        "Resp Adol",
        "Resp ED",
        "Resp HM",
        "Resp NIGU",
        "Resp PICU"
      ],
      gis: ["GI PC", "GI Adol", "GI ED", "GI HM", "GI NIGU"],
      gus: ["GU PC", "Female GU Adol", "Male GU Adol", "GU ED", "GU HM"],
      endos: ["Endo PC", "Endo Adol", "Endo ED", "Endo HM"],
      hos: ["Heme Onc PC", "Heme Onc Adol", "Heme Onc ED", "Heme Onc HM"],
      ids: ["ID PC", "Acute Illness Adol", "ID ED", "ID HM", "ID NIGU"],
      rheums: ["Rheum PC", "Rheum Adol", "Rheum HM"]
    };
  }
};
</script>

<style>
</style>