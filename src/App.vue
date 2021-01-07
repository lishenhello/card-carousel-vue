<template>
  <div id="app">
    <card-carousel-vue :carouselData="dataList">
      <template scope="props">
        <div>{{ props.item }}</div>
        <!--<div>{{ props.index }}</div>-->
      </template>
    </card-carousel-vue>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dataList: [1, 2, 3]
    }
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 400px;
}
</style>
