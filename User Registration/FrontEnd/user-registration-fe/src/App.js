import './App.css';
import React, { useState } from 'react';

export default App;

function App() {

  
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/userRegistration', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <div class="container">
    <hr/>
    <h1>User Registration</h1>
    <hr/>
  
    <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="userId">userId</label>
            <input class="form-control" type = "text" name="userId " onChange={e => setData({...data,userId: e.target.value})}/>
        </div>
  
        <div class="form-group">
            <label for="userName">UserName</label>
            <input class="form-control" type = "text" name="userName" onChange={e => setData({...data,userName: e.target.value})}/>
        </div>
  
        <div class="form-group">
            <label for="password">password</label>
            <input class="form-control" type = "text" name="password" onChange={e => setData({...data,password: e.target.value})}/>
        </div>
  
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
    );




}
