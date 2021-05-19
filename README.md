# For Coding
코딩할 때 필요하면 보려고 만든 Repository

## Visual Studio Code       
확장 프로그램      
1. Auto Close Tag
2. Auto Import
3. Auto Rename Tag
4. Community Material Theme
5. ESLint
6. Highlight Matching Tag
7. HTML CSS Support
8. HTML Snippets
9. IntelliSense for CSS class names in HTML
10. JavaScript (ES6) code snippets
11. jQuery Code Snippets
12. Live Server
13. Material Icon Theme
14. Path Intellisense
15. Prettier - Code formatter
16. Reactjs code snippets
17. vscode-icons



## new Date ios Error
ios 에서 new Date()를 사용하면 Nan으로 표시되는 경우가 있다.
해결 : replace 를 통하여 변환을 해주어야 한다.

    new Date(----.replace(/-/g, "/"))


## Some
some() 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트한다.     

    // 비교하고자 하는 배열
    const array = [1, 2, 3, 4, 5];

    // 판별 함수 (조건을 적는다.)
    const even = item => item == 2;

    console.log(array.some(even)); //true


## Vanila JavaScript
순수 자바스크립트를 사용하여 웹 개발을 진행할 때 ES6 문법을 사용하면
IE 등 일부 웹브라우저에서는 작동이 불가하여 피하는 게 좋다.


## Concat
두개의 배열을 합친다.

    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = array1.concat(array2); 
    --> ["a", "b", "c", "d", "e", "f"]


## React-Native run multiple emulator
동시에 여러개의 emulator를 실행시키기 위하여 cmd에다 아래 코드를 실행시킨다.

    react-native run-android --port 8081 --deviceId emulator-5556


## React-Native APK 추출 
android 폴더에서 cmd를 열고 실행시키면 apk가 생선된다. 

    gradlew assembleRelease

## redux로 받아온 데이터 편집 && Object string 형식 비교

redux로 받아온 정보는 직접 변환이 불가능 하여 resultObject 변수를 따로 만들어 수정한다.         
for in 반복문을 사용하여 resultObject의 value값에 접근하여 비교한다.         
( string 형식 비교 -> 같으면 return 하여 정보수정을 막는다. 아래 코드는 장바구니)         
count를 따로 만드는 이유는 ClickData에 count를 만들면 추후 조건문 비교를 할때         
문자열이 달라져 장바구니에 추가될 수 있다.         


    let resultObject = JSON.parse(JSON.stringify(deliveryData.cartData));

    for(let key in resultObject){
       if(JSON.stringify(resultObject[key].product) === JSON.stringify( ClickData )){
          return;
       }
    }

    resultObject[new Date().getTime()] = { count : 1 , product :  ClickData };
    DeliveryDataAction.updateCartData({ cartData: resultObject });



## 숫자 3자리 단위로 " , " 넣기 
1000 -> 1,000        


    let priceText = String(priceCal).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');


## 숫자 한글로 표현 
100,000 -> 일십만        

    function numTokor(num) {
        num = parseInt((num + '').replace(/[^0-9]/g, ''), 10) + '';
        if(num == '0')
        return '영';
        var number = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
        var unit = ['', '만', '억', '조'];
        var smallUnit = ['천', '백', '십', ''];
        var result = [];
        var unitCnt = Math.ceil(num.length / 4);
        num = num.padStart(unitCnt * 4, '0') 
        var regexp = /[\w\W]{4}/g;
        var array = num.match(regexp);
        for(var i = array.length - 1, unitCnt = 0; i >= 0; i--, unitCnt++) {
        var hanValue = _makeHan(array[i]); 
        if(hanValue == '') 
        continue;
        result.unshift(hanValue + unit[unitCnt]);
        }
        function _makeHan(text) {
        var str = '';
        for(var i = 0; i < text.length; i++) {
        var num = text[i];
        if(num == '0') //0은 읽지 않는다
        continue;
        str += number[num] + smallUnit[i];
        }
        return str;
        }
        return result.join('');
    }
    .
    .
    .
    numTokor(100000);
    // 일십만


## Local Storage
로컬에 데이터를 저장하여 활용한다.        
(key, value); 형식으로 저장한다.        
ex) 접속 시 로컬에 저장해 두었던 데이터를 redux에 넣어 다시 저장한다.        

데이터 가져오기

    let data = localStorage.getItem("dataName");


데이터 저장

    localStorage.setItem( "dataName", --- );


## React document 선택자 (중요)   
document.---- 선택자는 react에서 사용하지 말아야 한다.       
build 시 class, id 가 겹치게 되면 오류가 난다.       
useState 혹은 useRef, redux를 사용하여야 한다.       

    document.getElementById(id);         
    document.querySelector(selectors);   


## JavaScript data-X
data-text를 이용하면 함수 내에서 이름을 다 지정하지 않아도       
dataset을 사용하여 간결하게 코드를 작성할 수 있다.       


    const onClickDiv = (e) => {
      console.log(e.target.dataset.text);
    }
    .
    .
    .
    <div data-text="hello" onClick={(e) => onClickDiv(e)}>Hello</div>
    <div data-text="world" onClick={(e) => onClickDiv(e)}>World</div>


## React Style Components
React Style Component 안에서 class style 지정        

    & > .hidden{
        display:none;
    }

props로 받은 상태에 따라 style 분기 처리         

    // isFilter에 따라 top값 조정
    ${({isFilter})=>{
        return isFilter?
        `
        top:calc(100vw*(80/428));
        `
        :
        `
        top:calc(100vw*(15/428));
        `
    }}


# 포트 확인 및 제거
확인
    
    netstat -ano

제거    

    taskkill /f /pid 19072