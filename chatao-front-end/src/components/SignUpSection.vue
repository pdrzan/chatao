<script setup>
import Button from './Button.vue'
import InputText from './InputText.vue';
import InputPassword from './InputPassword.vue';
</script>
<template>
<div class="caixa">
    <img src="./../assets/media/logo.png" alt="chatao's logo"/>
	<div class="title"> Crie sua conta </div>
    <InputText text="Nome" id="name" placeholder="Digite seu nome" name="name"/>
    <InputText text="Email" id="email" placeholder="Digite seu email" name="email"/>
    <InputPassword id="password" name="password"/>
	<Button text="Criar sua conta"/>
</div>
</template>
<style scoped>
.caixa {
    background-color: var(--blue-green);
	box-sizing: border-box;
    width: 700px;
    padding: 45px;
    border-radius: 20px;
    gap: 10px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title {
    font-size: 48px;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px rgb(56, 56, 56);
}
</style>
