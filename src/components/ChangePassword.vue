<template>
    <div class="change-password">
        <Message v-if="showError" severity="error" class="message-error">Lütfen bilgilerinizi kontrol ediniz.</Message>
        <form @submit.prevent="changePassword">
            <div class="input-group">
                <label>{{ isMobile ? '' : 'E-Posta' }}</label>
                <InputText name="email" type="text" :placeholder="isMobile ? 'E-Posta' : ''" class="input" />
            </div>
            <hr />
            <div class="input-group">
                <label>{{ isMobile ? '' : 'Yeni Şifre' }}</label>
                <Password v-model="newPassword" toggleMask :placeholder="isMobile ? 'Şifre' : ''" class="input" feedback />
            </div>
            <div class="input-group">
                <label>{{ isMobile ? '' : 'Yeni Şifre Tekrar:' }}</label>
                <Password v-model="confirmPassword" toggleMask :placeholder="isMobile ? 'Şifre Tekrar' : ''" class="input" />
            </div>
            <hr />
            <Button label="Değiştir" severity="warn" class="button" @click="changePassword">
                <template #icon>
                    <img src="/image/Frame 137.svg" alt="enter" />
                </template>
            </Button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import InputText from 'primevue/inputtext';
import Password from "primevue/password";
import Message from "primevue/message";
import Button from "primevue/button";

const email = ref("");
const newPassword = ref("");
const confirmPassword = ref("");
const showError = ref(false);

const changePassword = () => {
    if (!passwordsMatch.value) {
        showError.value = true;
        return;
    }
    showError.value = false;
    console.log("Изменение пароля для:", email.value);
    // Логика отправки нового пароля на сервер
};

const passwordsMatch = computed(() => {
    return newPassword.value === confirmPassword.value;
});

const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value <= 768);

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.change-password {
    width: 1073px;
    height: 538px;
    border-radius: 20px;
    padding: 40px;
    background-color: rgba(236, 240, 245, 1);
    display: flex;
    flex-direction: column;
}

form {
    width: 645px;
    height: 288px;
    margin: auto;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    background-color: var(--text-light);
}

.input-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

label {
    font-weight: 700;
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
}

:deep(.p-password-toggle-mask-icon) {
    width: 20px;
    height: 18px;
}

.input {
    width: 446px;
    height: 42px;
    border-radius: 18px;
    font-size: 14px;
    background-color: rgba(238, 237, 240, 1);
    color: rgba(147, 147, 148, 1);
}

.message-error {
    width: 645px;
    height: 57px;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 19px;
    background-color: rgba(253, 217, 215, 1);
    color: rgba(127, 35, 28, 1);
}

.p-icon {
    right: 15px !important;
    top: 50%;
    transform: translateY(-50%);
}

.button {
    width: 123px;
    height: 42px;
    margin-left: 150px;
    margin-top: 10px;
    border-radius: 18px;
    background-color: var(--btn-color);
    display: flex;
    justify-content: flex-start;
    padding-left: 3px;
    gap: 12px;
    font-size: 14px;
    line-height: 140%;
}

@media (max-width: 768px) {

    .change-password {
        width: 343px;
        height: 386px;
        padding: 15px;
        gap: 11px;
    }

    form {
        width: 313px;
        padding: 20px;
    }

    .message-error {
        width: 313px;
    }

    .button {
        margin-left: 0;
        width: 100%;
    }
}

@media (prefers-color-scheme: dark) {
    .button {
        color: var(--text-ligh);
    }
}

@media (prefers-color-scheme: light) {
    .button {
        color: var(--text-dark);
    }
}
</style>