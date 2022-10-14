import React, { useState } from 'react'

// props를 좀 더 쉽게 쓸 수 있는 방법이 없을까?
const DeeeepSub = ({ state, setState }) => {
    // return <>{state} 취업하자!!</>
    return <>
        {state}
        서경
        <button onClick={() => setState('프론트엔드 개발자')}>
            프론트엔드 개발자 만들기
        </button>
    </>
}

const DeepSub = ({ state, setState }) => {
    return <>
        <DeeeepSub state={state} setState={setState} />
    </>
}

// const Sub = (props) => {
// const { state } = props;
const Sub = ({ state, setState }) => {

    return <>
        {/* {console.log(props)} */}
        <DeepSub state={state} setState={setState} />
    </>
}

const App = () => {
    const [state, setState] = useState("취준생");
    return (
        <>
            {/* 방법 1. props */}
            <Sub state={state} setState={setState} />
        </>

    )
}

export default App;