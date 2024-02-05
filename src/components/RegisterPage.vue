<script setup lang="ts">

</script>

<template>
  <div class="top-border">
    <h1 class="text-4xl">Register</h1>
    <form>
      <div class="flex-left">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" placeholder="Your full name"/>
      </div>
      <div class="flex-left relative">
        <label for="userName">User Name</label>
        <span class="user-icon"></span>
        <input type="text" id="userName" class="p-10" placeholder="User Name"/>
      </div>
      <div class="flex-left">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Your password..."/>
      </div>
      <div class="flex-left">
        <label>Address</label>
        <input list="addressList" id="address" placeholder="Origin"/>
        <datalist id="addressList">
          <option value="China"></option>
          <option value="Korea"></option>
          <option value="Vietnam"></option>
        </datalist>
      </div>
      <div class="flex-left">
        <label>Suggestion</label>
        <textarea placeholder="write something..." rows="7"></textarea>
      </div>
    </form>
  </div>
</template>

<style scoped>
*{
  box-sizing: border-box;
}
h1{
  color: darkcyan;
  font-weight: normal;
  margin: 5vh 0;
  text-align: center;
}
input, textarea{
  outline: none;
}
.top-border > form > div{
  margin: 1vh 0;
}

.top-border > form > div > input, textarea{
  margin: 1vw 1vw;
  width: 50vw;
  background-color: #f9f9f9;
  padding: 0.6rem;
  border-radius: 5px;
}
#userName{
  padding-left: 32px;
}
.user-icon{
  display: block;
  width: 24px;
  height: 24px;
  background-image: url("../assets/user_icon.png");
  background-size: contain;
  position: absolute;
  top: 28%;
  left: 15.5%
}

textarea{
  resize: none;
}

.top-border{
  width: 60vw;
  border-top: darkcyan 10px solid;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 3px 3px 5px grey, -5px 5px 5px grey;
}
.flex-left{
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
}
@media (max-width: 1000px) {
  form{
    margin-left: 3vw;
    transition: all 0.5s ease-in-out;
  }
  .flex-left{
    display: flex;
    flex-flow: column wrap;
    align-items: baseline;
    transition: all 0.5s ease-in-out;
  }
  .user-icon{
    display: block;
    width: 24px;
    height: 24px;
    background-image: url("../assets/user_icon.png");
    background-size: contain;
    position: absolute;
    top: 43px;
    left: 12px;
    transition: all 0.5s ease-in-out;
  }
}
</style>