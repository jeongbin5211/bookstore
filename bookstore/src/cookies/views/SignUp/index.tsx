import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react'

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const data = {
    username,
    password,
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post('/api/auth/signup', data);

    Cookies.set('token', response.data.token);
  }

  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(event) => setUsername(event.target.value)} />
          <input type="text" onChange={(event) => setPassword(event.target.value)} />
          <button type='submit'>Sign Up</button>
        </form>
        
      </div>
    </>
  )
}
