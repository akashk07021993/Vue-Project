<template>
  <div class=navbar>
    <HomePage />
  </div>
</template>

<script>
import HomePage from './components/Screens/HomePage';

export default {
  name: 'App',
  components: {
    HomePage
  }
}


</script>

<style>
.navbar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 75px;
}

</style>
