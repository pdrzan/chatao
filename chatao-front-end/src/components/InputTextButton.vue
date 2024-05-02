<script setup>
import BoxText from './BoxText.vue'
import Button from './Button.vue'
const props = defineProps(['text', 'buttontext', 'id', 'placeholder', 'name', 'minlength', 'maxlength'])
</script>
<template>
<div class="input-text-button">
    <div class="text">{{ text }}</div>
    <BoxText class="box-text" :name :placeholder :minlength :maxlength/>
    <Button :text="buttontext"/>
</div>
</template>
<style scoped>
.input-text-button {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 15px;
}
.text {
    font-size: 24px;
    font-weight: 700;
}
</style>