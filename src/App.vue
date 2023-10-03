<script setup>
import MainLayout from "@/components/main/MainLayout.vue";
import LeftSide from "@/components/Left/LeftSide.vue";
import FooterLayout from "@/components/Footer/FooterLayout.vue";
</script>

<template>
  <div class="page">
    <div class="inventory">
      <LeftSide />
      <MainLayout />
    </div>
    <FooterLayout />
  </div>
</template>

<style>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 849px;
  max-height: 660px;
  gap: 24px;
}

.inventory {
  display: flex;
  gap: 24px;
}
</style>
