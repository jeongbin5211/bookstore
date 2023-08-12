import React from 'react'
import { useStore } from '../store/user.store'
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Index() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  return (
    <>
      <p>Current user: {user}</p>
      <button onClick={() => setUser('Jeongbin')}>Set User</button>
      <HomePage />
      <SignIn />
      <SignUp />
    </>
  )
}
