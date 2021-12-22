<template>
<div class="div_bar">
  <button class="button">{{buttonName}}<router-view></router-view></button>
</div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonName: String
  }
}
</script>

<style scoped>
.div_bar{
 margin: 0 15px 0 0;
}

.button{
    float: right;
    height: 40px;
    width: 90px;
}
</style>