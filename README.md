# Context
  
React 공식문서 : https://ko.reactjs.org/docs/context.html  
context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다.

1-1. 방법  
1. createContext로 Context 만들기.    
2. 이름.Provider 로 하위 구조를 감싸준다.  
3. Value 값(넘겨주고 싶은 값)을 지정한다.
4. useContext(이름)을 불러온다.

state를 전달하는 방법
Value 값에 {state} 입력.

setState까지 전달하는 방법
Value 값에 {{state, setState}} 입력.


전역적으로 쓰이지는 못하고 지역적이다.
