<script setup></script>
<template>
    <div class="side">
        <div class="sideBg"></div>
        <div class="skeletons">
            <div class="skeletonStub"></div>
            <div class="skeletonContent"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.side {
    max-width: 236px;
    max-height: 500px;
    border-radius: 12px;
    background: #262626;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 14px 24px;
    border: 1px solid #4D4D4D;
    gap: 20px;

    .sideBg {
        background: url("@/assets/ImgBlur.png");

        width: 208px;
        height: 236px;
    }

    .skeletons {
        background-image: url("@/assets/Skeletons.png");
        background-position: center;
        background-repeat: no-repeat;
        width: 198px;
        height: 198px;
    }
}
</style>