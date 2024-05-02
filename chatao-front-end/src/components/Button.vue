<script setup>
const props = defineProps(['text'])
</script>
<template>
<button class="botao">
    {{ text }}
</button>
</template>
<style scoped>
.botao {
    color: white;
    background-color: var(--green-dark);
    padding: 15px;
    font-size: 24px;
    border-radius: 15px;
    border: none;
	font-weight: 600;
    box-shadow: 1px 1px 3px rgb(56, 56, 56);
}
.botao:active {
    box-shadow: -1px -1px 3px rgb(56, 56, 56);
}
</style>
