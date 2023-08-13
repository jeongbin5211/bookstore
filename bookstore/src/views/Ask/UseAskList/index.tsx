import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const initialState = {
  askSort: '',  // 문의 종류 - 문자열
  askDatetime: 0, // 문의 날짜 - 숫자
  askStatus: '' // 문의 상태 - 문자열
}

export default function UserAskList() {

  const [cookies, setCookies] = useCookies();
  const [askList, setAskList] = useState<any[]>([]);

  // const [askSort, setAskSort] = useState<string>('');
  // const [askDatetime, setAskDatetime] = useState<number>(0);
  // cosnt [askStatus, setAskStatus] = useState<string>('');
  const [askFields, setAskFields] = useState(initialState); // 위 세줄을 간소화 시킴

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAskFields(prevState => ({ ...prevState, [name]: value}))
  }

  // axios를 사용한 데이터 요청을 처리하는 함수
  const fetchData = async (url: any, method = 'get', data = {/* 빈 변수값 */}) => {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers: { Authorization: `Bearer ${cookies.token}`}
      })

      // 성공적으로 데이터 요청 결과를 받은 경우
      if (response.data.result) {
        setAskList(response.data.data);
      }
    
    } catch (error) {
      alert('Not Exist Data')
    }
  }

  const askDelete = (askId: any) => fetchData(`http://localhost:4080/api/ask/userDelete/`, 'post', {askId})
  // askFields가 undefined나 null일 경우, 빈 객체를 전달
  const askSearch = () => fetchData(`http://localhost:4080/api/ask/askSearch/`, 'post', askFields || {})

  // 컴포넌트가 마운트 될 때 데이터를 가져오기
  useEffect(() => {
    fetchData(`http://localhost: 4080/api/ask/askList`)
  })

  return (
    <div>UserAskList</div>
  )
}
