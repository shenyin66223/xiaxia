<template>
  <div class="content">
    <nav>
        <!-- 渲染nav导航 -->
        <span v-for="(item,index) in dataList" :key="index" :class="{'active':index==ind}" @click="showBtn(index)">{{item.nav}}</span>
    </nav>
    <div class="con">
        <!-- 判断是否有值 -->
        <div v-if="!newArr.length">loading...</div>
        <!-- 渲染页面 -->
        <dl v-for="(item,index) in newArr" :key="index">
            <dt>
                <img :src="item.img" alt="">
            </dt>
            <dd>
                <p>{{item.title}}</p>
                <p>浏览：{{item.num}}</p>
            </dd>
        </dl>
    </div>
  </div>
</template>
<script>
import "../mock/mock"
import {mapState,mapActions,mapMutations} from "vuex"

export default {
  props: {},
  components: {},
  data() {
    return {
        ind: 0
    };
  },
  computed: {
      ...mapState(["dataList","newArr"])
  },
  methods: {
      ...mapActions(['getDataList']),
      ...mapMutations(['filterDataList']),
    //   点击事件
      showBtn(index){
          this.ind = index;
          this.filterDataList(index)
      }
  },
  created() {
    //   初始获取数据
      this.getDataList()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
nav{
    width: 100%;
    height: 2.5rem;
    display: flex;
    span{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        &.active{
            color: palevioletred;
            border-bottom: 1px solid palevioletred;
        }
    }
}
.con{
    flex: 1;
    overflow: auto;
    dl{
        width: 92%;
        height: 100px;
        display: flex;
        margin: 4%;
        dt{
            width: 150px;
            height: 100px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
            flex: 1;
            display: flex;
            flex-direction: column;
            p{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            p:nth-child(2){
                 display: flex;
                justify-content: flex-start;
                align-items: center;
                padding-left: 8%;
                font-size: 14px;
                color: #666;
            }
        }
    }
}
</style>