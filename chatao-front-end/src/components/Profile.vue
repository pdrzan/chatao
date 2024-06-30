<script setup>
import InputTextButton from './InputTextButton.vue'
import Button from './Button.vue';
import InputPasswordButton from './InputPasswordButton.vue'
import { onMounted, resolveComponent, defineModel } from 'vue';

onMounted(() => {
    fetch(`/api/user/${getCookie("userId")}`, {
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => {
            if (response.status !== 200) {
                console.log(response);
                alert("Não foi possível carregar as informações do seu perfil.\nTente novamente.");
            } else {
                response.json()
                    .then((user) => {
                        document.querySelector("input[name='name']").value = user.name;
                        document.querySelector("input[name='email']").value = user.email;
                    })
            }
        })
})

function changeName() {
    const name = document.querySelector("input[name='name']").value;
    const data = { name };
    fetch(`/api/user/${getCookie("userId")}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (response.status !== 200) {
                alert("Não foi possível modificar o nome.\nTente novamente.");
            } else {
                response.json()
                    .then((user) => {
                        document.querySelector("input[name='name']").value = name;
                        console.log(user);
                    })
            }
        })
}

function changeEmail() {
    const email = document.querySelector("input[name='email']").value;
    const data = { email };
    fetch(`/api/user/${getCookie("userId")}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (response.status !== 200) {
                alert("Não foi possível modificar o email.\nTente novamente.");
            } else {
                response.json()
                    .then((user) => {
                        document.querySelector("input[name='email']").value = email;
                    })
            }
        })
}

function changePassword() {
    const password = document.querySelector("input[name='password']").value;
    const password_confirmation = document.querySelector("input[name='password-confirmation']").value;
    if (password !== password_confirmation) {
        alert("As senhas não são iguais.\nTente novamente.");
        return;
    }
    const data = { password };
    fetch(`/api/user/${getCookie("userId")}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (response.status !== 200) {
                alert("Não foi possível modificar a senha.\nTente novamente.");
            } else {
                response.json()
                    .then((user) => {
                        document.querySelector("input[name='password']").value = "";
                        document.querySelector("input[name='password-confirmation']").value = "";
                    })
            }
        })
}
</script>
<template>
    <div class="profile">
        <div class="change-photo">
            <div class="box-user-photo">
                <img src="../assets/media/user.png" alt="User photo" class="user-photo">
            </div>
            <Button text="Mudar foto" />
        </div>
        <InputTextButton text="Nome" placeholder="Nome do usuário" buttontext="Mudar nome" name="name"
            :click="changeName" />
        <InputTextButton text="Email" placeholder="Email do usuário" buttontext="Mudar email" name="email"
            :click="changeEmail" />
        <InputPasswordButton :click="changePassword" />
    </div>
</template>
<style scoped>
.change-photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.box-user-photo {
    box-sizing: border-box;
    padding: 35px;
    border-radius: 50%;
    background-color: var(--green-dark);
}

.user-photo {
    width: 300px;
    height: 300px;
    border-radius: 50%;
}

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 30px;
}
</style>