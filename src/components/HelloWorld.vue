<template>
  <div class="hello">
    <div v-for="(item,i) in list" :key="i">名字是：{{item.name}}，成绩是：{{item.omg}}</div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["aaa"])
  },
  computed: {
    ...mapState(["list"])
  },
  mounted() {
    this.aaa();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
</style>
