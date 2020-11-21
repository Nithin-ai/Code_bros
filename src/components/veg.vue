<template>
  <div class="top">
    <h3>
      <input
        class="searchTerm"
        placeholder="search for a veggie"
        v-model="filter"
      />
    </h3>
    <table>
      <thead class="top">
        <span class="item" v-for="item in filtered" :key="item" index>
          <h2>{{ item.item }}</h2>  
          <img v-bind:src="item.url" width="200" height="200" alt="item.item" />
          <router-link :to="{ name: 'specific', params: { veg:item.item } }">
            <button class="submit">Search</button>
          </router-link>
        </span>
      </thead>
    </table>
  </div>
</template>

<script>
//import veg from "./components/veg";
export default {
  name: "App",
  components: {
    // veg,
  },
  data: function () {
    return {
      filter: "",
      manifest: [
        {
          item: "Potato",
          url: require("../assets/potato.png"),
        },
        {
          item: "Tomato",
          url: require("../assets/tomato1.png"),
        },
        {
          item: "Carrot",
          url: require("../assets/carrot.png"),
        },
        {
          item: "Capsicum",
          url: require("../assets/capsicum.png"),
        },
        {
          item: "Cauliflower",
          url: require("../assets/Cauliflower.png"),
        },
        {
          item: "Onion",
          url: require("../assets/onion.jpg"),
        },
        {
          item: "Peas",
          url: require("../assets/peas.png"),
        },
        {
          item: "Ginger",
          url: require("../assets/ginger.png"),
        },
        {
          item: "Garlic",
          url: require("../assets/garlic.png"),
        },
        {
          item: "Brinjal",
          url: require("../assets/brinjal.png"),
        },
      ],
    };
  },

  computed: {
    filtered() {
      let filter = new RegExp(this.filter, "i");
      return this.manifest.filter((el) => el.item.match(filter));
    },
   
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.searchTerm {
  margin-left: 500px;
  width: 100%;
  border: 3px solid #00b4cc;
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.top {
  display: flex;
  flex-direction: row;
  columns: 4;
  flex-wrap: wrap;
}
.special {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}
h1,
h2,
h3,
li {
  @extend .special;
}
li {
  list-style: none;
  display: inline-block;
}
h2 {
  font-size: 20px;
  margin: 0 0 5px;
  text-align: center;
}
.item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 280px;
  height: 440px;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
  img {
    align-self: center;
  }
}
.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}
button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
  &.inc {
    background: white;
    color: black;
  }
  &.submit {
    background: black;
    color: white;
    @extend .special;
    margin-left: 20px;
    padding: 12px 14px;
    width: 240px;
    transition: 0.25s all ease-in;
    &:hover {
      opacity: 0.8;
      transition: 0.25s all ease-out;
    }
  }
}
</style>
