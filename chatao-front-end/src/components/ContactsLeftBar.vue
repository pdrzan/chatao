<script setup>
import Contact from './Contact.vue'
import InputSearch from './InputSearch.vue'
</script>
<template>
<div class="contacts-left-bar">
    <InputSearch/>
    <div class="title">Contatos</div>
    <Contact name="Contato"/>
    <Contact name="Contato"/>
    <Contact name="Contato" selected="true"/>
    <Contact name="Contato"/>
</div>
</template>
<style scoped>
.contacts-left-bar {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    padding: 25px;

    background-color: var(--blue-green);
    box-sizing: border-box;
}
.title {
    width: 100%;
    color: white;
    font-size: 32px;
}
</style>