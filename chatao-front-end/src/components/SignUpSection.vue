<script setup>
import router from '@/router';
import Button from './Button.vue';
import InputText from './InputText.vue';
import InputEmail from './InputEmail.vue';
import InputTwoPassword from './InputTwoPassword.vue';

async function signUp(event) {
    const data = {};
    data.email = event.target.email.value;

    if (event.target.password_1.value !== event.target.password_2.value) {
        alert("As senhas não são iguais.\nTente novamente.");
        return;
    }
    data.password = event.target.password_1.value;
    data.name = event.target.name.value;
    fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (response.status != 200) {
                alert("Não foi possível fazer o cadastro, tente novamente.");
            } else {
                response.json()
                    .then((resData) => {
                        document.cookie = `userId=${resData.userId}; path=/`;
                        router.push({ path: '/chats' });
                    });
            }
        })
}


</script>
<template>
    <form class="caixa" @submit="signUp" @submit.prevent="onSubmit" target="_self">
        <img src="./../assets/media/logo.png" alt="chatao's logo" />
        <div class="title"> Crie sua conta </div>
        <InputText text="Nome" id="name" placeholder="Digite seu nome" name="name" required="true" />
        <InputEmail text="Email" id="email" placeholder="Digite seu email" name="email" required="true" />
        <InputTwoPassword id_1="password_1" id_2="password_2" name_1="password_1" name_2="password_2" />
        <Button text="Criar sua conta" />
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
</style>./InputTwoPassword.vue
