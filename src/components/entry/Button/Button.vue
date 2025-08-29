<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  disabled: false,
});

const classes = computed(() => ({
  button: true,
  [`button--${props.variant}`]: true,
  "button--disabled": props.disabled,
}));
</script>

<template>
  <button :class="classes" :disabled="disabled">
    {{ label }}
  </button>
</template>

<style scoped>
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button--primary {
  background-color: #007bff;
  color: white;
}

.button--secondary {
  background-color: #6c757d;
  color: white;
}

.button--danger {
  background-color: #dc3545;
  color: white;
}

.button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
