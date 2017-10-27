<template>
  <el-menu :router="true" class="el-menu-vertical-demo" @open="handleOpen"
           @close="handleClose" :default-active="$route.path"
           :collapse="isCollapse" :unique-opened="true">
    <!--一级导航-->
    <!--<el-submenu v-for="item in funcMenuExtends" :index="item.menuIndex+''" :key="item.menuIndex">
      <template slot="title">
        <span>{{item.menuName}}</span>
      </template>
      &lt;!&ndash;二级导航&ndash;&gt;
      <el-submenu v-for="itemMiddleSubMenu in item.funcMenuExtends" :index="itemMiddleSubMenu.menuIndex+''"
                  :key="itemMiddleSubMenu.menuIndex">
        <template slot="title">
          {{itemMiddleSubMenu.menuName}}
        </template>
        <el-menu-item v-for="itemBottom in itemMiddleSubMenu.funcMenuExtends"
                      :index="itemBottom.menuIndex+''"
                      :key="itemBottom.menuIndex"
                      @click="clickSidebar( itemBottom.breadcrumb, itemBottom.url )">
          {{ itemBottom.menuName }}
        </el-menu-item>
      </el-submenu>
     &lt;!&ndash; <el-menu-item-group v-for="itemMiddleLink in item.funcMenuExtends"
                          :index="itemMiddleLink.menuName"
                          :key="itemMiddleLink.menuIndex">
        <el-menu-item :index="itemMiddleLink.menuName"
                      @click="clickSidebar( )">
          {{ itemMiddleLink.menuName }}
        </el-menu-item>
      </el-menu-item-group>&ndash;&gt;
    </el-submenu>-->
    <template v-for="item in funcMenuExtends">
      <template v-if="item.funcMenuExtends">
        <el-submenu :index="item.urlAddr">
          <template slot="title">{{ item.menuName }}</template>
          <el-menu-item v-for="(subItem,i) in item.funcMenuExtends" :key="i" :index="subItem.urlAddr">
            {{ subItem.menuName }}
          </el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.urlAddr">
          {{ item.menuName }}
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<style scoped="scope">
  .el-menu-vertical-demo {
  }
</style>

<script>
  /*引入axios*/
  import axios from 'axios'

  export default {
    data() {
      return {
        isCollapse: true,
        funcMenuExtends: [
          {
            "funcMenuExtends": [
              {
                "funcMenuExtends": [
                  {
                    "menuId": "10101",
                    "menuIndex": "0",
                    "menuLevel": "2",
                    "menuName": "三级菜单10201",
                    "menuType": "1000",
                    "urlAddr": "index"
                  },
                  {
                    "menuId": "10102",
                    "menuIndex": "1",
                    "menuLevel": "2",
                    "menuName": "三级菜单10202",
                    "menuType": "1100",
                    "urlAddr": ""
                  }
                ],
                "menuId": "101",
                "menuIndex": "0",
                "menuLevel": "1",
                "menuName": "二级菜单01",
                "menuType": "1000",
                "urlAddr": ""
              },
              {
                "funcMenuExtends": [
                  {
                    "menuId": "10201",
                    "menuIndex": "0",
                    "menuLevel": "2",
                    "menuName": "三级菜单10201",
                    "menuType": "1000",
                    "urlAddr": ""
                  },
                  {
                    "menuId": "10202",
                    "menuIndex": "1",
                    "menuLevel": "2",
                    "menuName": "三级菜单10202",
                    "menuType": "1100",
                    "urlAddr": ""
                  }
                ],
                "menuId": "102",
                "menuIndex": "1",
                "menuLevel": "1",
                "menuName": "二级菜单02",
                "menuType": "1000",
                "urlAddr": ""
              }
            ],
            "menuId": "1",
            "menuIndex": "0",
            "menuLevel": "0",
            "menuName": "一级菜单",
            "menuType": "1000",
            "urlAddr": ""
          },
          {
            "menuId": "1",
            "menuIndex": "0",
            "menuLevel": "0",
            "menuName": "一级菜单(2)",
            "menuType": "1000",
            "urlAddr": "index"
          }
        ]
      };
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    },
    created: function () {
      var request = {
        "contractRoot": {
          "tcpCont": {
            "svcCode": "1010010005",
            "transactionID": "2101000501201602021234567890",
            "sign": "xxxxxxxxxxxxx",
            "version": "1.0"
          },
          "svcCont": {
            "authenticationInfo": {"sysUserId": "2017", "sysUserPostId": "20001"},
            "requestObject": {"regionId": "8140000", "systemInfoId": "山西电信"}
          }
        }
      };
      /*axios.post('http://127.0.0.1:9093/bss-base-query/SystemUserFuncMenuQuery/qryFuncMenuListBySysUserId', request)
        .then(response => {
          debugger;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })*/
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
