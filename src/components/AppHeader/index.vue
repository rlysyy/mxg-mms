<template>
  <div class="header">
    <a href="#">
      <img class="logo" src="@/assets/logo.png" width="25px" />
      <span class="company">梦学谷管理系统</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">修改密码</el-dropdown-item>
        <el-dropdown-item command="b">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { logout } from "@/api/login";

export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          break;
        case "b":
          console.log(localStorage.getItem("mxg-msm-token"));
          logout(localStorage.getItem("mxg-msm-token")).then(response => {
            localStorage.removeItem("mxg-msm-token");
            localStorage.removeItem("mxg-msm-user");
            this.$router.push("login");
          });
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.logo {
  vertical-align: middle;
  padding: 0 10px 0 40px;
}
.company {
  position: absolute;
  color: white;
}

.el-dropdown {
  float: right;
  margin-right: 40px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
</style>