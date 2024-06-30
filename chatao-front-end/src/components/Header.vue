<script setup>
import router from '@/router';
import { RouterLink } from 'vue-router'
function sair() {
	fetch(`/api/usersLogged/${getCookie("userId")}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	})
		.then((response) => {
			if (response.status !== 200) {
				alert("Não foi possível finalizar a sua sessão.\nTente novamente");
			} else {
				document.cookie = "userId=; path=/";
				router.push({ path: "/" });
			}
		})
}
</script>
<template>
	<div class="header">
		<RouterLink class="logo-router" to="/chats">
			<div class="logo">
				<img class="logo-img" src="./../assets/media/logo.png" alt="chatao's logo" />
				<div class="logo-text">Chatão</div>
			</div>
		</RouterLink>
		<span class="right-header">
			<RouterLink class="profile" to="/profile">
				<img class="profile-photo" src="./../assets/media/user.png" alt="user's photo" />
				<div class="profile-text">Visualizar Perfil</div>
			</RouterLink>
			<RouterLink class="quit" to="/" @click="sair">
				<img class="quit-photo" src="./../assets/media/quit.png" alt="quit photo" />
				<div class="quit-text">Sair</div>
			</RouterLink>
		</span>
	</div>
</template>
<style scoped>
.header {
	width: 100%;
	box-sizing: border-box;
	height: 100px;
	padding: 0 55px;

	background-color: var(--green-light);

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo-router {
	text-decoration: none;
	color: inherit;
}

.logo {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
}

.logo-text {
	font-size: 32px;
	font-weight: 700;
	text-shadow: 1px 1px 1.5px rgb(56, 56, 56);
}

.logo-img {
	width: 84px;
}

.right-header {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 25px;
	justify-content: center;
}

.quit {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	text-decoration: none;
}

.quit-photo {
	width: 40px;
}

.quit-text {
	color: var(--green-dark);
	font-size: 32px;
	font-weight: 700;
}

.quit-text:hover {
	text-decoration: underline;
}

.profile {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	text-decoration: none;
}

.profile-photo {
	width: 40px;
}

.profile-text {
	color: var(--green-dark);
	font-size: 32px;
	font-weight: 700;
}

.profile-text:hover {
	text-decoration: underline;
}
</style>
