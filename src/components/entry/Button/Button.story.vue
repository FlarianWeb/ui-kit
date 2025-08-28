<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <Story title="Button" :layout="{ type: 'grid', width: 300 }">
    <Variant title="Primary">
      <Button label="Primary Button" />
    </Variant>
    <Variant title="Secondary">
      <Button label="Secondary Button" variant="secondary" />
    </Variant>
    <Variant title="Danger">
      <Button label="Danger Button" variant="danger" />
    </Variant>
    <Variant title="Disabled">
      <Button label="Disabled Button" :disabled="true" />
    </Variant>
  </Story>
</template>
