<script setup>
</script>
<template>
<div class="header">
	<div class="logo">
		<img class="logo-img" src="./../assets/media/logo.png" alt="chatao's logo"/>
		<div class="logo-text"> Chatão </div>
	</div>
	<div class="profile">
		<img class="profile-photo" src="./../assets/media/user.png" alt="user's photo"/>
		<div class="profile-text"> Visualizar Perfil </div>
	</div>
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
.logo {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
}
.logo-text {
	font-size: 32px;
	font-weight: 700;
    text-shadow: 1px 1px 3px rgb(56, 56, 56);
}
.logo-img {
	width: 84px;
}
.profile {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
}
.profile-text {
 	color: var(--green-dark);
	font-size: 32px;
	font-weight: 700;
}
</style>
