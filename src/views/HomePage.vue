<template>
  <div class="mt-0 p-0 w-full">
    <h1 class="text-xl font-bold text-gray-700 mx-auto p-2 text-center">Kameror</h1>
    <div class="space-y-5 mb-24">
      <router-link v-for="camera in cameras" :key="camera.ip" :to="{ name: 'Camera', query: { name: camera.name, ip: camera.ip} }">
        <Card :title="camera.name" :text="camera.ip" :image="camera.image" class="mx-auto"></Card>
      </router-link>
    </div>
    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import { onValue } from 'firebase/database'
import { camerasRef } from '../firebase'
export default {
  name: 'HomePage',
  components: {
    Card,
  },
  mounted() {
    onValue(camerasRef, (snapshot) => {
      this.cameras = snapshot.val()
      console.log(snapshot.val())
    });
  },
  data() {
    return {
      cameras: [
        {
          name: "Köket",
          ip: "192.120.1.11"
        },
        {
          name: "Vardagsrummet",
          ip: "192.120.1.16"
        },
        {
          name: "Garaget",
          ip: "192.120.1.12"
        },
      ]
    }
  },
}
</script>
