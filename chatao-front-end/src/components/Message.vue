<script setup>
const props = defineProps({
	text: String,
	sent: Boolean
})
</script>
<template>
	<div class="message" :sent>
		<div class="box-message">
			<a href="#" class="down-arrow-link">
				<img src="../assets/media/arrow-down.png" alt="White down arrow" class="down-arrow-img" />
			</a>
			<span>{{ text }}</span>
		</div>
	</div>
</template>
<style scoped>
.message {
	display: flex;
	align-items: center;
	color: white;
}

.message[sent="true"] {
	justify-content: end;
}

.down-arrow-img {
	width: 20px;
}

.down-arrow-link {
	height: 20px;
}

.box-message {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	padding: 10px 15px;
	border-radius: 10px;
	background-color: var(--green-dark);
	box-shadow: 1px 1px 3px rgb(56, 56, 56);
}
</style>
