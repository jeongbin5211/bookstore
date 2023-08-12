import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react'

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const data = {
    username,
    password,
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.post('/api/auth/signin', data);

    Cookies.set('token', response.data.token);
  }

  const handleLogout = () => {
    Cookies.remove('token');
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(event) => setUsername(event.target.value)} />
          <input type="text" onChange={(event) => setPassword(event.target.value)} />
          <button type='submit'>Sign In</button>
        </form>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </>
  )
}
