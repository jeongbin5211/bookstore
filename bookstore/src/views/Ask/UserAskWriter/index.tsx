import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import { Box, Button, TextField, Typography } from '@mui/material';

import useUserStore from '../../../stores/user.store';
import { mockUser } from '../../../mocks/mockUserData'; 

export default function UseAskWriter() {

  //! useParams
  //  : react-router에서 제공하는 Hooks
  //  : 파라미터값을 URL을 통해서 넘긴 후
  //  : 넘겨받은 페이지에서 사용할 수 있도록 하는게 가능합니다.

  // EX) 여러 개의 영화 정보가 담겨있는 데이터를 출력하는 경우
  // : 영화 제목을 클릭해서 세부 페이지로 이동하도록 구현
  // : 영화의 id값을 URL로 넘겨 세부 페이지에 id값에 해당하는 영화 정보만 출력하도록 설정

  // : npm install react-router-dom (react-router-dom을 설치)

  // 해당 경로 지정 시 URL 마지막에 /:파라미터(변수)

  // useParams 정보를 변수에 저장
  const { askId } = useParams();

  const { user } = useUserStore();

  const [askWriter, setAskWriter] = useState<string>('');
  const [askSort, setAskSort] = useState<string>('');
  const [askTitle, setAskTitle] = useState<string>('');
  const [askContent, setAskContent] = useState<string>('');

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');

  const askWriterHandler = () => {

    const data = {
      askWriter: user.userId,
      askSort,
      askTitle,
      askContent,
    };

    // axios.post('http://localhost: 4080/api/aks/askWriter', data)
    //   .then((response) => {
    //   const data = response.data;
    //   const result = data.result;
    //   console.log(result);
    //   alert('1 : 1 문의 접수를 정상적으로 완료하였습니다.');
    //   if (!result) {
    //     alert(data.messege)
    //   }
    // })
    // .catch((error) => {}); 
    //? 위 코드는 서버와 연결되지 않기 때문에 현재에는 콘솔창에 정보를 출격
    console.log(data);
    alert('1 : 1 문의 접수를 정상적으로 완료하였습니다.')
  };

  useEffect(() => {
    setUserName(mockUser.userName);
    setUserEmail(mockUser.userEmail);
    setUserPhone(mockUser.userPhone);
  }, []);

  return (
    <>
      <Box style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>
        <Typography align="center" fontSize={"30px"}>
          마이 페이지
        </Typography>
        <Typography align="center" fontSize={"25px"}>
          1 : 1 문의
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        style={{ padding: "1vw", margin: "auto" }}
        sx={{ maxWidth: "60vw" }}
      >
        <Box>문의 제목</Box>
        <Box>
          <TextField
            label="문의 제목을 입력해주세요"
            fullWidth
            value={askTitle}
            onChange={(e) => setAskTitle(e.target.value)}
            inputProps={{ maxLength: 10 }}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        style={{ padding: "1vw", margin: "auto" }}
        sx={{ maxWidth: "60vw" }}
      >
        <Box>문의 내용</Box>
        <Box>
          <TextField
            label="문의 내용을 입력해주세요"
            fullWidth
            value={askContent}
            onChange={(e) => setAskContent(e.target.value)}
            inputProps={{ maxLength: 10 }}
          />
        </Box>
      </Box>
      <Link to={'/userAskList'}>
        <Button fullWidth onClick={() => askWriterHandler()}>문의 등록</Button>
      </Link>
    </>
  );
}
