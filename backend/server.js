const express = require('express');

const cors = require('cors');

const PORT = 4000;
const server = express();

server.use(cors());
server.get('/', (req, res) => {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  res.send(JSON.stringify(pororoObjArr));
});

server.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT} 에서 실행중입니다잉`);
});
