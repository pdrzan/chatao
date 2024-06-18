<script setup>
import BoxPassword from './BoxPassword.vue';
import Button from './Button.vue'
const props = defineProps({
    click: Function
})
</script>
<template>
    <div class="input-text-button">
        <div class="text">Nova senha</div>
        <BoxPassword class="box-text" name="password" placeholder="Nova senha do usuário" />
        <BoxPassword class="box-text" name="password-confirmation" placeholder="Confimação da senha do usuário" />
        <Button text="Mudar senha" @click="click" />
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