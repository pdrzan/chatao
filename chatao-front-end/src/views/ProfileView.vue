<script setup>
import router from '@/router';
import Header from '../components/Header.vue'
import ContactsLeftBar from '../components/ContactsLeftBar.vue'
import Profile from '../components/Profile.vue'
import { onActivated, onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';

onMounted(() => {
    if (getCookie("userId") === undefined || getCookie("userId") === "" || getCookie("userId") === "undefined") {
        document.cookie = "userId=; Max-Age=-9999999;";
        router.push({ path: '/' });
        alert("Usuário não autenticado, faça seu login.");
    }
})
</script>
<template>
    <Header />
    <div class="chats">
        <ContactsLeftBar />
        <Profile />
    </div>
</template>
<style scoped>
.chats {
    display: grid;
    grid-template-columns: 20.834% 79.166%;
    grid-template-rows: calc(100vh - 100px);
}
</style>
