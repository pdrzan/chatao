<script setup>
import BoxText from './BoxText.vue'
import Button from './Button.vue'
</script>
<template>
<div class="input-text-button">
    <div class="text">Nova senha</div>
    <BoxText class="box-text" name="password" placeholder="Nova senha do usuário"/>
    <BoxText class="box-text" name="password-confirmation" placeholder="Confimação da senha do usuário"/>
    <Button text="Mudar senha"/>
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