import React, { useState } from 'react'
import useUserStore from '../../../stores/user.store'

// useState를 통한 상태관리
// 회원 아이디: userId
// 회원 비밀번호: userPassword


// signInHandler 함수
// userId와 userPassword가 공백할 경우 alert '아이디와 비밀번호를 입력하세요'
// userId와 userPassword를 data 변수에서 관리

// data는 axios를 사용


export default function SignIn() {

  const [userId, setUserId] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')

  // 회원 데이터를 store에서 관리
  const [user, setUser] = useUserStore();

  // 회원의 로그인 함수

  const signInHandler = (userId, userPassword) => {
    // 유효성 검사: 입력값이 없는 경우에 alert알림
    if(userId === "" || userPassword === "") {
      alert('아이디와 비밀번호를 입력하세요.')
      return
    }
  }

  return (
    <div>SignIn</div>
  )
}
