<template>
    <div class="change-password">
        <Message v-if="showError" severity="error" class="message-error">Lütfen bilgilerinizi kontrol ediniz.</Message>
        <form @submit.prevent="changePassword">
            <div class="input-group">
                <label>E-Posta</label>
                <InputText name="email" type="text" placeholder="Email" class="input" />
            </div>
            <hr />
            <div class="input-group">
                <label>Yeni Şifre</label>
                <Password v-model="newPassword" toggleMask class="input" feedback />
            </div>
            <div class="input-group">
                <label>Yeni Şifre Tekrar: </label>
                <Password v-model="confirmPassword" toggleMask class="input" />
            </div>
            <hr />
            <Button label="Değiştir" size="large" class="button" @click="changePassword">
                <template #icon>
                    <img src="/image/Frame 137.svg" alt="enter" />
                </template>
            </Button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
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
    gap: 20px;
}

form {
    width: 645px;
    height: 288px;
    margin: 0 auto;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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

.input {
    width: 446px;
    padding: 11px 20px;
    border-radius: 18px;
    font-size: 14px;
    background-color: rgba(238, 237, 240, 1);
    display: flex;
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
    width: 132px;
    height: 42px;
    margin-left: 150px;
    border-radius: 18px;
    background-color: var(--btn-color);
    display: flex;
    justify-content: flex-start;
    padding-left: 3px;
    gap: 12px;
}
</style>