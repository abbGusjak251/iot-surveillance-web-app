<template>
    <div class="shadow-md w-48 h-48 text-center p-2.5 space-y-2">
        <div>
            <h3 class="text-md">{{ title }}</h3>    
            <p class="text-gray-500 text-sm">{{ text }}</p>
        </div>
        <img class="w-max mx-auto h-24 rounded-md object-contain" :src="image"/>
    </div>
</template>
  
<script>
export default {
    name: 'Card',
    props: {
        title: String,
        text: String,
        image: String,
    }
}
</script>
  