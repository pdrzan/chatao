<script setup>
import { computed, onMounted, ref } from 'vue';
import Contact from './Contact.vue'
import InputSearch from './InputSearch.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const contacts = ref([]);
const search = ref("");
const contactsFiltered = computed(() => {
    if (search.value === null || search.value === "") {
        return contacts.value;
    }
    return contacts.value.filter((contact) => contact.name.match(new RegExp(`[A-z]*${search.value}[A-z]*`)))
})

onMounted(() => {
    if (getCookie("userId") === undefined || getCookie("userId") === "" || getCookie("userId") === "undefined") {
        return;
    }
    const data = { userId: getCookie("userId") }
    fetch(`/api/user/contacts/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (response.status != 200) {
                alert("Não foi possível carregar os contatos.\nTente recarregar a página.");
            } else {
                response.json()
                    .then(contactsData => {
                        contacts.value = contactsData;
                    })
            }
        })
})

function isSelected(contact) {
    return contact.id === route.params.userId;
}
</script>
<template>
    <div class="contacts-left-bar">
        <InputSearch v-model="search" />
        <div class="title">Contatos</div>
        <template v-for="contact in contactsFiltered">
            <Contact :name="contact.name" :id="contact.id" :selected="isSelected(contact)" />
        </template>
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
    overflow-y: scroll;
}

.title {
    width: 100%;
    color: white;
    font-size: 32px;
}
</style>