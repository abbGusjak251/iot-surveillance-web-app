<template>
  <div class="about">
    <h1 class="text-xl font-bold text-gray-700 mx-auto p-2 text-center">{{ name }}</h1>
    <img width="600px" height="300px" :src="`http://${ip}`" :onerror="showError"  />
    <p v-if="error" class="text-red-500 text-center">Misslyckades med att ladda in strömmen</p>
  </div>
</template>

<script>
export default {
  name: "CameraPage",
  data() {
    return {
      name: "",
      ip: "",
      error: false,
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    this.name = params.get("name")
    this.ip = params.get("ip")
  },
  methods: {
    showError() {
      this.error = true
    }
  }
}
</script>
