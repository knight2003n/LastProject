<template>
  <div>
    <div class="tree-details">
      <h1>Get Tree By Id</h1>
      <p>Tree ID: {{ tree.id }}</p>
        <p>ชื่อ: {{ tree.name }}</p>
        <p>ประเภท: {{ tree.type }}</p>
        <p>ลักษณะ: {{ tree.nature }}</p>
        <p>พื้นที่ที่เจริญ: {{ tree.prosperousarea }}</p>
        <p>ที่อยู่: {{ tree.address }}</p>
        <p>ประวัติ: {{ tree.record }}</p>
      <p><button @click="navigateTo('/tree')" class="back-button">กลับ</button></p>
    </div>
  </div>
</template>

<script>
import TreeService from '@/services/TreeService';

export default {
  data() {
    return {
      tree: null
    };
  },
  async created() {
    try {
      let treeId = this.$route.params.treeId;
      this.tree = (await TreeService.show(treeId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.tree-details {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 20px auto;
  max-width: 400px;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}

.back-button {
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
