<template>
    <div class="create-tree">
      <h1>Create Tree</h1>
      <form @submit.prevent="createTree" class="tree-form">
        <div class="form-group">
          <label for="name">ชื่อ:</label>
          <input type="text" id="name" v-model="tree.name" class="input-field">
        </div>
        <div class="form-group">
          <label for="type">ประเภท:</label>
          <input type="text" id="type" v-model="tree.type" class="input-field">
        </div>
        <div class="form-group">
          <label for="nature">ลักษณะ:</label>
          <input type="text" id="nature" v-model="tree.nature" class="input-field">
        </div>
        <div class="form-group">
          <label for="prosperousarea">พื้นที่ที่เจริญ:</label>
          <input type="text" id="prosperousarea" v-model="tree.prosperousarea" class="input-field">
        </div>
        <div class="form-group">
          <label for="address">ที่อยู่:</label>
          <input type="text" id="address" v-model="tree.address" class="input-field">
        </div>
        <div class="form-group">
          <label for="record">ประวัติ:</label>
          <input type="text" id="record" v-model="tree.record" class="input-field">
        </div>
        <button type="submit" class="submit-button">Create Tree</button>
      </form>
    </div>
  </template>
  
  <style scoped>
  .create-tree {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .tree-form {
    background-color: #34495e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 4px #e74c3c;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  
  label {
    font-weight: 600;
  }
  
  .input-field {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 2px solid #e74c3c;
    background-color: #2c3e50;
    box-shadow: 4px 4px #e74c3c;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 5px 10px;
    outline: none;
  }
  
  input[type="text"]:focus {
    border: 2px solid #e74c3c;
  }
  
  .submit-button {
    margin-top: 20px;
    width: 140px;
    height: 45px;
    border-radius: 10px;
    border: 2px solid #e74c3c;
    background-color: #2c3e50;
    box-shadow: 4px 4px #e74c3c;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
  </style>
  