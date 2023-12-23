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
  <div>
    <input type="text" title="Search..." placeholder="Search..." v-model="search">
    <label style="margin-right:10px;"><input type="checkbox" class="checkbox" v-model="gifs"> .gif</label>
    <label style="margin-right:10px;"><input type="checkbox" class="checkbox" v-model="pngs"> .png</label>
    <label style="margin-right:10px;"><input type="checkbox" class="checkbox" v-model="Badvice"> Badvice Quality</label>
  </div>
  <div class="dicks">
    <Dick v-for="d in filteredDicks" :dick="d"></Dick>
  </div>
</template>

<style>
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
