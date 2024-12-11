<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <h1>Welcome to Your Vue + BootstrapVue App</h1>
          <p>This is your single-page application using Vue.js and BootstrapVue!</p>
        </b-col>
      </b-row>
    </b-container>
    <b-button @click="toast('b-toaster-top-full')" class="mb-2">Show Toast</b-button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    toast(toaster, append = false) {
      this.counter++
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append,
        noAutoHide: false,
        autoHideDelay: 5000  // Set timeout to 5 seconds
      })
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>