<script setup>
import BoxPassword from './BoxPassword.vue';
const props = defineProps({
    id_1: String,
    id_2: String,
    name_1: String,
    name_2: String,
    minlength: Number,
    maxlength: String,
})
</script>
<template>
    <div class="box">
        <div class="text"> Senha </div>
        <BoxPassword :id="id_1" placeholder="Digite sua senha" :name_1 :minlength :maxlength :required="true" />
        <BoxPassword :id="id_2" placeholder="Repita sua senha" :name_2 :minlength :maxlength :required="true" />
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
