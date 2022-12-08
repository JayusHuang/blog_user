<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

 <template>
  <div id="root">
    <div id="nav">
    <div><router-link to="/"> Home</router-link></div>
    <router-link to="/BookCard">BookCard </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
</style>
