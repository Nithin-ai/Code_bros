<template>
  <div id="login-page">
      <form class="login-form">
        <input type="text" placeholder="username" id="username" v-model="data" @keyup.enter="login()">
        <input type="password" placeholder="password" id="password" v-model="pass" @keyup.enter="login()">
        <router-link to="/veg"><button id="btn" @click="login()">login</button></router-link>
        <router-view/>
      </form>
    </div>
</template>
<script>
export default {
  data(){
    return{
     data:"",
      pass:"",
      credentials:[{
          username:"nithin",
          password:"12345"
      },
      {
          username:"gokul",
          password:"123456"
      },
      {
          username:"nithish",
          password:"123456"
      }]
    }
  },
  methods:{
    login(){
        let counter=0;
        for(this.i=0;this.i<3;this.i++)
        {
        if(this.data==this.credentials[this.i].username && this.pass==this.credentials[this.i].password)
        {
            counter++;
        }
        }
        if(counter>0)
        {
          alert('logged in');
        }
        else
        {
          alert('invalid');
        }
       }
    }

  }
</script>
<style scoped>
#login-page{
  width:100vw;
  height:100vh;
  overflow:hidden;
  background-image:url('../assets/login4.jpg');
  background-repeat: no-repeat;
}
.login-form{
  width:400px;
  height:250px;
  position:relative;
  left:550px;
  top:200px;
  display:flex;
  flex-direction:column;
  background-color:transparent;
  border:1px solid white;
}
#btn{
  width:60px;
  position:relative;
  top:80px;
  margin:0 auto;
}

#username{
  width:190px;
  height:30px;
  position:relative;
  top:50px;
  margin:0 auto;
  margin-bottom:10px;
  background-color:black;
  color:white;
  border:1px solid white;
}
#password{
  width:190px;
  height:30px;
  position:relative;
  top:50px;
  margin:0 auto;
  margin-bottom:10px;
  background-color:black;
  color:white;
  border:1px solid white;
}

</style>