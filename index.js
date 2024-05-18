// .ts :  타입스크립트 파일
// .tsx : jsx용 타입스크립트 파일
// npm install -g typescript (nodejs가 먼저 설치되어 있어야함)
// tscongif.json 파일을 생성하고 아래와 같이 입력
/*
    {
        "compilerOptions":{
            "target":"ES5",
            "module":"CommonJS"
        }
    }

*/
// tsc -w 로 실행(.js 파일로 변환)
// index.ts -> index.js 로 생성
// 자바스크립트에 type 검사를 강화한 버전
var myName = '홍길동';
myName = '김유신';
// myName = 33; // 자료형이 다르면 에러 (타입스크립트)
// string, number, boolean, null, undefined, [], {}, bigint
var 이름 = '사과';
var 숫자 = 123.3;
var 숫자배열 = [1, 2, 3];
var 문자열배열 = ['a', 'b', 'c'];
var 객체 = { 이름: '김유신', 나이: 33 };
var 오브젝트 = {
    _name: '이름',
    _age: 33,
    _adult: true
};
