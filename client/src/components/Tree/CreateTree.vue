<template>
  <div class="tree-form">
    <h1>Create Tree</h1>
    <form @submit.prevent="createTree">
      <p>ชื่อ : <input type="text" v-model="tree.name"></p>
      <p>ประเภท : <input type="text" v-model="tree.type"></p>
      <p>ลักษณะ : <input type="text" v-model="tree.nature"></p>
      <p>พื้นที่ที่เจริญ : <input type="text" v-model="tree.prosperousarea"></p>
      <p>ที่อยู่ : <input type="text" v-model="tree.address"></p>
      <p>ประวัติ : <input type="text" v-model="tree.record"></p>
      <p>
        <button type="submit" class="create-button">Create Tree</button>
        <button @click="navigateTo('/tree')" class="back-button">กลับ</button>
      </p>
    </form>
  </div>
</template>
<script>
import TreeService from '../../services/TreeService'; 

export default {
  data() {
    return {
      tree: { 
        material: '',
        color: '',
        type: '',
        weight: '',
        size: '',
        brand: '',
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async createTree() { 
      try {
        await TreeService.post(this.tree); 
        this.$router.push({
          name: 'tree' 
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>

</style>

<style scoped>
.tree-form {
  padding: 30px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

p {
  margin: 10px 0;
}

input {
  width: 100%;
  padding: 5px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.create-button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

button.create-button:hover {
  background-color: #45a049;
}

button.back-button {
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

button.back-button:hover {
  background-color: #999;
}
</style>
