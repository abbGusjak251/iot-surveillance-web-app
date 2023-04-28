<template>
  <div>
    <div class="flex flex-col text-center space-y-5">
      <h1 class="text-xl font-bold text-gray-700 mx-auto p-2 text-center">Registrera övervakningskamera</h1>
      <!-- Form -->
      <Input placeholder="Kamerans namn..." v-model="form.name" />
      <Input placeholder="Kamerans IP..." v-model="form.ip" />
      <Input placeholder="URL till bild..." v-model="form.image" />
      <Button @click.native="register(form, cameras)">Lägg till</Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'

import { onValue } from 'firebase/database'
import { camerasRef, registerCamera } from '../firebase'

export default {
  name: 'Home',
  components: {
    Button,
    Input,
  },
  data() {
    return {
      form: {
        name: '',
        ip: '',
        image: '',
      },
      cameras: [],
    }
  },
  mounted() {
    // Load cameras from realtime database
    onValue(camerasRef, (snapshot) => {
      this.cameras = snapshot.val()
    });
  },
  methods: {
    // Register new camera
    register(form, cameras) {
      registerCamera(form, cameras)
    }
  },
}
</script>
