import { Typography, Box, Card, CardContent, TextField, CardActions, Button } from '@mui/material';
import { orange } from '@mui/material/colors';
import axios from 'axios';
import React, { useState } from 'react'

export default function SignUp() {
  // 회원가입하는 user의 정보의 state를 하나의 객체로 관리
  
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPassword: "",
    userPasswordCheck: "",
    userName: "",
    userPhone: "",
    userEmail: "",
    userAddress: "",
    userAddressDetail: "",
    userKidBirth: "",
    recommendedUserId: "",
  });

  // 회원가입 시 유효성 검사 확인 에러
  // 유효성 검사: 사용자가 홈페이지에서 입력한 데이터값이 서버로 전송되기 전에 특정 규칙에 맞게 입력되었는지 검증하는 것
  const [errors, setErrors] = useState({
    userId: true,
    userPassword: true,
    userPasswordCheck: true,
    userEmail: true,
  });

  // 정규 표현식: 문자열에서 특정 패턴을 찾거나 일치시키기 위한 문자열
  // 4 ~ 8 글자의 알파벳(대소문자) 및 숫자로 구성된 문자열
  const idRegExp = /^[a-zA-Z0-9]{4,8}$/;

  // 8 ~ 12 글자의 알파벳(대소문자), 숫자, 느낌표, @로 구성된 문자열
  const pwRegExp = /^[a-zA-Z0-9!@]{8,12}$/;

  // 이메일 주소 형식의 문자열
  const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
    
    switch (name) {
      case 'userId':
        setErrors( {...errors, userId: value === '' || !idRegExp.test(value)});
        break;
      case 'userPassword':
        setErrors({ ...errors, userPassword: !pwRegExp.test(value)});
        break;
      case 'userPasswordCheck':
        setErrors({...errors, userPasswordCheck: userInfo.userPassword !== value});
        break;
      case 'userEmail':
        setErrors({...errors, userEmail: value === "" || !emailRegExp.test(value)});
        break;
      default:
        break;
    }
  }

  const signUpHandler = async () => {
    const { userId, userPassword, userPasswordCheck, userName, userPhone, userEmail, userAddress} = userInfo;
    const { userId: IdError, userPassword: pwError, userPasswordCheck: pwckError, userEmail: emailError} = errors;

    if (
      IdError ||
      pwError ||
      pwckError ||
      emailError ||
      userName === "" ||
      userPhone === "" ||
      userAddress === ""
    ) {
      alert('모든 조건을 만족시켜주세요.');
      return
    }

    try {
      await axios.post('http://localhost: 4080/api/auth/signUp', userInfo);
      alert('회원가입이 완료되었습니다!')
    } catch(error) {
      alert('입력 값을 다시 확인해주세요.')
    }
  }

  return (
    <>
      <Typography variant="h3" paddingTop={"2vw"} textAlign={"center"}>
        회원 가입
      </Typography>
      <Box display={"flex"} justifyContent={"center"} paddingTop={"3vw"}>
        <Card
          variant="outlined"
          sx={{ width: "30vw", height: "40vw", marginBottom: "5vw" }}
        >
          <CardContent>
            <TextField
              fullWidth
              label="아이디"
              name='userId'
              type="id"
              variant="standard"
              error={errors.userId}
              helperText={
                errors.userId
                  ? "영어 대소문자 및 숫자로 4 ~ 8자리 입력하세요."
                  : false
              }
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="비밀번호"
              name='userPassword'
              type="password"
              variant="standard"
              error={errors.userPassword}
              helperText={
                errors.userPassword
                  ? "영어 대소문자 및 숫자, 특수문자(! @)로 8 ~ 12자리 입력하세요."
                  : false
              }
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="비밀번호 체크"
              name='userPasswordCheck'
              type="password"
              variant="standard"
              error={errors.userPasswordCheck}
              helperText={
                errors.userPasswordCheck
                  ? "비밀번호가 일치하지 않습니다."
                  : false
              }
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="이름"
              name='userName'
              type="name"
              variant="standard"
              // error={userInfo.userName === "" ? "이름을 입력하세요" : false}
              helperText={
                userInfo.userName
                  ? "이름을 입력하세요."
                  : false
              }
            />
            <TextField
              fullWidth
              label="전화번호"
              name='userPhone'
              type="phone"
              variant="standard"
              // error={userInfo.userPhone === "" ? "전화번호를 입력하세요" : false}
              helperText={
                userInfo.userPhone === ""
                  ? "전화번호를 입력하세요."
                  : false
              }
            />
            <TextField
              fullWidth
              label="이메일"
              name='userEmail'
              type="email"
              variant="standard"
              error={errors.userEmail}
              helperText={
                errors.userEmail
                  ? "이메일 형식에 맞게 작성하여 주세요."
                  : false
              }
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="주소"
              name="userAddress"
              type='address'
              variant="standard"
              // error={userInfo.userAddress === "" ? "주소를 입력하세요." : false}
              helperText={
                userInfo.userAddress
                  ? "주소를 입력하세요."
                  : false
              }
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="주소"
              name="userAddressDetail"
              type='address'
              variant="standard"
              // error={userInfo.userAddressDetail === "" ? "상세주소를 입력하세요." : false}
              helperText={
                userInfo.userAddressDetail
                  ? "상세주소를 입력하세요."
                  : false
              }
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="자녀 생년월일"
              name='userKidBirth'
              type="kidBirth"
              variant="standard"
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="추천인 아이디"
              name='recommendedUserId'
              type="recommendedUserId"
              variant="standard"
              onChange={handleInput}
            />
          </CardContent>
          <CardActions>
            <Button fullWidth onClick={() => signUpHandler()} variant='contained' sx={{ bgcolor: '#F0A500', marginTop: '2vw'}}>
              회원 가입
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

// sx는 prop으로 편리한 스타일링 솔루션을 제공
//      여러 스타일 규칙을 하나의 prop으로 결합 가능
//      색상, 마진, 패딩, 타이포그래피 등 다양한 스타일을 한 번에 지정 가능

// TextField는 input 태그역할