<template>
    <button class="rounded-md bg-yellow-400 text-yellow-400 px-3 py-2">
        <slot></slot>
    </button>
</template>
  
<script>
import '../assets/tailwind.css'
export default {
    name: 'Button',
}
</script>
  