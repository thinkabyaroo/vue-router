<template>
  <div>
    <h1>i am home</h1>
<!--    <router-link to="/contact">Contact Us</router-link>-->

    <router-link :to="{name:'contact'}">Contact Us</router-link>
    <router-link :to="{name:'detail',params:{id:123}}">to post 123</router-link>
    <router-link :to="{name:'detail',params:{id:123},query:{name:'tko'}}">to post 123</router-link>


    <!--    <button @click="toContact">Contact</button>-->

  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    toContact() {
      router.push({
        path:"/contact"
      })
    }
  },
}
</script>

<style scoped>

</style>