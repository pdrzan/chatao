<script setup>
import { onMounted } from 'vue';
import SignUpSection from '../components/SignUpSection.vue'

onMounted(() => {
    if (getCookie("userId") === "" || getCookie("userId") === "undefined") {
        document.cookie = "userId=; Max-Age=-9999999;";
    } else if (getCookie("userId") !== undefined) {
        router.push({ path: '/chats' });
    }
});
</script>
<template>
    <div class="main">
        <SignUpSection />
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
