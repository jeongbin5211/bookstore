import Cookies from 'js-cookie'
import React from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../../store/user.store'

export default function HomePage() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const token = Cookies.get('token');

  if(!token) {
    // Redirect : 인증이 필요한 페이지에 사용자가 로그인을 하지 않고 접근하려고 할때 사용하는 컴포넌트
    return <Link to={'/signin'} />

  }

  const handleSignout = () => {
    setUser('');
  }
  return (
    <>
      <div>Welcome back!</div>
      <button onClick={handleSignout}>Sign Out</button>
    </>
  )
  
}
