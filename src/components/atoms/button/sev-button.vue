<script setup lang="ts">
import type { SevButtonProps } from './sev-button.types'

defineProps<SevButtonProps>();
</script>

<template>
  <button>
    <slot />
  </button>
</template>