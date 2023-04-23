<template>
  <div>
    <div class="flex flex-col text-center space-y-5">
      <h1 class="text-xl font-bold text-gray-700 mx-auto p-2 text-center">Registrera övervakningskamera</h1>
      <!-- <Input label="Namn" placeholder="Skriv ditt namn..." />
      <Input label="IP-adress" placeholder="Skriv din Ip..."/> -->
      <input class="w-48 h-8 py-4 px-2.5 border-b-2 focus:outline-none mx-auto" placeholder="Kamerans namn..." v-model="form.name" />
      <input class="w-48 h-8 py-4 px-2.5 border-b-2 focus:outline-none mx-auto" placeholder="Kamerans IP..." v-model="form.ip" />
      <input class="w-48 h-8 py-4 px-2.5 border-b-2 focus:outline-none mx-auto" placeholder="URL till bild..." v-model="form.image" />
      <button class="rounded-md bg-yellow-400 px-3 py-2 w-48 mx-auto text-gray-700" @click="registerCamera(form)">Lägg till</button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'

import { set, onValue } from 'firebase/database'
import { camerasRef } from '../firebase'

export default {
  name: 'Home',
  compoents: {
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
    onValue(camerasRef, (snapshot) => {
      this.cameras = snapshot.val()
    });
  },
  methods: {
    registerCamera(form) {
      const updated_cameras = this.cameras
      updated_cameras.push({
        name: form.name,
        ip: form.ip,
        image: form.image,
      })
      set(camerasRef, updated_cameras)    
    }
  },
}
</script>
