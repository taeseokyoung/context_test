import React, { useContext } from 'react';
import { DarkTheme } from './App';
// 한 파일에서 모두 작성할 때는 이상없었지만 const DarkTheme = createContext(); 이 오지 않고 있다.

// 초기 const값은 export, import 로 넘겨줘야 하는구나

const TheDeepSub = () => {
    const { dark, setDark } = useContext(DarkTheme);
    console.log(dark, setDark)
    return (
        <>
            <div className="dark_btn">
                <label htmlFor="btn" className={`btn ${dark ? 'on' : ''}`}>
                    {/* dark && 'on' */}
                    dark
                </label>
                {/* <input type="checkbox" id="btn" onChange={() => setDark(!dark)}>mode</input> 체크박스 만드는거 하다가 말아버리심..*/}
                <button id="btn" onClick={() => setDark(!dark)}>mode</button>
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit atque ullam optio cupiditate numquam quod! Quam ea in ipsam tempora, eum quis fugiat possimus quisquam rerum, quos fuga, nam delectus esse distinctio dicta mollitia? Sit a nostrum officia? Delectus quasi asperiores ad? Nostrum repudiandae minus autem sint optio porro, molestiae eligendi debitis, ratione et reprehenderit! Exercitationem molestias repudiandae enim doloribus molestiae, quidem fugit maiores! Doloremque, pariatur? Vitae fugiat dolores molestias dolor fugit, impedit, blanditiis modi, alias possimus a esse omnis iure exercitationem accusantium explicabo ex est! Perspiciatis cumque dolores quasi nam enim nesciunt laboriosam quam voluptatum, labore minus molestias.
            </div>
        </>

    )
}

export default TheDeepSub;