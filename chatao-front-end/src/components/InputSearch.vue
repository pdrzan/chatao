<script setup>
import BoxText from './BoxText.vue';
</script>
<template>
<div class="search">
    <img src="../assets/media/search.png" alt="Magnifying glass" class="search-img" />
    <input class="input" type="text" placeholder="Encontrar" />
</div>
</template>
<style scoped>
.search {
	box-sizing: border-box;
    width: 100%;
    border-radius: 15px;

    display: flex;
    padding: 15px;
    gap: 15px;

    justify-content: center;
    align-items: center;

    background-color: var(--green-light);
}
.search-img {
    width: 20px;
}
.input {
    height: 100%;
    width: 100%;
    border: none;
    background-color: var(--green-light);
	font-size: 16px;
}
</style>
