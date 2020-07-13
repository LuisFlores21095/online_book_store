<template>
  <v-card elevation="1" id="Home_DisplayName_Slide">
    <v-layout>
      <div class="HDS_Texts" id="HDS_Text">{{ leftText }}</div>
      <v-spacer></v-spacer>

      <div class="HDS_Texts" id="HDS_Link">
        <a>{{ rightText }} </a>
      </div>
    </v-layout>
  </v-card>
</template>

<style lang="scss" scoped>
#Home_DisplayName_Slide {
  margin: 0px 8px 22px;
  padding: 0 10px;
  padding: 12px;
  background-color: #e9ecefe8;
}
#HDS_Text {
  color: #6c757d;
  margin-left: 1%;
}

#HDS_Link {
  color: #41b883;
  margin-right: 1%;
}
#HDS_Link:hover {
  text-decoration: underline;
}
.v-application a {
  color: #41b883;
}
.HDS_Texts {
  font-size: 1.1rem;
}

@media (min-width: 420px) {
  .HDS_Texts {
    font-size: 1.3rem;
  }
}
@media (min-width: 1400px) {
  #Home_DisplayName_Slide {
    max-width: 1400px;
    margin: 0px auto 22px;
  }
}
</style>

<script>
export default {
  name: "Home_DisplayName_Slide",
  props: {
    leftText: String,
    rightText: String
  },
  data() {
    return {};
  }
};
</script>
>
