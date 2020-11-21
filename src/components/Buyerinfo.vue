
<style>
body {
  background-image: url("https://img1.mashed.com/img/uploads/2017/07/vegetables.jpg");
}
.boxing {
  box-sizing: border-box;
  width: 550px;
  height: 550px;
  background-color: greenyellow;
  border-radius: 4px 4px 4px 4px;
  border: green solid 2px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  font-weight: 400;
}
.poz {
  border-radius: 4px 4px 4px 4px;
  width: 200px;
  height: 40px;
  border: green solid 2px;
}
</style>

<template>
  <center>
    <div class="boxing">
      <br />
      CONTACT DETAILS
      <hr style="border: green solid 1px" />
      <b>PLEASE FILL IN YOUR DETAILS</b><br />
      <form action="">
        <p style="text-align: left; margin-left: 150px">
          Name *:<br />
          <input
            type="text"
            placeholder="Preferably your shop name"
            id="namex"
            class="poz"
            required
          /><br /><br />
          Phone number 1 *:<br />
          <input type="number" class="poz" id="num1x" required /><br /><br />
          Phone number 2:<br />
          <input type="number" class="poz" id="num2x" /><br /><br />
          E-MAIL ID *:<br />
          <input
            type="email"
            placeholder="Preferably your shop mail id"
            id="emailx"
            class="poz"
            required
          /><br />
        </p>
        <button
          style="
            float: left;
            margin-left: 150px;
            border-radius: 8px 8px;
            width: 90px;
            font-size: 20px;
          "
          onclick="expose(this.form);"
        >
          Submit
        </button>
        <button
          style="
            float: right;
            margin-right: 190px;
            border-radius: 8px 8px;
            width: 90px;
            font-size: 20px;
          "
        >
          Cancel
        </button>
      </form>
    </div>
    <p id="printer"></p>
  </center>
</template>
>

<script>
function expose() {
  alert(
    "Your contact details will be sent to the seller.Are you sure you want to submit your information?"
  );
  var arr = new Array();
  var namex = document.getElementById("namex");
  var num1x = document.getElementById("num1x");
  var num2x = document.getElementById("num2x");
  var mailx = document.getElementById("mailx");
  var det = new Object();
  det = {
    name: namex.value,
    num1: num1x.value,
    num2: num2x.value,
    email: emailx.value,
  };
  arr.push(det);
  for (var key in list) {
    console.log(key, list[key]);
  }
}
</script>
