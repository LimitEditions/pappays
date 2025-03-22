<template>
  <div :class="{'navbar': isVisible, 'navbar--visible': !isVisible}">
    <PanelMenu :model="item">
      <template #item="{ item, props }">
        <a v-ripple class="navbar__item" v-bind="props.action" :class="{ 'navbar__item--active': isActive(item) }"
          @click="toggleMenu(item)">
          <div class="navbar__item-flex">
            <div v-if="item.icon" class="navbar__item_icon" :class="{ 'navbar__item_icon--active': isActive(item) }">
              <img  :src="item.icon" alt="icon" class="menu-icon" />
            </div>
            <span class="navbar__item_label" :class="{ 'navbar__item_label--active': isActive(item) }">{{
              item.label }}</span>
          </div>
          <i v-if="item.items" :class="isActive(item) ? 'pi pi-minus' : 'pi pi-plus'"></i>
        </a>
      </template>
    </PanelMenu>
    <div class="navbar__settings">
      <hr />
      <Button label="Şifremi Değiştir" severity="warn" class="button">
        <template #icon>
          <img src="../../public/image/Şifremi Değiştir_btn.svg" alt="enter" />
        </template>
      </Button>
      <Button label="Cıkış Yap" variant="text" class="button_exit">
        <template #icon>
          <img src="../../public/image/Cıkış Yap.svg" alt="enter" />
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount,  defineProps } from "vue";
import type { MenuItem } from "primevue/menuitem"
import PanelMenu from "primevue/panelmenu";
import Button from "primevue/button";

const windowWidth = ref(window.innerWidth);
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth);
});

const isVisible = computed(() => {
  return windowWidth.value > 768 ? true : props.isMobileOpen;
});

const activeItem = ref<MenuItem | null>(null);
const props = defineProps<{ isMobileOpen: boolean }>();

const isActive = (item: MenuItem) => {
  return JSON.stringify(activeItem.value) === JSON.stringify(item);
};

const toggleMenu = (item: MenuItem) => {
  activeItem.value = isActive(item) ? null : item;
};

const item: MenuItem[] = [
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
  min-height: 80vh;
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

@media (max-width: 768px) {
  .navbar {
    display: none;
  }
  .navbar--visible{
    background: rgba(238, 237, 240, 1);
    position: absolute;
    right: 30px;
    display: block;
    z-index: 1;
    padding: 10px;
    border-radius: 15px;
  }

  .navbar__toggle {
    display: block;
  }

  .navbar__content {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
}
</style>
