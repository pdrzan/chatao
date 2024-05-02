<script setup>
import InputTextButton from './InputTextButton.vue'
import Button from './Button.vue';
import InputPasswordButton from './InputPasswordButton.vue'
</script>
<template>
<div class="profile">
    <div class="change-photo">
        <div class="box-user-photo">
            <img src="../assets/media/user.png" alt="User photo" class="user-photo">
        </div>
        <Button text="Mudar foto"/>
    </div>
    <InputTextButton text="Nome" placeholder="Nome do usuário" buttontext="Mudar nome" name="name"/>
    <InputTextButton text="Email" placeholder="Email do usuário" buttontext="Mudar email" name="email"/>
    <InputPasswordButton/>
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