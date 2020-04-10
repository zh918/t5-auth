<template>
  <div class="left-menu-container">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#ffd04b"
    >
      <el-submenu :index="item.id" v-for="(item, index) in menu">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <el-menu-item
          :index="m.id"
          @click="handleChooseMenu(m.path)"
          v-for="(m, n) in item.children"
          >{{ m.name }}</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import shortid from "shortid";
import api from "@/services/commonLogic";

export default {
  name: "leftMenu",
  props: ["isCollapse"],
  data() {
    return {
      menu: [
        {
          id: shortid.generate(),
          name: "系统管理",
          children: [
            { id: shortid.generate(), name: "系统列表", path: "/system/list" },
          ]
        },
        {
          id: shortid.generate(),
          name: "资源管理",
          children: [
            { id: shortid.generate(), name: "资源列表", path: "/resource/list" },
          ]
        },
        {
          id: shortid.generate(),
          name: "角色管理",
          children: [
            { id: shortid.generate(), name: "角色列表", path: "/role/list" },
          ]
        }
      ]
    };
  },
  created() {
    // this.initData();
  },
  methods: {
    initData() {
      let parms = {
        clientId: "bgyfactorOmp",
        userCode: $Data.get("userCode")
      };

      api.getMenu(parms).then(result => {
        if (result.errorCode == 0) {
          this.menu = result.data.children;
        } else {
          this.$message.error(result.errorMsg);
        }
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleChooseMenu(path) {
      console.log(path);
      $TabHelper.open({ path: path });
    }
  }
};
</script>

<style lang="less" scoped>
.left-menu-container {
  width: 100%;

  i {
    color: #bfcbd9;
  }
}
</style>
