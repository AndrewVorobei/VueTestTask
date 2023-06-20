<template>
  <div class="inventory">
    <div class="side">
      <div class="sideBg"></div>
      <div class="sceletons"></div>
    </div>
    <div class="main"></div>
    <div class="footer"></div>
  </div>
</template>

<script setup></script>

<style>
.inventory {
  width: 660px;
  height: 849px;
  display: flex;
}

.side {
  width: 236px;
  height: 500px;
  border-radius: 12px;
  background-color: #262626;
  display: flex;
  flex-direction: column;
}

.sideBg {
  background-image: url("../src/assets/ImgBlur.png");
  background-position: center;
  background-repeat: no-repeat;
  width: 208px;
  height: 236px;
  margin-top: 18px;
  margin-left: 14px;
  margin-right: 14px;
}
</style>
