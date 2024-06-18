<script setup>
import router from '@/router';
import Header from '../components/Header.vue'
import ContactsLeftBar from '../components/ContactsLeftBar.vue'
import ChatHome from '../components/ChatHome.vue'
import { onActivated, onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';

onMounted(() => {
    if (getCookie("userId") === undefined || getCookie("userId") == "undefined" || getCookie("userId") === "") {
        document.cookie = "userId=; Max-Age=-9999999;";
        router.push({ path: '/' });
        alert("Usuário não autenticado, faça seu login.");
    }
})
</script>
<template>
    <Header />
    <div class="chats-home">
        <ContactsLeftBar />
        <ChatHome />
    </div>
</template>
<style scoped>
.chats-home {
    display: grid;
    grid-template-columns: 20.834% 79.166%;
    grid-template-rows: calc(100vh - 100px);
}
</style>
