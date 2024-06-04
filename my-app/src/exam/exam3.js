//state & Props

import { useState } from "react"

//state lifting up : 상태 끌어올리기
//리액트에서는 부모 컴포넌트가 자식 컴포넌트의상태를 직접 변경할 수 없다
//->자식에서 발생한 이벤트를 부모에서 처리하도록 하는 상태 끌어올리기 패턴을 이용함.

//해당 파일에서 컴포넌트 총 3개 존재
//Id 컴포넌트 (자식)
//Pw 컴포넌트 (자식)
//Exam3 컴포넌트 (부모) - 해당 파일에서 내보낼 기본 컴포넌트

// ID 컴포넌트 (자식)
const Id = (props) => { // 부모에게서 전달받은 속성을 props 라고 부름

    const { onChangeId } = props; // props 안에 있는 onChangeId 라는 이름의 함수를 이용할 수 있게 됨
 
   // const [id, setId] = useState(""); //상태(state) 중 'id'를 생성하고 초기값 "" 설정

    return(
        // JSX 를 사용한 html 구문 작성부는 무조건 최상위 부모태그 하나로 감싸져 있어야 한다
        <>
          <div>
            <label>ID: </label>
            <input onChange={onChangeId}/>
            {/*onChange 이벤트 핸들러에 onChangeId를 연결함 */}
          </div>
        
        </>

        
    );


}

// pw 컴포넌트 (자식)
const Pw = ({onChangePw}) => { // {}를 이용하여 props 안에있는 값을 바로 꺼내서 쓸 수도 있다.
 
    //const [pw, setPw] = useState(""); //상태(state) 중 'id'를 생성하고 초기값 "" 설정

    return(
        // JSX 를 사용한 html 구문 작성부는 무조건 최상위 부모태그 하나로 감싸져 있어야 한다
        <>
          <div>
            <label>PW: </label>
            <input onChange={onChangePw} />
          </div>
        
        </>

        
    );


}

//Exam3 컴포넌트 (부모)
const Exam3 = () => {


    //자식의 상태를 부모에서 정의(상태 끌어올리기)
    const [id, setId] = useState(""); 
    const [pw, setPw] = useState("");

    //자식의 상태를 변경할 수 있는 함수 정의
    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePw = (e) => {
        setPw(e.target.value);
    }


        return (
            <>
                {/*컴포넌트 중 id 를 불러 렌더링함 ( ID 가 Exam3의 자식이 됨 )  */}
                 <Id onChangeId={onChangeId}/>

                {/*컴포넌트 중 pw 를 불러 렌더링함 ( pw 가 Exam3의 자식이 됨 )  */}
                 <Pw onChangePw={onChangePw}/>

                 <div>
                    {/* button 의 disabled 속성 : 비화설화 속 ( 비활성 true / 활성 false)
                        -> id 와 pw 둘다 작성되어야 활성화
                    */}
                    <button disabled={id.length === 0 || pw.length === 0}>Login</button>
                 </div>

            </>

        );
}

export default Exam3;