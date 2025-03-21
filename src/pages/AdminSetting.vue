<template>
  <div class="admin-page">
    <nav class="sidebar">
      <div class="sidebar__logo">
        <img src="/image/Group 143.png" alt="Logo Pappays" />
        <h2 class="sidebar__headding">Pappays</h2>
      </div>
      <hr />
      <NavBar />
    </nav>
    <main class="content">
      <div class="headding">
        <div class="pass-change">
          <img src="/image/Admin_photo.svg" alt="admin photo">
          <h2 class="headding-title">Yönetici Şifresini Değiştirme</h2>
        </div>
        <div class="admin">
          <img src="/image/photo.png" alt="photo">
          <p>Kuzey (justpayhizlipp)<span style="display: block; opacity:0.5">36341</span></p>
          <img src="/image/setting.svg" alt="setting">
        </div>
      </div>
      <hr />
      <div class="changepass-container">
        <ChangePassword/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ChangePassword from "../components/ChangePassword.vue";
import NavBar from "../components/NavBar.vue";
</script>

<style scoped>
.admin-page {
  padding: 30px;
  display: flex;
  height: 100vh;
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

.sidebar a {
  color: white;
  text-decoration: none;
}

/* Стили для блока с формой */
.content {
  flex-grow: 1;
  background-size: 100% 100%;
  background-image: radial-gradient(60% 80% at 50% 42%,
      #02d1ffd4 0%,
      #073aff00 100%),
    radial-gradient(113% 91% at 17% -2%, #000b2bff 0%, #000b2b00 99%),
    radial-gradient(180% 94% at 50% 100%, #01c2dbeb 22%, #ff000000 99%),
    radial-gradient(240% 50% at 50% 100%, #00ffa2ff 0%, #ff000000 59%),
    radial-gradient(140% 94% at 50% 100%, #0064ffff 0%, #ff000000 100%),
    radial-gradient(0% 0% at 0% 0%, #016dffff 0%, #00254fff 100%);
  padding: 20px;
  border-radius: 20px;
  color: white;
}

.changepass-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 90px;
}

.headding {
  display: flex;
  justify-content: space-between;
  margin: 25px;
}

.headding-title {
  line-height: 140%;
color: var(--text-ligh);
opacity: 0.5;
}

.pass-change {
  display: flex;
  align-items: center;
  gap: 16px;
}

.admin {
  display: flex;
  align-items: center;
  gap: 10px;
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


</style>
