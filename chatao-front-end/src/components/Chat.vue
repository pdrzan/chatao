<script setup>
import { onMounted, computed, ref, watch, onUnmounted } from 'vue';
import HeaderChat from './HeaderChat.vue'
import Message from './Message.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
	name: String,
})

const messages = ref([]);
const chatId = ref("");
const textMessage = defineModel();

onMounted(() => {
	const data = {
		userId_1: getCookie("userId"),
		userId_2: route.params.userId
	};
	fetch('/api/message/chat', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then((response) => {
			if (response.status !== 200) {
				alert("Não foi possível carregar a conversa.\nTente novamente.");
			} else {
				response.json()
					.then((messagesResponse) => {
						messages.value = messagesResponse.messages;
						chatId.value = messagesResponse.chatId;
					})
			}
		})
})

function sendMessage(event) {
	const data = {
		chatId: chatId.value,
		userId_whosent: getCookie("userId"),
		message: textMessage.value
	}
	fetch("/api/message", {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then((response) => {
			if (response.status != 200) {
				alert("Não foi possível mandar a mensagem.\nTente novamente,");
			} else {
				response.json()
					.then((message) => {
						textMessage.value = "";
						messages.value.push(message);
					})
			}
		})
}

function wasSent(message) {
	return message.userId_whosent === getCookie("userId");
}

const updateMessages = setInterval(() => {
	const data = {
		userId_1: getCookie("userId"),
		userId_2: route.params.userId
	};
	fetch('/api/message/chat', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then((response) => {
			if (response.status === 200) {
				response.json()
					.then((messagesResponse) => {
						messages.value = messagesResponse.messages;
					})
			}
		})
}, 500);

onUnmounted(() => {
	clearInterval(updateMessages);
})

watch(() => route.params.userId, (newId, oldId) => {

	messages.value = [];
	const data = {
		userId_1: getCookie("userId"),
		userId_2: newId
	};
	fetch('/api/message/chat', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
		.then((response) => {
			if (response.status !== 200) {
				alert("Não foi possível carregar a conversa.\nTente novamente.");
			} else {
				response.json()
					.then((messagesResponse) => {
						messages.value = messagesResponse.messages;
						chatId.value = messagesResponse.chatId;
					})
			}
		})
})
</script>
<template>
	<div class="chat">
		<HeaderChat />
		<div class="chat-box">
			<div class="messages">
				<template v-for="message in messages">
					<Message :text="message.message" :sent="wasSent(message)" />
				</template>
			</div>
			<div class="message-box">
				<textarea placeholder="Digite sua mensagem" class="input-message" v-model="textMessage" />
				<button class="send-button" @click="sendMessage">
					<img src="../assets/media/send.png" alt="Send image" class="send-img" />
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
	overflow-y: scroll;
	min-height: 1px;
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
