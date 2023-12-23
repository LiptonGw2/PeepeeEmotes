<script>
import Dick from "./components/Dick.vue";
import dickData from "./dickData.json";

console.log("dickData", dickData);

export default {
  components: {
    Dick
  },
  data() {
    return {
      search: null,
      dicks: dickData,
      gifs: true,
      pngs: true,
      Badvice: false
    }
  },
  computed: {
    filteredDicks() {
      let dicks = this.dicks;
      let search = this.search;
      if (search) {
        search = search.toLowerCase();
        dicks = dicks.filter(x => x.name.toLowerCase().includes(search));
      }
      if (!this.gifs) {
        dicks = dicks.filter(x => !x.path.endsWith(".gif"));
      }
      if (!this.pngs) {
        dicks = dicks.filter(x => !x.path.endsWith(".png"));
      }
      if (this.Badvice)
        dicks = dicks.filter(x => x.createdBy == "Badvice");
      return dicks;
    }
  },
  mounted() {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState == "visible") {
        document.title = "I LIKE DICKS HAHAHA jtm";
      } else {
        document.title = "GAY PORN - ROUGH ANAL FISTING";
      }
    });
  }
}
</script>

<template>
  <div class="topContainer">
    <div>
      <input type="text" title="Search..." placeholder="Search..." v-model="search">
      <label style="margin-right:10px;"><input type="checkbox" class="checkbox" v-model="gifs"> .gif</label>
      <label style="margin-right:10px;"><input type="checkbox" class="checkbox" v-model="pngs"> .png</label>
      <label style="margin-right:10px;"><input type="checkbox" class="checkbox" v-model="Badvice"> Badvice Quality</label>
    </div>
    <div class="discord-invites">
      <a href="https://discord.gg/wWvVNpQCAm" target="_blank">
        <i class="discord-icon"></i>
        <!-- <img src="@/assets/img/discord.png"> -->
        Join Discord
      </a>
      <!-- <a href="https://discord.gg/4FRYBfhrqy" target="_blank">Discord Dick Emotes 2</a>
      <a href="https://discord.gg/d4z8HAGx2B" target="_blank">Discord Dick Emotes 3</a>
      <a href="https://discord.gg/yPwvmFg5Ar" target="_blank">Discord Dick Emotes 4</a> -->
    </div>
  </div>
  <div class="dicks">
    <Dick v-for="d in filteredDicks" :dick="d"></Dick>
  </div>
</template>

<style>
.topContainer {
  display: flex;
}

.topContainer>div {}

.discord-invites {
  /* flex-grow: 1; */
}

.discord-invites a {
  border: 1px solid #980298;
  border-radius: 20px;
  padding: 5px;
  display: block;
  background: #ff00d9;
  color: black;
  font-weight: bold;
}



.dicks {
  position: flex;
  flex-wrap: wrap;
}

.dick {
  width: 180px;
  height: 200px;
  border: 1px solid #D57070;
  background-color: #F39A92;
  border-radius: 25px;
  padding: 5px;
  display: inline-block;
  margin: 10px;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(223, 138, 123, 1);
  -moz-box-shadow: 0px 0px 10px 5px rgba(223, 138, 123, 1);
  box-shadow: 0px 0px 10px 5px rgba(223, 138, 123, 1);
}

.dick:hover {
  background-color: #f87966;
  transform: scale(1.1);
  transition: transform 0.5s;
  -webkit-box-shadow: 0px 0px 20px 10px rgba(223, 138, 123, 1);
  -moz-box-shadow: 0px 0px 20px 10px rgb(239, 83, 138);
  box-shadow: 0px 0px 20px 10px rgba(223, 138, 123, 1);
}

.dickImgContainer {
  text-align: center;
  width: 160px;
  height: 160px;
}

.name {
  text-align: center;
  font-weight: bolder;
  font-size: 20px;
}

.long-name {
  font-size: 16px !important;
}

.v-long-name {
  font-size: 15px !important;
}
</style>
