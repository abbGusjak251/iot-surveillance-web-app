<template>
    <div class="shadow-md w-48 h-48 text-center p-2.5">
        <h3 class="text-md">{{ title }}</h3>    
        <p class="text-gray-500 text-sm">{{ text }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'Card',
    props: {
        title: String,
        text: String,
    }
}
</script>
  