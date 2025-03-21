<template>
  <div class="admin-page">
    <nav class="sidebar">
      <div class="sidebar__logo">
        <img src="/image/Group 143.png" alt="Logo Pappays" />
        <h2 class="sidebar__headding">Pappays</h2>
      </div>
      <hr/>
      <NavBar class="navbar"/>
    </nav>

    <main class="content">
      <h1>Yönetici Şifresini Değiştirme</h1>
      <form @submit.prevent="changePassword">
        <Message v-if="showError" severity="error"
          >Lütfen bilgilerinizi kontrol ediniz.</Message
        >
        <div class="input-group">
          <label>E-Posta</label>
          <InputText v-model="email" type="email" class="p-inputtext-sm" />
        </div>
        <div class="input-group">
          <label>Yeni Şifre</label>
          <Password
            v-model="newPassword"
            toggleMask
            class="p-inputtext-sm"
            feedback
          />
        </div>
        <div class="input-group">
          <label>Yeni Şifre Tekrar: </label>
          <Password
            v-model="confirmPassword"
            toggleMask
            class="p-inputtext-sm"
          />
        </div>
        <Button type="submit" label="Değiştir" severity="warn" rounded>
          <img src="/image/Frame 137.svg" alt="Save" />]
          <p>Değiştir</p>
        </Button>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Message from "primevue/message";
import NavBar from "../components/NavBar.vue";

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
.admin-page {
  margin: 30px;
  display: flex;
  min-height: 100vh;
  gap: 30px;
}

/* Стили для боковой панели */
.sidebar {
  width: 277px;
  background: rgba(162, 162, 162, 0.25);
  padding: 20px;
  border-radius: 20px;
}

.sidebar__logo {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.sidebar__headding {
  color: var(--text-dark);
  font-size: 30px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

/* Стили для блока с формой */
.content {
  flex-grow: 1;
  background-size: 100% 100%;
  background-image: radial-gradient(
      60% 80% at 50% 42%,
      #02d1ffd4 0%,
      #073aff00 100%
    ),
    radial-gradient(113% 91% at 17% -2%, #000b2bff 0%, #000b2b00 99%),
    radial-gradient(180% 94% at 50% 100%, #01c2dbeb 22%, #ff000000 99%),
    radial-gradient(240% 50% at 50% 100%, #00ffa2ff 0%, #ff000000 59%),
    radial-gradient(140% 94% at 50% 100%, #0064ffff 0%, #ff000000 100%),
    radial-gradient(0% 0% at 0% 0%, #016dffff 0%, #00254fff 100%);
  padding: 20px;
  border-radius: 20px;
  color: white;
}

/* Стили для формы */
form {
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: none;
}

button {
  background: #0288d1;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #026ca0;
}
</style>
