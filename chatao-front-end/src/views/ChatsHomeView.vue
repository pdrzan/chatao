<script setup>
import Header from '../components/Header.vue'
import ContactsLeftBar from '../components/ContactsLeftBar.vue'
import ChatHome from '../components/ChatHome.vue'
</script>
<template>
<Header/>
<div class="chats-home">
    <ContactsLeftBar/>
    <ChatHome/>
</div>
</template>
<style scoped>
.chats-home {
    display: grid;
    grid-template-columns: 20.834% 79.166%;
    grid-template-rows: calc(100vh - 100px);
}
</style>
