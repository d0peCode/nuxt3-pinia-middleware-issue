<template>
  <pre>token: {{ store.token }}</pre>
  <button @click="logout">logout</button>
</template>
<script setup lang="ts">
import {useStore} from "~/store/useStore";
const store = useStore()
const logout = () => {
  navigateTo('/')
}
</script>
