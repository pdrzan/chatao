<script setup>
import Header from '../components/Header.vue'
import ContactsLeftBar from '../components/ContactsLeftBar.vue'
import Profile from '../components/Profile.vue'
</script>
<template>
<Header/>
<div class="chats">
    <ContactsLeftBar/>
    <Profile/>
</div>
</template>
<style scoped>
.chats {
    display: grid;
    grid-template-columns: 20.834% 79.166%;
    grid-template-rows: calc(100vh - 100px);
}
</style>
