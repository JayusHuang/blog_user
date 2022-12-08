<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

 <template>
  <div id="#app">
    <div><router-link to="/"> Home</router-link></div>
    <div><router-link to="/HelloWorld"> HelloWorld</router-link></div>
    <router-link to="/BookCard">BookCard</router-link>
    <router-view />
  </div>
</template>

<style scoped>
</style>
