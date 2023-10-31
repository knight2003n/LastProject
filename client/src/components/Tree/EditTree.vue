<template>
  <div>
    <h1 class="edit-title">แก้ไขข้อมูลต้นไม้</h1>
    <form @submit.prevent="editTree" class="edit-form">
      <p>
        ชื่อ : <input type="text" v-model="tree.name" class="input-field">
      </p>
      <p>
        ประเภท : <input type="text" v-model="tree.type" class="input-field">
      </p>
      <p>
        ลักษณะ : <input type="text" v-model="tree.nature" class="input-field">
      </p>
      <p>
        พื้นที่ที่เจริญ : <input type="text" v-model="tree.prosperousarea" class="input-field">
      </p>
      <p>
        ที่อยู่ : <input type="text" v-model="tree.address" class="input-field">
      </p>
      <p>
        ประวัติ : <input type="text" v-model="tree.record" class="input-field">
      </p>
      <p>
        <button type="submit" class="edit-button">แก้ไขต้นไม้</button>
        <button @click="navigateTo('/tree')" class="back-button">กลับ</button>
      </p>
    </form>
    <hr>
    <div class="tree-details">
      <p>ชื่อ: {{ tree.name }}</p>
      <p>ประเภท: {{ tree.type }}</p>
      <p>ลักษณะ: {{ tree.nature }}</p>
      <p>พื้นที่ที่เจริญ: {{ tree.prosperousarea }}</p>
      <p>ที่อยู่: {{ tree.address }}</p>
      <p>ประวัติ: {{ tree.record }}</p>
    </div>
  </div>
</template>

<script>
import TreeService from '../../services/TreeService';

export default {
  data() {
    return {
      tree: {
        name: '',
        type: '',
        nature: '',
        prosperousarea: '',
        address: '',
        record: '',
      },
    };
  },
  methods: {
    async editTree() {
      try {
        await TreeService.put(this.tree);
        this.$router.push({
          name: 'tree',
        });
      } catch (error) {
        console.error(error);
      }
    },
    async fetchTree() {
      try {
        let treeId = this.$route.params.treeId;
        this.tree = (await TreeService.show(treeId)).data;
      } catch (error) {
        console.log(error);
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  created() {
    this.fetchTree();
  },
};
</script>

<style scoped>
.edit-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

.input-field {
  width: 95%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.edit-form {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 20px auto;
  max-width: 400px;
}

.edit-button {
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.edit-button:hover {
  background-color: #0056b3;
}

.back-button {
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.back-button:hover {
  background-color: #c9302c;
}

.tree-details {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 20px auto;
  max-width: 400px;
}

p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}
</style>
