<template lang="pug">
button(class='button') {{ label }}
</template>

<script setup lang="ts">
	type Props = {
		label: string;
	};

	const { label } = defineProps<Props>();
</script>

<style scoped>
	.button {
		cursor: pointer;
		padding: 8px 16px;
		font-weight: 600;
		color: #ffffff;
		background: #42b883;
		border-radius: 6px;
	}
</style>
