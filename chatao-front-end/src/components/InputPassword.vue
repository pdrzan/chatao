<script setup>
import BoxPassword from './BoxPassword.vue';
const props = defineProps({
    id: String,
    placeholder: String,
    name: String,
    minlength: Number,
    maxlength: String,
})
</script>
<template>
    <div class="box">
        <div class="text"> Senha </div>
        <BoxPassword :id placeholder="Digite sua senha" :name_1 :minlength :maxlength :required="true" />
    </div>
</template>
<style scoped>
.box {
    box-sizing: border-box;
    width: 100%;

    display: flex;
    padding: 15px;
    gap: 15px;

    justify-content: center;
    align-items: center;
}

.text {
    font-weight: 600;
    color: white;
    font-size: 24px;
}
</style>
