<script setup>
</script>
<template>
<div class="chat-home">
    <div class="caixa">
        <img src="./../assets/media/logo.png" alt="chatao's logo"/>
        <div class="title">Inicie uma conversa!</div>
    </div>
</div>
</template>
<style scoped>
.chat-home {
    display: flex;
    align-items: center;
    justify-content: center;
}
.caixa {
    background-color: var(--blue-green);
	box-sizing: border-box;
    width: 700px;
    gap: 10px;
    padding: 45px;
    border-radius: 20px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px rgb(56, 56, 56);
}
.title {
    font-size: 48px;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px rgb(56, 56, 56);
}
</style>