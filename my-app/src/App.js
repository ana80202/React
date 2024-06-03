import logo from './logo.svg';
import './App.css';
import Exam1 from './exam/exam1';
import Exam2 from './exam/exam2';

// 터미널 ctrl + shift + ` 으로 열고
//터미널에서 yarn start 서버 켜기
//터미널에서 ctrl + c 서버 끄기


function App() {
  return (
   <div>
    {/*여러가지 컴포넌트 불러다 쓸겁니다.. */}
    {/*ctrl + / : jsx 주석 */}
    <Exam1 />
    <Exam2 />
   </div>
   


  );
}

export default App;
