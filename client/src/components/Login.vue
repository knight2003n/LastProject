<template>
  <div class="login-container">
    <h1>User Login</h1>
    <form @submit.prevent="onLogin">
      <p>Email: <input type="text" v-model="email" class="input-field" /></p>
      <p>Password: <input type="password" v-model="password" class="input-field" /></p>
      <button type="submit" class="login-button">เข้าสู่ระบบ</button>
      <button @click="navigateTo('/register')" class="register-button">สมัครใช้งาน</button>
      <div class="error" v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import AuthenService from '@/services/AuthenService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password,
        });
        console.log(response);
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);

        this.$router.push({
          name: 'tree',
        });
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.email = '';
        this.password = '';
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  background-color: #f4f4f4;
}

h1 {
  font-size: 2.5em;
  color: #2e2e2e;
  font-weight: 700;
  margin: 15px 0 30px 0;
}

.input-field {
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(173, 173, 173);
  border-radius: 30px;
  margin: 10px 0;
  color: black;
  font-size: 0.8em;
  font-weight: 500;
  box-sizing: border-box;
  padding-left: 30px;
}

.input-field:focus {
  outline: none;
  border-bottom: 2px solid rgb(199, 114, 255);
}

.login-button {
  width: 100%;
  border: 2px solid #8000ff;
  background-color: #8000ff;
  height: 40px;
  color: white;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
}

.login-button::after {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.253);
  height: 100%;
  width: 150px;
  top: 0;
  left: -200px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  filter: blur(10px);
  transition-duration: 0.5s;
}

.login-button:hover::after {
  transform: translateX(600px);
  transition-duration: 0.5s;
}

.register-button {
  font-size: 0.7em;
  font-weight: 500;
  background-color: #2e2e2e;
  color: white;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 20px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
