import { Box, Button, ButtonGroup, Card, CardContent, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { mockAskData } from '../../../mocks/mockData';
import { Link } from 'react-router-dom';

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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAskFields(prevState => ({ ...prevState, [name]: value}))
  }

  const onAskDateTimeHandler = (months: number) => {
    setAskFields(prevState => ({ ...prevState, askDatetime: months }))
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

  //! Mock Data에서 해당 값 조회
  const searchMockData = (askDatetime: number, askStatus: string, askSort: string) => {
    
    

    return mockAskData.filter((item) => {
      // 문자열로 저장된 날짜/시간을 Date 객체로 변환
      let itemDate = new Date(item.askDatetime);
      let compareDate = new Date(askDatetime);

      return (
        itemDate >= compareDate &&
        item.askStatus === askStatus &&
        item.askSort === askSort 
      )

      
      })
  }

  // 목데이터 조회
  const getAskList = () => {
    setAskList(mockAskData)
  }

  //! 서버에서 해당 URL에 대한 데이터를 삭제하는 경우
  // const askDelete = (askId: number) => fetchData(`http://localhost:4080/api/ask/userDelete/`, 'post', {askId})

  const askDelete = (askId: number) => {
    const newAskList = askList.filter((ask) => ask.askId !== askId);
    setAskList(newAskList);
  }

  //! 서버에서 해당 URL에 대한 문의를 조회하는 경우
  // askFields가 undefined나 null일 경우, 빈 객체를 전달
  // const askSearch = () => fetchData(`http://localhost:4080/api/ask/askSearch/`, 'post', askFields || {})

  const askSearch = () => {
    const newList = searchMockData(initialState.askDatetime, initialState.askStatus, initialState.askSort);
    setAskList(newList);
  }

  //! 서버에서 해당 URL에 대한 문의를 조회하는 경우
  // 컴포넌트가 마운트 될 때 데이터를 가져오기
  // useEffect(() => {
  //   fetchData(`http://localhost: 4080/api/ask/askList`)
  // }, []);

  useEffect(() => {
    getAskList();
  }, []);

  return (
    <>
      {/* 컴포넌트 UI 부분 */}
      <Box display={"flex"} style={{ padding: "3vw" }}>
        <Box ml={"10vw"}>
          <Box>
            <Typography variant="h3" paddingBottom={"2vw"} textAlign={"center"}>
              마이 페이지
            </Typography>
            <Typography variant="h4" paddingBottom={"1vw"} textAlign={"center"}>
              1 : 1 문의
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            style={{
              padding: "1vw",
              borderWidth: 2,
              borderRadius: 4,
              borderBottom: 1,
              borderTop: 1,
              borderStyle: "solid",
            }}
            sx={{ maxWidth: "60vw" }}
          >
            <Card style={{ paddingTop: "1vw" }} sx={{ m: 1, minWidth: "55vw" }}>
              <Box style={{ paddingTop: "1vw" }}>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      onAskDateTimeHandler(0);
                    }}
                  >
                    전체
                  </Button>
                  <Button
                    onClick={() => {
                      onAskDateTimeHandler(1);
                    }}
                  >
                    1개월
                  </Button>
                  <Button
                    onClick={() => {
                      onAskDateTimeHandler(3);
                    }}
                  >
                    3개월
                  </Button>
                  <Button
                    onClick={() => {
                      onAskDateTimeHandler(6);
                    }}
                  >
                    6개월
                  </Button>
                </ButtonGroup>
              </Box>
              {/* Select 구성 요소를 사용하여 사용자가 값을 선택 가능 */}

              <Box display={"flex"}>
                <InputLabel>답변 상태</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="askStatus"
                  value={askFields.askStatus}
                  label="Select AskStatus"
                  onChange={handleChange}
                >
                  <MenuItem value={"문의 접수"}>문의 접수</MenuItem>
                  <MenuItem value={"답변 완료"}>답변 완료</MenuItem>
                </Select>
              </Box>
              <Box display={"flex"}>
                <InputLabel>문의 종류</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="askSort"
                  value={askFields.askSort}
                  label="Select AskStatus"
                  onChange={handleChange}
                >
                  <MenuItem value={"제품 문의"}>제품 문의</MenuItem>
                  <MenuItem value={"주문/결제 문의"}>주문/결제 문의</MenuItem>
                  <MenuItem value={"교환/취소 문의"}>교환/취소 문의</MenuItem>
                </Select>
              </Box>
              <Button fullWidth variant="outlined" onClick={askSearch}>
                조회하기
              </Button>
              <Box>
                <Link to={"/userAskWriter"}>
                  <Button fullWidth variant="contained">
                    문의 작성하기
                  </Button>
                </Link>
              </Box>

              {askList.map((ask) => (
                <>
                  <Box>
                    <Typography>{ask.askId}</Typography>
                    <Typography>{ask.askSort}</Typography>
                    <Typography>{ask.askTitle}</Typography>
                    <Typography>{ask.askStatus}</Typography>
                    <Typography>{ask.askDatetime}</Typography>
                  </Box>
                  <Link to={`/userAskUpdate/${ask.askId}`}>
                    <Button>수정</Button>
                  </Link>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => askDelete(ask.askId)}
                  >
                    삭제
                  </Button>
                </>
              ))}
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
