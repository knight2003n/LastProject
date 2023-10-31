<template>
    <div>
      <div class="user-details">
        <h1>ชื่อผู้ใช้</h1>
        <p>User ID: {{ user ? user.id : 'N/A' }}</p>
        <p>ชื่อ-นามสกุล: {{ user ? user.name + ' ' + user.lastname : 'N/A' }}</p>
        <p>Email: {{ user ? user.email : 'N/A' }}</p>
        
  
        <p>
          <button v-on:click="navigateTo('/users/')">กลับ</button>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import UsersService from '@/services/UsersService';
  
  export default {
    data() {
      return {
        user: null
      };
    },
    async created() {
      try {
        let userId = this.$route.params.userId;
        this.user = (await UsersService.show(userId)).data;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      }
    }
  };
  </script>
  
  <style scoped>
  .user-details {
    
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
  
  button {
    background-color: #0074d9;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  