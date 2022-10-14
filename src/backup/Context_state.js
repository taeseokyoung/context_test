import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const frontend = createContext();
console.log(frontend)

// 1. createContext로 Context 만들기.    
// 2. 이름.Provider 로 하위 구조를 감싸준다.  
// 3. Value 값(넘겨주고 싶은 값)을 지정한다.
// 4. useContext(이름)을 불러온다.

const DeeeepSub = () => {
    const { state, setState } = useContext(frontend)
    return <>
        {state}
        서경
        <button onClick={() => setState('개발자')}> 개발자 만들기</button>
    </>
}

const DeepSub = () => {
    return <><DeeeepSub /></>
}


const Sub = () => {
    return <><DeepSub /></>
}

const App = () => {
    const [state, setState] = useState("취준생");
    return (
        <>
            {/* <frontend.Provider value={state, setState}> */}
            <frontend.Provider value={{ state, setState }}>
                <Sub />
            </frontend.Provider>
        </>
    )
}

export default App;