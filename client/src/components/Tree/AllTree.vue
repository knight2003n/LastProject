<template>
  <div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <h2 style="font-size: 50px; color: #333;">Tree List</h2>
      <p style="margin-bottom: 10px;">
        <button @click="logout" class="logout-button">
          Logout
        </button>
      </p>
      
      <button style="margin-bottom: 10px;" @click="navigateTo('/users')" class="member-button">
        รายชื่อสมาชิก
      </button>
      <button @click="navigateTo('/tree/create')" class="add-tree-button">
        เพิ่มต้นไม้
      </button>
      <h4 style="font-size: 18px; color: #555;">จำนวนต้นไม้: {{ treeItems.length }}</h4>
      <div v-for="tree in treeItems" :key="tree.id" class="tree-item">
        <p>Tree ID: {{ tree.id }}</p>
        <p>ชื่อ: {{ tree.name }}</p>
        <p>ประเภท: {{ tree.type }}</p>
        <p>ลักษณะ: {{ tree.nature }}</p>
        <p>พื้นที่ที่เจริญ: {{ tree.prosperousarea }}</p>
        <p>ที่อยู่: {{ tree.address }}</p>
        <p>ประวัติ: {{ tree.record }}</p>
        <p>
          <button @click="navigateTo('/tree/' + tree.id)" class="tree-action-button view-button">
            ดูข้อมูลต้นไม้
          </button>
          <button @click="navigateTo('/tree/edit/' + tree.id)" class="tree-action-button edit-button">
            แก้ไขข้อมูลต้นไม้
          </button>
          <button @click="deleteTree(tree)" class="tree-action-button delete-button">
            ลบข้อมูลต้นไม้
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TreeService from '@/services/TreeService';

export default {
  data() {
    return {
      treeItems: [],
    };
  },
  async created() {
    this.treeItems = (await TreeService.index()).data;
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
    async deleteTree(tree) {
      let result = confirm('Do you want to delete?');
      if (result) {
        try {
          await TreeService.delete(tree);
          this.refreshData();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async refreshData() {
      this.treeItems = (await TreeService.index()).data;
    },
  },
};
</script>

<style scoped>
/* TreeList.css */
h2 {
  font-size: 24px;
  color: #333;
}

button.logout-button {
  background-color: #ff5733;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

button.member-button {
  background-color: #4286f4;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.add-tree-button {
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

h4 {
  font-size: 18px;
  color: #555;
}

.tree-item {
  background-color: #f5f5f5;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

button.tree-action-button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  padding: 5px 10px;
}

button.view-button {
  background-color: #4286f4;
}

button.edit-button {
  background-color: #4caf50;
}

button.delete-button {
  background-color: #ff5733;
}
</style>