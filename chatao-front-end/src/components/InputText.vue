<script setup>
import BoxText from './BoxText.vue';
const props = defineProps(['text', 'id', 'placeholder', 'name', 'minlength', 'maxlength'])
</script>
<template>
<div class="box">
    <div class="text"> {{ text }} </div>
    <BoxText :id :placeholder :name :minlength :maxlength />
</div>
</template>
<style scoped>
.box {
    width: 100%;

    display: flex;
    padding: 15px;
    gap: 15px;

    justify-content: center;
    align-items: center;
}
.text {
    color: white;
    font-size: 24px;
}
</style>