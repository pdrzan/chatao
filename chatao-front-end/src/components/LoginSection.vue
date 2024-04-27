<script setup>
import Botao from './Button.vue'
import InputText from './InputText.vue';
</script>
<template>
<div class="caixa">
    <img src="./../assets/media/logo.png" alt="chatao's logo"/>
    <div class="title">Bem vindo ao Chatão!</div>
    <InputText text="Email" id="email" placeholder="Digite seu email" name="email"/>
    <InputText text="Senha" id="password" placeholder="Digite sua senha" name="password"/>
    <div class="createAccount"> Não possui conta? Crie uma agora clicando <a href="#">aqui</a></div>
    <Botao text="Login"/>
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
.createAccount {
    color: white;
    font-size: 16px;
}
.createAccount a {
    color: white;
}
</style>
