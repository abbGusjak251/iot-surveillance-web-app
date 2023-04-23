<template>
    <div class="w-full bg-blue-500 h-16 py-2 px-2 m-0">
        <h1 class="text-xl font-semibold text-white ml-2">{{ title }}</h1>
    </div>
</template>
  
<script>
export default {
    name: 'AppBar',
    props: {
        title: String,
    }
}
</script>
  