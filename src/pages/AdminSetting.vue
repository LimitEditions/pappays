<template>
  <div class="admin-page">
    <nav class="sidebar">
      <div class="sidebar__header">
        <div class="sidebar__logo">
          <img src="/image/Group 143.png" alt="Logo Pappays" />
          <h2 class="sidebar__headding">Pappays</h2>
        </div>
        <div class="burger">
          <img
            src="/public//image/photo.png"
            alt="photo"
            class="burger-photo"
          />
          <Button class="burgeer__btn" @click="toggleMobileMenu">
            <svg
              v-if="isMobileMenuOpen"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="15" fill="white" />
              <line
                x1="10"
                y1="13"
                x2="26"
                y2="13"
                stroke="#303030"
                stroke-width="2"
              />
              <line
                x1="10"
                y1="18"
                x2="26"
                y2="18"
                stroke="#303030"
                stroke-width="2"
              />
              <line
                x1="10"
                y1="23"
                x2="26"
                y2="23"
                stroke="#303030"
                stroke-width="2"
              />
            </svg>

            <svg
              v-else
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="15" fill="#303030" />
              <line
                x1="12.6362"
                y1="23.2929"
                x2="23.9499"
                y2="11.9792"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="13.0504"
                y1="12.2929"
                x2="24.3641"
                y2="23.6066"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </Button>
        </div>
      </div>
      <hr />
      <div :class="{ 'navbar__content--open': isMobileMenuOpen }">
        <NavBar :isMobileOpen="isMobileMenuOpen" />
      </div>
    </nav>
    <main class="content">
      <div class="headding">
        <div class="pass-change">
          <img src="/image/Admin_photo.svg" alt="admin photo" />
          <h2 class="headding-title">Yönetici Şifresini Değiştirme</h2>
        </div>
        <div class="admin">
          <div class="admin__photo">
            <img src="/image/photo.png" alt="photo" />
            <p>
              Kuzey (justpayhizlipp)<span style="display: block; opacity: 0.5"
                >36341</span
              >
            </p>
          </div>
          <img src="/image/setting.svg" alt="setting" />
        </div>
      </div>
      <hr />
      <div class="changepass-container">
        <ChangePassword />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChangePassword from "../components/ChangePassword.vue";
import NavBar from "../components/NavBar.vue";

const isMobileMenuOpen = ref(true);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
.admin-page {
  padding: 30px;
  display: flex;
  min-height: 100vh;
  gap: 30px;
}

/* Стили для боковой панели */
.sidebar {
  width: 277px;
  background: rgba(162, 162, 162, 0.25);
  padding: 8px 20px;
  border-radius: 20px;
}

.sidebar__logo {
  display: flex;
  align-items: center;
}

.sidebar__headding {
  color: var(--text-dark);
  font-size: 30px;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

.navbar__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.navbar__content--open {
  display: flex;
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
  border-radius: 25px;
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
  margin: 3px 5px 19px 5px;
  display: flex;
  justify-content: space-between;
}

.headding-title {
  color: var(--text-ligh);
  opacity: 0.5;
}

.pass-change {
  display: flex;
  align-items: center;
  gap: 16px;
}

.admin {
  width: 242px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 5px 15px 3px 3px;
}

.admin p {
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
}

.admin span {
  font-weight: 400;
}

.admin__photo {
  display: flex;
  gap: 10px;
  align-items: center;
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

/* Burger */
.burger {
  display: none;
}

.burgeer__btn {
  border: none;
  background: none;
}

/* Адаптив под мобильные устройства */
@media (max-width: 768px) {
  .admin-page {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sidebar {
    width: 100%;
    height: 42px;
    padding: 0;
  }

  .sidebar hr {
    display: none;
  }

  .sidebar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3px;
  }

  .sidebar__logo img {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
  }

  .sidebar__headding {
    font-size: 20px;
  }

  .burger {
    display: flex;
    gap: 10px;
  }

  .burger-photo {
    width: 36px;
    height: 36px;
  }

  .content {
    padding: 15px;
  }

  .headding {
    margin: 0;
  }

  .headding-title {
    font-weight: 600;
    font-size: 20px;
  }

  .pass-change {
    margin-bottom: 15px;
  }

  .changepass-container {
    margin-top: 15px;
  }

  .change-password {
    gap: 14px;
  }

  .admin {
    display: none;
  }

  .message-error {
    height: 54px;
  }

  @media (prefers-color-scheme: dark) {
    .sidebar__headding {
      color: var(--text-ligh);
    }
  }

  @media (prefers-color-scheme: light) {
    .sidebar__headding {
      color: var(--text-dark);
    }
  }
}
</style>
