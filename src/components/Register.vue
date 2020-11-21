<template>
  <div id="Register-page">
      <form class="register-form">
        <input type="text" placeholder="username" id="u1" v-model.trim="data" >
        <input type="password" placeholder="password" id="pass1" v-model.trim="pass">
        <input type="password" placeholder="confirm password" id="confirm" v-model="confirm">
        <input type="text" placeholder="email" id="email" v-model="email">
        <button id="btn1" @click="register()">Register</button>
      </form>
    </div>
</template>
<script>
export default {
  data(){
    return{
      data:"",
      pass:"",
      confirm:"",
      email:"",
      credentials:[]
    }
  },
  methods:{
    register(){
      this.credentials.push({
           username:this.data,
           password:this.pass,
        })
       var regx=/^([a-z 0-9/.-]+)@([a-z 0-9 -]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
       if(!regx.test(this.email))
       {
         alert('invalid email');
       }
       else if(this.pass!==this.confirm)
       {
         alert('password didnot match');
       }
       else if(this.pass.length<5)
       {
         alert('min length of password should be 5');
       }
       else if(!isNaN(this.data))
       {
         alert('username should not be a number');
       }
       else{
        alert("successfull");
       }
       console.log(this.credentials);
  }
  }
  }
</script>
<style scoped>
#Register-page{
  width:100vw;
  height:100vh;
  background-image:url('../assets/login4.jpg');
  background-repeat: no-repeat;
}

.register-form{
  width:400px;
  height:300px;
  position:relative;
  display:flex;
  flex-direction:column;
  position:relative;
  left:580px;
  top:100px;
  background-color:transparent;
  border:1px solid white;
}
#btn1{
  width:60px;
  position:relative;
  top:50px;
  margin:0 auto;
}
#u1{
  width:220px;
  height:30px;
  position:relative;
  top:50px;
  margin:0 auto;
  margin-bottom:10px;
  background-color:black;
  color:white;
  border:1px solid white;
}
#pass1{
  width:220px;
  height:30px;
  position:relative;
  top:50px;
  margin:0 auto;
  margin-bottom:10px;
  background-color:black;
  color:rgb(255, 255, 255);
  border:1px solid white;
}
#email{
  width:220px;
  height:30px;
  position:relative;
  top:50px;
  margin:0 auto;
  margin-bottom:10px;
  background-color:black;
  color:white;
  border:1px solid white;
}
#confirm{
  width:220px;
  height:30px;
  position:relative;
  top:50px;
  margin:0 auto;
  margin-bottom:10px;
  background-color:black;
  color:white;
  border:1px solid white;
}
.msg1{
  color:white;
  position: relative;
  top:50px;
  left:100px;
}
p a{
  color:wheat;
  text-decoration:none;
}
</style>                                            