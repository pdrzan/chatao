<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
	<div class="header-chat">
		<div class="header-contact">
			<img src="../assets/media/user.png" alt="Contact photo" class="contact-photo" />
			<div class="contact-name">Contato</div>
		</div>
		<RouterLink to="/chats/">
			<img src="../assets/media/close.png" alt="Close image" class="close-img" />
		</RouterLink>
	</div>
</template>
<style scoped>
.header-chat {
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	border-bottom: 1px solid rgba(0, 0, 0, 50%);
	box-sizing: border-box;
}

.header-contact {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-size: 24px;
}

.contact-photo {
	width: 40px;
}

.close-img {
	width: 40px;
}
</style>
