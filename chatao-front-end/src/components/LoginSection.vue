<script setup>
import router from '@/router';
import { RouterLink } from 'vue-router'
import Button from './Button.vue'
import InputEmail from './InputEmail.vue';
import InputPassword from './InputPassword.vue';

async function signIn(event) {
    const data = {};
    data.email = event.target.email.value;
    data.password = event.target.password.value;

    fetch('/api/user/login', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (response.status != 200) {
                alert("Não foi possível fazer o login.\nVerifique se seu usuário e senha estão corretos.\nTente novamente.");
            }
            else {
                response.json()
                    .then((resData) => {
                        document.cookie = `userId=${resData.userId}; path=/`;
                        router.push({ path: '/chats' });
                    })
            }
        })
}


</script>
<template>
    <form class="caixa" @submit="signIn" @submit.prevent="onSubmit" target="_self">
        <img src="./../assets/media/logo.png" alt="chatao's logo" />
        <div class="title">Bem vindo ao Chatão!</div>
        <InputEmail text="Email" id="email" placeholder="Digite seu email" name="email" required="true" />
        <InputPassword text="Senha" id="password" placeholder="Digite sua senha" name="password" />
        <div class="createAccount"> Não possui conta? Crie uma agora clicando <RouterLink to="/signup">aqui</RouterLink>
        </div>
        <Button type="submit" text="Login" />
    </form>
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
