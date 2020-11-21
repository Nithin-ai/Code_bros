<template>
  <div class="hello">
    <span class="hi" v-for="item in hello" :key="item">
      <span class="list" v-for="box in item.val" :key="box">
        <img
          :src="box.pic"
          height="100"
          width="100"
          class="image style"
        />
        <p class="lo">NAME:{{ box.seller }}</p>
        <p class="">PRICE:{{ box.price }}/kg</p>
        <p class="" v-if="logged === true">CONTACT:{{ box.contact }}</p>
        <p v-else>CONTACT:XXXXXXXXXX</p>
        <router-link to="/binfo">
        <button class="submit">Contact</button>
        </router-link>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      hello: null,
      logged: true,
      veg: "",
      index: 0,
      list: [
        {
          name: "Potato",
          val: [
            {
              seller: "abcd",
              price: "10",
              contact: "number1",
              pic: require("../assets/sellerpics/potato1.jpeg"),
            },
            {
              seller: "bcde",
              price: "12",
              contact: "number2",
              pic: require("../assets/sellerpics/potato2.jpeg"),
            },
          ],
        },
        {
          name: "Tomato",
          val: [
            {
              pic: require("../assets/sellerpics/tomato1.jpg"),
              seller: "cdef",
              price: "12",
              contact: "number3",
            },
            {
              pic: require("../assets/sellerpics/tomato2.jpg"),
              seller: "defg",
              price: "13",
              contact: "number4",
            },
          ],
        },
        {
          name: "Carrot",
          val: [
            {
              pic: require("../assets/sellerpics/carrot1.jpg"),
              seller: "efgh",
              price: "10",
              contact: "number5",
            },
            {
              pic: require("../assets/sellerpics/carrot2.jpeg"),
              seller: "fghi",
              price: "20",
              contact: "number6",
            },
          ],
        },
        {
          name: "Capsicum",
          val: [
            {
              pic: require("../assets/sellerpics/capsicum.jpg"),
              seller: "ghij",
              price: "15",
              contact: "number7",
            },
            {
              pic: require("../assets/sellerpics/Caps2.jpg"),
              seller: "hijk",
              price: "16",
              contact: "number8",
            },
          ],
        },
        {
          name: "Cauliflower",
          val: [
            {
              pic: require("../assets/sellerpics/cauli1.jpg"),
              seller: "hijk",
              price: "16",
              contact: "number9",
            },
            {
              pic: require("../assets/sellerpics/cauli2.jpeg"),
              seller: "hijk",
              price: "16",
              contact: "number10",
            },
          ],
        },
        {
          name: "Onion",
          val: [
            {
              pic: require("../assets/sellerpics/onion1.jpg"),
              seller: "hijk",
              price: "16",
              contact: "number11",
            },
            {
              pic: require("../assets/sellerpics/onion2.jpeg"),
              seller: "hijk",
              price: "16",
              contact: "number12",
            },
          ],
        },
        {
          name: "Peas",
          val: [
            {
              pic: require("../assets/sellerpics/peas.jpg"),
              seller: "hijk",
              price: "16",
              contact: "number13",
            },
            {
              pic: require("../assets/sellerpics/peas1.jpg"),
              seller: "hijk",
              price: "16",
              contact: "number14",
            },
          ],
        },
        {
          name: "Ginger",
          val: [
            {
              pic: require("../assets/sellerpics/ginger.jpeg"),
              seller: "hijk",
              price: "16",
              contact: "number15",
            },
            {
              pic: require("../assets/sellerpics/ginger2.jpeg"),
              seller: "hijk",
              price: "16",
              contact: "number16",
            },
          ],
        },
        {
          name: "Garlic",
          val: [
            {
              pic: require("../assets/sellerpics/garlic1.jpg"),
              seller: "hijk",
              price: "16",
              contact: "number17",
            },
            {
              pic: require("../assets/sellerpics/garlic2.jpeg"),
              seller: "hijk",
              price: "16",
              contact: "number18",
            },
          ],
        },
        {
          name: "Brinjal",
          val: [
            {
              pic: require("../assets/sellerpics/brinjal1.jpeg"),
              seller: "hijk",
              price: "16",
              contact: "number19",
            },
            {
              pic: require("../assets/sellerpics/brinjal2.jpg"),
              seller: "hijk",
              price: "16",
              contact: "number20",
            },
          ],
        },
      ],
    };
  },

  created() {
    this.veg = this.$route.params.veg;
    this.finder();
  },
  methods: {
    finder() {
      let filter = new RegExp(this.veg, "i");
      this.hello = this.list.filter((el) => el.name.match(filter));
    },
  },
};
</script>

<style lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
}
.special {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}
.hi {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
}
.list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 400px;
  height: 200px;
  justify-content: space-around;
  background: #eee;
  padding: 50px;
  margin: 30px;
  img {
    align-self: flex-start;
  }
}
.image style {
  padding-bottom: 3000px;
}
.lo {
  padding-right: 100px;
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