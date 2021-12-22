<template>
    <div class='mainPage'>
        <Logo class='logoView'/>
        <p>Hi this is signup page </p>
    </div>
</template>

<script>
import Logo from '../Shared-Components/Logo.vue';
export default {
  components: {
     Logo
  },
  name: 'signUp'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.logoView{
  float :left;
  height: 100px;
  width: 300px;
  margin: -30px 0 0 25px;
}

.mainPage{
    width:100%;
    height:100%
}
</style>