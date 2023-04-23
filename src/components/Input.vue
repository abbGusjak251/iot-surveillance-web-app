<template>
    <div>
        <p>{{ label }}</p>
        <input class="w-48 h-8 py-4 px-2.5 border-b-2 focus:outline-none" :placeholder="placeholder" />
    </div>
</template>
  
<script>
export default {
    name: 'Input',
    props: {
        label: String,
        placeholder: String,
    }
}
</script>
  