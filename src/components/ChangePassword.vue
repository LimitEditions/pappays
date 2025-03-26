<template>
  <div class="change-password">
    <Message v-if="showError" severity="error" class="message-error"
      >Lütfen bilgilerinizi kontrol ediniz.</Message
    >
    <form @submit.prevent="changePassword">
      <div class="input-group">
        <label>{{ isMobile ? "" : "E-Posta" }}</label>
        <InputText
          name="email"
          type="text"
          :placeholder="isMobile ? 'E-Posta' : ''"
          class="input"
        />
      </div>
      <hr />
      <div class="input-group">
        <label>{{ isMobile ? "" : "Yeni Şifre" }}</label>
        <Password
          v-model="newPassword"
          toggleMask
          :placeholder="isMobile ? 'Şifre' : ''"
          class="input"
          feedback
        />
      </div>
      <div class="input-group">
        <label>{{ isMobile ? "" : "Yeni Şifre Tekrar:" }}</label>
        <Password
          v-model="confirmPassword"
          toggleMask
          :placeholder="isMobile ? 'Şifre Tekrar' : ''"
          class="input"
        />
      </div>
      <hr />
      <Button
        label="Değiştir"
        severity="warn"
        class="button"
        @click="changePassword"
      >
        <template #icon>
          <img src="/image/Frame 137.svg" alt="enter" />
        </template>
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import InputText from "primevue/inputtext";
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
  window.addEventListener("resize", handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.change-password {
  height: 538px;
  border-radius: 20px;
  margin: 0 11vh;
  background-color: rgba(236, 240, 245, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
  padding: 40px;
}

form {
  height: 288px;
  margin: 0 12vw;
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
  width: 72%;
  height: 42px;
  border-radius: 18px;
  font-size: 14px;
  background-color: rgba(238, 237, 240, 1);
  color: rgba(105, 105, 105, 1);
}

.message-error {
  display: flex;
  justify-content: center;
  height: 57px;
  margin: 0 12vw;
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
  margin-left: 28%;
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  background-color: var(--btn-color);
  display: flex;
  justify-content: flex-start;
  padding-left: 3px;
  gap: 12px;
  font-size: 14px;
  line-height: 140%;
}

@media (min-width: 1250px) and (max-width: 1520px) {
  .change-password {
    margin: 0 5vw;
  }

  form,.message-error {
    margin: 0 7vw;
  }
}
@media (min-width: 1050px) and (max-width: 1250px) {
  .change-password {
    margin: 0 2vw;
  }

  .input {
    width: 70%;
  }

  form, .message-error {
    margin: 0 4vw;
  }

  .button {
    margin-left: 50%;
  }
}

@media (min-width: 768px) and (max-width: 1050px) {
  .change-password {
    margin: 0 2vw;
  }

  .input {
    width: 50%;
  }

  form, .message-error {
    margin: 0 2vw;
  }

  .button {
    margin-left: 50%;
  }
}

@media (max-width: 768px) {
  .change-password {
    margin: auto 5%;
    height: 386px;
    padding: 15px;
    gap: 11px;
  }

  form, .message-error {
    padding: 20px;
    margin: auto 2%;
  }

  .input {
    width: 100%;
  }

  .button {
    margin-left: 0;
    width: 100%;
  }
}

@media (prefers-color-scheme: dark) {
  .button {
    color: var(--text-light);
  }
}

@media (prefers-color-scheme: light) {
  .button {
    color: var(--text-light);
  }
}
</style>
