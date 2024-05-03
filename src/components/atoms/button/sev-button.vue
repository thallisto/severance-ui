<script setup lang="ts">
import type { SevButtonProps } from './sev-button.types';

defineProps<SevButtonProps>();
</script>

<template>
  <button class="bg-pink-500">
    <slot />
  </button>
</template>
