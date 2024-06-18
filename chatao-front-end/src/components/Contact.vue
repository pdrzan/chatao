<script setup>
const props = defineProps({
    name: String,
    selected: Boolean,
    id: String
})
import { RouterLink } from 'vue-router'
import { computed } from 'vue';

const toChatUrl = computed(() => {
    return '/chat/' + props.id;
})

</script>
<template>
    <RouterLink class="contact" :to="toChatUrl" :selected>
        <img src="../assets/media/user.png" alt="Contact image" class="contact-img" />
        <div class="contact-name"> {{ name }} </div>
    </RouterLink>
</template>
<style scoped>
.contact {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;

    background-color: var(--white);
    width: 100%;
    border-radius: 10px;

    box-sizing: border-box;

    box-shadow: 1px 1px 3px rgb(56, 56, 56);

    font-size: 24px;
    text-decoration: none;
    color: black;
}

.contact[selected="true"] {
    background-color: var(--gray-light);
}

.contact:hover {
    text-decoration: underline;
}

.contact-img {
    width: 40px;
}
</style>