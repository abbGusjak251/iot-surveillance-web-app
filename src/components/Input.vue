<template>
    <div>
        <p>{{ label }}</p>
        <input class="w-48 h-8 py-4 px-2.5 border-b-2 focus:outline-none" :placeholder="placeholder" v-model="value" @input="handleInput" />
    </div>
</template>
  
<script>
import '../assets/tailwind.css'
export default {
    name: 'Input',
    data() {
        return {
            value: '',
        }
    },
    props: {
        label: String,
        placeholder: String,
        modelValue: String,
    },
    emits: ['update:modelValue'],
    methods: {
        handleInput () {
            this.$emit('input', this.value)
        }
    },
}
</script>
  