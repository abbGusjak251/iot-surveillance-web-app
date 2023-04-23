<template>
  <div class="about">
    <h1 class="text-xl font-bold text-gray-700 mx-auto p-2 text-center">{{ name }}</h1>
    <img width="600px" height="300px" :src="`http://${ip}:8080`" />
  </div>
</template>

<script>
export default {
  name: "CameraPage",
  data() {
    return {
      name: "",
      ip: "",
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    this.name = params.get("name")
    this.ip = params.get("ip")
  }
}
</script>
