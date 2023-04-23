<template>
  <div>
    <div class="flex flex-col text-center space-y-5">
      <h3>Registrera övervakningskamera</h3>
      <Input label="Namn" placeholder="Skriv ditt namn..." />
      <Input label="IP-adress" placeholder="Skriv din Ip..."/>
      <Button>Lägg till</Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'

import { set } from 'firebase/database'
import { camerasRef } from '../firebase'

export default {
  name: 'Home',
  compoents: {
    Button,
    Input,
  },
  methods: {
    registerCamera(name, ip) {
      set(camerasRef, {
        name: name,
        ip: ip,
      })    
    }
  },
}
</script>
