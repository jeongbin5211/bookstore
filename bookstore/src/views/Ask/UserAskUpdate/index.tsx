import React, { useEffect, useState } from 'react';
import { mockAskUpdateData } from '../../../mocks/mockData';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';

export default function UserAskUpdate() {

  const { askId } = useParams();

  const [askWriter, setAskWriter] = useState<string>('');
  const [askSort, setAskSort] = useState<string>('');
  const [askTitle, setAskTitle] = useState<string>('');
  const [askContent, setAskContent] = useState<string>('');

  const handleChangeAskSort = (event: SelectChangeEvent) => {
    setAskSort(event.target.value as string);
  }

  const askWirteHandler = () => {
    // 서버와 연결되지 않기 때문에 현재는 콜솔창에 출력
    console.log({
      askId,
      askWriter,
      askSort,
      askTitle,
      askContent,
    });
    alert('1 : 1 문의 수정을 정상적으로 완료하였습니다.')
  };

  useEffect(() => {
    // Mockdata에서 정보를 가져와서 상태값에 설정
    setAskWriter(mockAskUpdateData.askWriter);
    setAskSort(mockAskUpdateData.askSort);
    setAskTitle(mockAskUpdateData.askTitle);
    setAskContent(mockAskUpdateData.askContent);
  })

  return (
    <>

    <Box style={{ paddingTop: "2vw", paddingBottom: "2vw" }}>

      <Typography align="center" fontSize={"30px"}>

        마이페이지

      </Typography>

      <Typography align="center" fontSize={"25px"}>

        1 : 1 문의 수정

      </Typography>

    </Box>

    <Box

      display={"flex"}

      justifyContent={"center"}

      style={{

        padding: "1vw",

        margin: "auto",

      }}

      sx={{ maxWidth: "60vw" }}

      borderBottom={1}

      borderTop={1}

    >

      <Card sx={{ m: 1, minWidth: "55vw" }}>

        <Box display={"flex"} justifyContent={"center"}>

          <Card>

            <CardContent>

              <Box

                display={"flex"}

                borderBottom={1}

                padding={1}

                margin={1}

                sx={{ minWidth: "55vw" }}

              >

<Box

                  padding={1}

                  sx={{ minWidth: "8vw" }}

                  justifyContent={"center"}

                  alignContent={"center"}

                >

                  문의 유형

                </Box>

                <Box

                  sx={{ flexGrow: 1 }}

                  justifyContent={"center"}

                  alignContent={"center"}

                >

                  <FormControl sx={{ minWidth: "11vw", maxWidth: "15vw" }}>

                    <InputLabel id="demo-simple-select-helper-label">

                      문의유형 선택

                    </InputLabel>

                    <Select

                      labelId="demo-simple-select-helper-label"

                      id="demo-simple-select-helper"

                      value={askSort}

                      label="문의유형 선택"

                      onChange={handleChangeAskSort}

                    >

<MenuItem>

                        <em>문의 유형을 선택해주세요</em>

                      </MenuItem>

                      <MenuItem value={"제품 문의"}>제품 문의</MenuItem>

                      <MenuItem value={"주문 / 결제 문의"}>주문 / 결제 문의</MenuItem>

                      <MenuItem value={"취소 / 환불 문의"}>취소 / 환불 문의</MenuItem>

                    </Select>

                  </FormControl>

                </Box>

              </Box>

              <Box

                display={"flex"}

                borderBottom={1}

                padding={1}

                margin={1}

                sx={{ minWidth: "55vw" }}

              >

                <Box padding={1} sx={{ minWidth: "8vw" }}>

                  문의 제목

                </Box>

<Box sx={{ flexGrow: 1 }}>

                  <TextField

                    id="filled-multiline-flexible"

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

                borderBottom={1}

                padding={1}

                margin={1}

                sx={{ minWidth: "55vw" }}

              >

                <Box padding={1} sx={{ minWidth: "8vw" }}>

                  문의 내용

                </Box>

<Box sx={{ flexGrow: 1 }}>

                  <TextField

                    id="filled-multiline-flexible"

                    label="최대 200자 이내로 작성해주세요"

                    multiline

                    fullWidth

                    maxRows={5}

                    variant="filled"

                    value={askContent}

                    onChange={(e) => setAskContent(e.target.value)}

                    inputProps={{ maxLength: 200 }}

                  />

                </Box>

              </Box>

            </CardContent>

          </Card>

        </Box>

      </Card>

    </Box>

<Box display={"flex"} justifyContent={"center"}>

      <CardActions sx={{ minWidth: "60vw" }} style={{ paddingTop: "2vw" }}>

        <Link to={"/userAskList"}>

          <Button onClick={() => askWirteHandler()}>문의 변경</Button>

        </Link>

        <Link to={"/userAskList"}>

          <Button>취소</Button>

        </Link>

      </CardActions>

    </Box>

  </>

);

}
