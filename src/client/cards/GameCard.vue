<template>
  <div>
    <el-row>
      <el-col
        v-for="(o, index) in 2"
        :key="o"
        :span="8"
        :offset="index > 0 ? 2 : 0"
      >
      <div class="card">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
        </el-card>
        <el-link :underline="false" href="https://www.baidu.com">
          <div>老头环</div>
        </el-link>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
</script>
<style scoped>
.image {
  width: 100%;
  display: block;
}
.card:hover {
            /* 盒子阴影 */
            box-shadow: 4px 20px 40px 5px rgba(0, 0, 0, .1); 
            /* 盒子向上移动效果，改变上外边距 */
            /* margin-top: 8px; */
        }
</style>