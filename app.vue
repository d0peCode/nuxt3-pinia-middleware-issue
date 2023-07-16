<template>
  <pre>token: {{ store.token }}</pre>
</template>
<script setup lang="ts">
import {useStore} from "~/store/useStore";
const store = useStore()
</script>
