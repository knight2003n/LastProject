<template>
  <div class="container">
    <div class="header">
      <button @click="navigateTo('/Tree')" class="menu-button">Tree List</button>
      <button @click="logout" class="menu-button">Logout</button>
    </div>
    <h1 class="title">รายชื่อสมาชิก</h1>
    <div>
      <h2 class="user-count">จำนวนผู้ใช้ {{ users.length }}</h2>
    </div>
    <div class="user-list">
      <div v-for="i in users" :key="i.id" class="user-card">
        <div class="user-info">
          <div class="user-detail">ชื่อ {{ i.name }}</div>
          <div class="user-detail">นามสกุล {{ i.lastname }}</div>
          <div class="user-detail">Email {{ i.email }}</div>
        </div>
        <div class="user-actions">
          <button @click="navigateTo('/user/' + i.id)" class="action-button">ดูข้อมูลผู้ใช้</button>
          <button @click="navigateTo('/user/edit/' + i.id)" class="action-button">แก้ไข</button>
          <button @click="deleteUser(i)" class="action-button">ลบผู้ใช้</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService';

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'login',
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm('Want to delete?');
      if (result) {
        try {
          await UsersService.delete(user);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      try {
        this.users = (await UsersService.index()).data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    this.refreshData();
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  background-color: #007bff;
  padding: 10px 20px;
  width: 100%;
}

.menu-button {
  background-color: #fff;
  color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  margin: 0 10px;
}

.title {
  font-size: 24px;
  margin: 20px 10px;
}

.user-count {
  font-size: 18px;
  margin: 0 10px;
}

.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: inline-block;
  width: 100%;
}

.user-detail {
  margin: 5px 0;
}

.user-actions {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.action-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  margin: 5px;
}
</style>

