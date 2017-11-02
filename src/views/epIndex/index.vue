<template>
  <div>
    <div class="index">
      <!--  栅栏-->
      <el-row>
        <el-col :xs="12" :sm="8" :md="10" :lg="14">
          <div class="grid-content bg-purple" id="order-list">
            <el-tabs type="card" @tab-click="handleClick">
              <el-tab-pane stripe>
                <span slot="label"><i class="icon iconfont icon-shoujichongzhi">C网</i></span>
                <el-table :data="orderData" style="width: 100%" border>
                  <el-table-column prop="name" label="名称"></el-table-column>
                  <el-table-column prop="count" label="数量" width="70"></el-table-column>
                  <el-table-column prop="price" label="单价" width="70"></el-table-column>
                  <el-table-column label="操作" width="120" fixed="right">
                    <template slot-scope="scope">
                      <el-button type="primary" size="small" icon="delete"
                                 @click="deleteSingleGoods(scope.row)"></el-button>
                      <el-button type="primary" size="small" class="el-icon-plus"
                                 @click="addOrderList(scope.row)"></el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="totalDiv">
                  <small>数量：</small>
                  {{totalCount}}
                  <small>金额：</small>
                  {{totalMoney}}（元）
                </div>
                <div class="div-btn">
                  <span class="wrapper">
                  <el-button type="success" @click="checkout()">提交</el-button>
                  <el-button type="danger" @click="deleteAllGoods()">取消</el-button>
                  </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="固话">
                固话
              </el-tab-pane>
              <el-tab-pane label="宽带">
                宽带
              </el-tab-pane>
            </el-tabs>

          </div>
        </el-col>
        <el-col :xs="12" :sm="16" :md="14" :lg="10">
          <div class="often-goods">
            <div class="title">我是产品栏</div>
            <div class="grid-content bg-purple-light often-goods-list" id="product-list">
              <ul>
                <li v-for="goods in offerData" @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="gprice">￥{{goods.price}}</span>
                </li>
                <div class="clear"></div>
              </ul>
            </div>
          </div>
          <div class="grid-content bg-purple-light goods-type">
            <el-tabs>
              <el-tab-pane label="零食">
                <ul class='cookList'>
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                  <div class="clear"></div>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class='cookList'>
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                  <div class="clear"></div>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class='cookList'>
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                  <div class="clear"></div>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'index',
    data () {
      return {
        totalCount: 0,
        totalMoney: 0,
        orderData: [],
        offerData: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: []
      }
    },
    /*  当所有的虚拟dom执行完成后执行mounted方法*/
    mounted: function () {
      var orderListHeight = document.body.clientHeight
      console.log(orderListHeight)
      document.getElementById('order-list').style.height = orderListHeight + 'px'
    },
    methods: {
      handleClick ( tab, event ) {
        console.log(tab, event)
      },
      getTotalMoneyAndCount: function () {
        this.totalCount = 0
        this.totalMoney = 0
        this.orderData.forEach(( element ) => {
          this.totalCount += element.count
          this.totalMoney = this.totalMoney + (element.price * element.count)
        })
      },
      checkout () {
        if (this.totalCount !== 0) {
          this.orderData = []
          this.totalCount = 0
          this.totalMoney = 0
          this.$message({
            message: '结账成功，感谢你又为店里出了一份力!',
            type: 'success'
          })

        } else {
          this.$message.error('不能空结。老板了解你急切的心情！')
        }
      },
      deleteAllGoods () {
        this.orderData = []
        this.totalCount = 0
        this.totalMoney = 0
      },
      deleteSingleGoods ( goods ) {
        this.orderData = this.orderData.filter(o => o.goodsId !== goods.goodsId)
        this.getTotalMoneyAndCount()
      },
      addOrderList ( goods ) {
        //  商品是否已经存在于订单列表中
        let isHave = false
        for (let i = 0; i < this.orderData.length; i++) {
          if (this.orderData[i].goodsId === goods.goodsId) {
            isHave = true
          }
        }
        //  根据判断的值编写业务逻辑
        if (isHave) {
          //  存在就进行数量添加
          const arr = this.orderData.filter(o => o.goodsId === goods.goodsId)
          arr[0].count++
        } else {
          const newGoods = {goodsId: goods.goodsId, name: goods.goodsName, price: goods.price, count: 1}
          this.orderData.push(newGoods)
        }
        this.getTotalMoneyAndCount()
      }
    },
    components: {}
  }
</script>

<style scoped="scope" rel="stylesheet/scss" lang="scss">
  .index {
    float: left;
    width: 80%;
    height: 100%;
    overflow: hidden;
  }

  .clear {
    clear: both;
    width: 0.1px;
    height: 1px;
    line-height: 1px;
  }

  .el-row {
    margin-bottom: 20px;

    &
    :last-child {
      margin-bottom: 0;
    }

  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .div-btn {
    margin-top: 10px;
    text-align: center;
  }

  .iconfont {
    font-size: 15px;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #D3dce6;
    background-color: #F9FAFC;
    padding: 10px;
    text-align: left;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    cursor: pointer;
  }

  .gprice {
    color: #0099FF;
  }

  .goods-type {
    clear: both;
  }

  .cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;
  }

  .cookList li:last-child {
    clear: both;
  }

  .cookList li span {

    display: block;
    float: left;
  }

  .foodImg {
    width: 40%;
  }

  .foodName {
    font-size: 16px;
    padding-left: 10px;
    color: brown;

  }

  .foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }

  .totalDiv {
    text-align: center;
    background-color: #FFFFFF;
    padding: 10px;
    border-bottom: 1px solid #D3dce6;
  }
</style>
