<template>
  <div class="navbar">
    <div class="navbar__content">
      <PanelMenu :model="items">
        <template #item="{ item, props, hasSubmenu }">
          <a v-ripple class="navbar__item" v-bind="props.action" :class="{ 'navbar__item--active': isActive(item) }"
            @click="toggleMenu(item)">
            <div class="navbar__item-flex">
              <div class="navbar__item_icon" :class="{ 'navbar__item_icon--active': isActive(item) }">
                <img :src="item.icon" alt="icon" class="menu-icon" />
              </div>
              <span class="navbar__item_label" :class="{ 'navbar__item_label--active': isActive(item) }">{{
                item.label }}</span>
            </div>
            <i v-if="hasSubmenu" :class="isActive(item) ? 'pi pi-minus' : 'pi pi-plus'"></i>
          </a>
        </template>
      </PanelMenu>
      <div class="navbar__settings">
        <hr />
        <Button label="Şifremi Değiştir" size="large" class="button">
          <template #icon>
            <img src="../../public/image/Şifremi Değiştir_btn.svg" alt="enter" />
          </template>
        </Button>
        <Button label="Cıkış Yap" size="large" class="button_exit">
          <template #icon>
            <img src="../../public/image/Cıkış Yap.svg" alt="enter" />
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { MenuItem } from "primevue/menuitem"
import PanelMenu from "primevue/panelmenu";
import Button from "primevue/button";

const activeItem = ref<MenuItem | null>(null);

const isActive = (item: MenuItem) => {
  return JSON.stringify(activeItem.value) === JSON.stringify(item);
};

const toggleMenu = (item: MenuItem) => {
  activeItem.value = isActive(item) ? null : item;
};

const items: MenuItem[] = [
  {
    label: "Dashboard",
    icon: "/image/Dashboard.svg",
    items: [
      { label: "Sözleşmeli Hesaplar" },
      { label: "Bankalı Hesaplar" },
      { label: "Onaysız Hesaplar" },
      { label: "Çekime Kapalılar" },
      { label: "Hesap Ekle" },
      { label: "Yeni Hesap Aç" },
      { label: "Çekim Hareketleri" },
      { label: "Çekim Oluştur" },
      { label: "Hesap Kategorileri" },
    ],
  },
  {
    label: "PP Hesaplar",
    icon: "/image/PP Hesaplar.svg",
    items: [
      { label: "Sözleşmeli Hesaplar" },
      { label: "Bankalı Hesaplar" },
      { label: "Onaysız Hesaplar" },
      { label: "Çekime Kapalılar" },
      { label: "Hesap Ekle" },
      { label: "Yeni Hesap Aç" },
      { label: "Çekim Hareketleri" },
      { label: "Çekim Oluştur" },
      { label: "Hesap Kategorileri" },
    ],
  },
  {
    label: "PP Sorunlular",
    icon: "/image/PP Sorunlular.svg",
    items: [
      { label: "Sözleşmeli Hesaplar" },
      { label: "Bankalı Hesaplar" },
      { label: "Onaysız Hesaplar" },
      { label: "Çekime Kapalılar" },
      { label: "Hesap Ekle" },
      { label: "Yeni Hesap Aç" },
      { label: "Çekim Hareketleri" },
      { label: "Çekim Oluştur" },
      { label: "Hesap Kategorileri" },
    ],
  },
  {
    label: "Taşıma İstatistikleri",
    icon: "/image/Taşıma İstatistikleri.svg",
  },
  {
    label: "İstatistik",
    icon: "/image/İstatistik.svg",
  },
  {
    label: "Telegram Bildirimleri",
    icon: "/image/Telegram Bildirimleri.svg",
  },
  {
    label: "Kullanıcılar",
    icon: "/image/Kullanıcılar.svg",
  },
  {
    label: "Şifremi Değiştiri",
    icon: "/image/Şifremi Değiştir.svg",
  },
  {
    label: "2FA Güvenlik",
    icon: "/image/2FA Güvenlik.svg",
  },
  {
    label: "SSS",
    icon: "/image/SSS.svg",
  },
];
</script>

<style scoped>
.navbar {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 80vh;
}

.navbar__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.navbar__item {
  margin-bottom: 5px;
  width: 237px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.05);
  padding: 10px 15px 10px 8px;
  border-radius: 15px;
  gap: 10px;
}

.navbar__item--active {
  background: rgba(254, 106, 53, 1);
  color: white;
}

.navbar__item-flex {
  display: flex;
  gap: 10px;
}

.navbar__item_icon {
  width: 24px;
  height: 24px;
  background: rgba(0, 128, 201, 1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar__item_icon--active {
  background: white;
}

.navbar__item_icon--active img {
  filter: invert(42%) sepia(100%) saturate(1500%) hue-rotate(-10deg);
}

.navbar__item_label {
  color: var(--text-dark);
  font-weight: 600;
  font-size: 15px;
  line-height: 140%;
}

.navbar__item_label--active {
  color: var(--text-light);
}

.navbar__settings {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 5px;
}

.button {
  width: 237px;
  height: 42px;
  margin-top: 12px;
  border-radius: 15px;
  background-color: var(--btn-color);
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
  gap: 12px;
  color: var(--text-light);
}

.button_exit {
  width: 237px;
  height: 42px;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
  gap: 12px;
  color: var(--text-dark);
}
</style>
