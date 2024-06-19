import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
// 에러 났을 떄 import 잘 됐는지 확인!

function App() {

  const [message,setMessage] = useState([]);
  const [message2,setMessage2] = useState("");
  const [message3,setMessage3] = useState("");

  useEffect(() => {

    //요청 -> 서버로 요청 ()
    // react (브라우저)  -> spring(서버)
    // http://localhost:3000 -> http://localhost:80
    fetch("/test1")
    .then(res => res.json())
    .then(data => {
      setMessage(data);
    });

  }, []);

  const handleClick = () => {
    fetch("/test2" , {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        name : "홍길동",
        age : 15
      })
    })
    .then(res => res.text())
    .then(data => setMessage2(data));
  }

  const axiosTest = () => {

    axios.post("/test2", {
      name : "김유저",
      age : 17
    })
    .then(res => {
      console.log(res);

      setMessage3(res.data);

    })

  }

  // axios
  //브라우저 및 node.js 환경에서
  // 비동기 요청을 쉽게 처리할 수 있게 해주는 javascript 라이브러리
  // * 터미널에서 npm/ yarn 통해 설치해야한다.
  // $ npm install axios
  // $ yarn add axios
  

  // 1. post 요청 시 데이터를 자동으로 JSON 테이터 형태로 처리해주므로,
  // fetch와 달리 JSON.stringify 를 명시적으로 호출할 필요가 없음
  // 2. 응답을 JSON 으로 자동 파싱해주기 떄문에, fetch처럼 두 번쨰 then 으로 응답을 파싱할 필요가 없음
  // 3. headers와 body 를 명시적으로 설정하지 않아도 된다
  //  headers의 경우는 기본적으로 Content-Type: application/json 으로 설정되어 있음
  //단, header  내용 변경 시 명시적으로 작성해야 함
  // ex) headers : {'Authorization' ; 'Bearer {token}'}

  


  return (
    <ul>
      {message.map((el, idx) => <li key={idx}>{el}</li>)}

      <hr />

      <button onClick={handleClick}>fetch로 서버 통신</button> 
      <br></br>
      <h1>{message2}</h1>


      <button onClick={axiosTest}>axios로 서버 통신</button> 
      <br/>
      <h1>{message3}</h1>

     </ul>

  );
}

export default App;
