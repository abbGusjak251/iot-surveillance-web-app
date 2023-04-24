<template>
  <div class="mt-0 p-0 w-full">
    <h1 class="text-xl font-bold text-gray-700 mx-auto p-2 text-center">Kameror</h1>
    <div class="space-y-5 mb-24">
      <div v-for="(camera, index) in cameras" :key="camera.ip" class="h-72">
        <router-link  :to="{ name: 'Camera', query: { name: camera.name, ip: camera.ip} }">
          <Card :title="camera.name" :text="camera.ip" :image="camera.image" class="mx-auto"></Card>
        </router-link>
        <div class="w-48 h-24 shadow-md mx-auto text-center" v-if="editCamera == index">
          <Input placeholder="Namn..." v-model="form.name" />
          <Input placeholder="URL..." v-model="form.image"  />
          <Button @click.native="update(form, cameras, index)">Uppdatera</Button>
        </div>
        <Button v-else @click.native="
          form = camera
          editCamera = index
        " class="text-center mx-auto">
          Redigera
        </Button>
      </div>
    </div>
    
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { onValue } from 'firebase/database'
import { camerasRef, updateCamera } from '../firebase'
export default {
  name: 'HomePage',
  components: {
    Card,
    Button,
    Input
  },
  mounted() {
    onValue(camerasRef, (snapshot) => {
      this.cameras = snapshot.val()
      console.log(snapshot.val())
    });
  },
  data() {
    return {
      cameras: [],
      form: {
        name: '',
        ip: '',
        image: '',
      },
      editCamera: -1,
    }
  },
  methods: {
    update(form, cameras, camera) {
      console.log(form)
      updateCamera(form, cameras, camera)
    }
  }
}
</script>
