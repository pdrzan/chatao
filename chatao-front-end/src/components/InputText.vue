<script setup>
import BoxText from './BoxText.vue';
const props = defineProps({
    text: String,
    id: String,
    placeholder: String,
    name: String,
    minlength: Number,
    maxlength: String,
    required: Boolean
})
</script>
<template>
    <div class="box">
        <div class="text"> {{ text }} </div>
        <BoxText :id :placeholder :name :minlength :maxlength :required />
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
