<template>
  <div class="hello">
    <div>
    <Logo />
    <div class="buttonNav">
      
    <button>Home</button>
    <button>Profile</button>
    <button>Content</button>
    <button @click="redirectToSignUp()">Sign In<router-view></router-view></button>
    <button @click="redirectToSignUp()">Sign Up</button>
      
    </div>
    
    </div>
  <div>
    <Slider/>
  </div>
  </div>
</template>

<script>
import Logo from '../Shared-Components/Logo.vue';
// import Button from '../Individual/button.vue'
import Slider from '../Individual/slider.vue';

export default {
  components: {
     Logo,
    //  Button,
     Slider
  },
  name: 'HomePage',
  props: {},
  methods : {
    redirectToSignUp(){       
      this.$router.push('/signUp');
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.buttonNav{
  float: right
}

button{
  height: 50px;
  width: 90px;
  font-size: 20px;
}

</style>
