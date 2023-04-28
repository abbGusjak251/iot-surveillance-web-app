<template>
    <button class="rounded-md bg-yellow-400 text-gray-700 mx-auto px-3 py-2 w-52">
        <slot></slot>
    </button>
</template>
  
<script>
import '../assets/tailwind.css'
export default {
    name: 'Button',
}
</script>
  