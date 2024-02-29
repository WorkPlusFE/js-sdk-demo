<template>
  <div id="app">
    <img alt="Vue logo" width="80" src="./assets/vue.svg">
    <h3>Welcome to Your Vue3.js App!</h3>
    <ul>
      <li v-for="(val, key) in deviceInfo" :key="key">
        <strong>{{key}}</strong>: {{val}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      deviceInfo: {},
    };
  },
  mounted() {
    this.$w6s.header.setTitle('JS-SDK VueJS Demo');
    this.$w6s.device.getDeviceInfo()
      .then((res) => {
        this.deviceInfo = res.result;
      });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  padding: 20px;
}

ul {
  border-top: 1px solid #eeeeee;
  padding: 20px 0;
}

li {
  list-style: none;
  text-align: left;
}
</style>