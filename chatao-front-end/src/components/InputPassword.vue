<script setup>
import BoxText from './BoxText.vue';
const props = defineProps(['id', 'name', 'minlength', 'maxlength'])
</script>
<template>
<div class="box">
    <div class="text"> Senha </div>
    <BoxText :id placeholder="Digite sua senha" :name :minlength :maxlength />
    <BoxText :id placeholder="Repita sua senha" :name :minlength :maxlength />
</div>
</template>
<style scoped>
.box {
	box-sizing: border-box;
    width: 100%;

    display: flex;
    padding: 15px;
    gap: 15px;

    justify-content: center;
    align-items: center;
}
.text {
	font-weight: 600;
    color: white;
    font-size: 24px;
}
</style>
