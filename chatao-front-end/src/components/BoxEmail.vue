<script setup>
const props = defineProps({
    id: String,
    placeholder: String,
    name: String,
    minlength: Number,
    maxlength: String,
    required: Boolean,
})
</script>
<template>
    <input class="input" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" :id :placeholder :name
        :minlength :maxlength :required />
</template>
<style scoped>
.input {
    padding: 15px;
    background-color: var(--green-light);
    border: none;
    border-radius: 15px;
    flex-grow: 1;
}
</style>
