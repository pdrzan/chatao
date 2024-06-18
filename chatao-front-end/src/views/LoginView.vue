<script setup>
import router from '@/router';
import LoginSection from '../components/LoginSection.vue'
import { onActivated, onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';

onMounted(() => {
    if (getCookie("userId") === "" || getCookie("userId") === "undefined") {
        document.cookie = "userId=; Max-Age=-9999999;";
    } else if (getCookie("userId") !== undefined) {
        router.push({ path: '/chats' });
    }
})

</script>
<template>
    <div class="main">
        <LoginSection />
    </div>
</template>
<style scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
}
</style>
