import { defineStore } from 'pinia';
import { ref } from 'vue';

export const user = defineStore('user', () => {
    const user = ref([
      { id: 1, name: 'Иван', secondName: 'Иванов' },
      { id: 2, name: 'Сергей', secondName: 'Васильев' }
    ]);
  
    const addUser = (user:any) => {
        user.value.push(user);
    };
  
    return { user, addUser };
  });