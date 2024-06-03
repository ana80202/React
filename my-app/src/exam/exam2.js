//component 예제 2

import { useState } from "react";

//함수형 컴포넌트
function Exam2(){

    // 함수형 컴포넌트에서 상태를 사용하는 방법
    const [name, setName] = useState("다연!");

    const handleClick = () => {
        setName("개구리");
    }

    return( // 함수형 컴포넌트는 render() 함수 제외하고 바로 return 작성하면 된다
    <div>
        <h1>Hello,{name}</h1>
        <button onClick={handleClick}></button>
    </div>


);

}

export default Exam2;