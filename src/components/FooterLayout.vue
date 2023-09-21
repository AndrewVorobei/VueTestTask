<script setup></script>
<template>
    <div class="footer">
        <div class="footer_sceleton"></div>
        <button class="footerBtn">
            <img src="@/assets/footer-img/close-btn.svg" alt="">
        </button>
    </div>
</template>
<style lang="scss" scoped>
.footer {
    display: flex;
    max-width: 785px;
    max-height: 72px;
    background: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 12px;

    .footer_sceleton {
        width: 699px;
        height: 36px;
        margin: 18px 36px 18px 18px;
        border-radius: 12px;
        background: linear-gradient(#3c3c3c 0%, #444444 51.04%, #333333 100%);
    }

    .footerBtn {
        margin: 8px 8px 0 0;
        display: flex;
        width: 24px;
        height: 24px;
        background: none;
        border: none;
    }
}
</style>