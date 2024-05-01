<script setup>
import HeaderChat from './HeaderChat.vue'
import Message from './Message.vue'
</script>
<template>
<div class="chat">
	<HeaderChat/>
	<div class="chat-box">
		<div class="messages">
			<Message text="Menagem envidado do contato"/>
			<Message text="Menagem envidado do contato" sent="true"/>
			<Message text="Menagem envidado do contato" sent="true"/>
			<Message text="Menagem envidado do contato" sent="true"/>
			<Message text="Menagem envidado do contato"/>
		</div>
		<div class="message-box">
			<textarea placeholder="Digite sua mensagem" class="input-message"/>
			<button class="send-button">
				<img src="../assets/media/send.png" alt="Send image" class="send-img"/>
			</button>
		</div>
	</div>
</div>
</template>
<style scoped>
.chat-box {
	height: calc(100vh - 200px);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 30px;
	padding: 30px;
}
.messages {
	display: flex;
	flex-direction: column;
	height: 100%;
	gap: 15px;
}
.message-box {
	box-sizing: border-box;

    display: flex;
    padding: 15px;
	background-color: var(--green-light);
	border-radius: 15px;
	gap: 15px;

    justify-content: space-between;
    align-items: center;
}
.input-message {
    background-color: inherit;
	height: 100%;
	width: 100%;
    border: none;
	font-size: 16px;
}
.send-button {
	background-color: var(--green-dark);
	padding: 15px;
	border-radius: 15px;
	border: none;
    box-shadow: 1px 1px 3px rgb(56, 56, 56);
}
.send-button:active {
    box-shadow: -1px -1px 3px rgb(56, 56, 56);
}
.send-img {
	width: 20px;
	height: 20px;
}
</style>
