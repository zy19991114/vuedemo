<template>
  <div>
    用户名：
    <input v-model="username" type="text" />
    密码:
    <input v-model="password" type="text" />
    <button @click="bbb({username,password})">登录</button>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["bbb"])
  }
};
</script>