<script setup>
  import {ref} from "vue";

  let pwdType = ref('')
  let getChecked = ref('')
  pwdType.value = 'password'
  getChecked.value = 'Off'
  function showPassword() {
    pwdType.value = pwdType.value ==='password' ? 'text' : 'password'
  }
  function showPicker(){
      document.getElementById('showPicker').previousElementSibling.showPicker()
  }
  function autoComplete(){
    document.getElementById('firstName').showPicker()
  }
  function validate(e){
    const input = e.target
    const validityState = input.validity;

    if (validityState.valueMissing) {
      input.setCustomValidity("You gotta fill this out, yo!");
    } else if (validityState.rangeUnderflow) {
      input.setCustomValidity("We need a higher number!");
    } else if (validityState.rangeOverflow) {
      input.setCustomValidity("That's too high!");
    } else if(validityState.customError){
      input.setCustomValidity("Didn't satisfy the custom condition~");
    } else{
      input.setCustomValidity('')
    }
    input.reportValidity();
  }
  function changeWord(e){
    if(e.target.checked){
      getChecked.value = 'On'
    }else{
      getChecked.value = 'Off'
    }
  }
</script>

<template>
<section>
  <fieldset>
    <legend>
      <label for="pwd">密码</label>
      <span class="">
        <input v-bind:type="pwdType" id="pwd" class="pwd mx-2 px-2 border-solid border-black border-2 rounded" >
        <button class="" @click="showPassword">显示</button>
     </span>
    </legend>
    <div class="paddingItems">
      <input type="file" accept="audio/*;capture=microphone" />
      <input type="button" id="showPicker" value="TestShowPicker" @click="showPicker" class="cursor-pointer"/>
    </div>
    <div class="paddingItems">
      <label for="firstName">First Name:</label>
      <input name="firstName" @change="validate($event)" id="firstName" type="text" autocomplete="given-name"/>
      <button @click="autoComplete">Show autoComplete option</button>
    </div>
    <div class="paddingItems">
      <textarea rows="2" cols="30" placeholder="please input" ></textarea>
    </div>
    <div class="paddingItems">
      <meter style="width: 500px" min="0" max="100" value="55" low="33" high="66" optimum="0">75</meter>
    </div>
    <div class="paddingItems checkBoxParent">
      <input  class="checkBox1" id='myCheckBox' type="checkbox" @click="changeWord($event)"/>
      <label for="myCheckBox">{{getChecked}}</label>
    </div>
    <div class="paddingItems checkBoxParent">
      <p class="relative">
        <input type="radio" name="fruit" id="apple" value="apple"/>
        <label for="apple">apple</label>
      </p>
      <p class="relative">
        <input type="radio" name="fruit" id="orange" value='orange'/>
        <label for="orange">orange</label>
      </p>
      <p class="relative">
        <input type="radio" id="strawberry" name="fruit" value="strawberry"/>
        <label for="strawberry">strawberry</label>
      </p>
    </div>
    <div class="paddingItems checkBoxParent">
      <div>
        <label for="select" class="mr-2">Select fruits</label>
        <div class="selectWrapper">
          <select id="select" name="select">
            <option>orange</option>
            <option>apple</option>
            <option>strawberry</option>
            <option>Cherry</option>
            <option>Banana</option>
          </select>
        </div>
      </div>
    </div>
  </fieldset>
</section>
</template>

<style scoped>
.pwd{
  outline:none
}
textarea{
  outline: none;
  border: black 1px solid;
  border-radius: 3px;
  padding: 4px;
  resize: none;
}
.paddingItems{
  margin: 10px 0;
}
.checkBoxParent{
  position: relative;
}
.checkBox1{
  appearance: none;
  width: 80px;
  height: 24px;
  border: 2px black solid;
  border-radius: 12px;
  background: #eee;
}
.checkBox1::before{
  content: '';
  width: 16px;
  height: 16px;
  background-color: black;
  border-radius: 9px;
  position: absolute;
  top: 4px;
  left: 16px;
  transition: all 0.4s;
}
.checkBox1:focus{
  outline: dotted 1px black;
}
.checkBox1:checked::before{
  left: 48px;
  transition: all 0.4s;
}
input[type='radio']{
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px black solid;
  border-radius: 8px;
}
input[type='radio']::before{
  content: ' ';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: red;
  transform: translate(2px,2px) scale(0);
  transition: all 0.3s ease-in;
}
input[type='radio']:checked::before{
  transform: translate(2px,2px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);

}
select{
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
}
.selectWrapper{
  position:relative;
  width: 200px;
}
.selectWrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 1px;
  right: 3px;
  position: absolute;
}
</style>