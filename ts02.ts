function 내함수(num : (number | string)) : number
{
    // 숫자 3 -> 6
    // 문자 3 -> 에러
    // 이런 모호한 상황일때는 if문으로 나눠서 자료형을 확인하고 계산
    if(typeof num === 'number') {
        return num*2;
    } else if(typeof num === 'string') {
        let temp = Number(num); // 숫자로 형변환
        return temp*2;
    } else {    // else if썼으면 else까지 써줘야 할 수도 있음
        return 0;
    }
}

내함수(3)
내함수('3')
