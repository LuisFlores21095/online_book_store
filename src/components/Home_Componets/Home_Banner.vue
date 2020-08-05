<template>
  <div id="Home_Banner">
    <img id="vueStoreImg" alt="logo" src="./../../assets/VUE_Store.png" />
    <h3>Vue Book Store </h3>
    <p>
      Created using Vue.js, Vuetify, Node.js (Only a mock store, and can't be
      used to buy actual items)
    </p>
  </div>
</template>

<script>
export default {
  name: "Home_Banner"
};
</script>

<style lang="scss" scoped>
#Home_Banner {
  background-color: #e9ecef;
  margin-bottom: 50px;
  padding: 1rem 0;

  h3 {
    text-align: center;
    padding-top: 4px;
    color: #41b883;
    font-size: 1.6rem;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
  }
}

#vueStoreImg {
  height: 140px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
