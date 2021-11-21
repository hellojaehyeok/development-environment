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

데이터 초기화

    localStorage.removeItem('dataName')

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


## 포트 확인 및 제거
확인
    
    netstat -ano

제거    

    taskkill /f /pid 19072

## n년전 날짜 구하기

    // 현재 날짜
    const today = new Date(); 
    // 5년전 날짜 
    console.log(new Date(today.setFullYear(today.getFullYear() - 5)));

## 영문/특수문자/문자열길이 정규식 정리

    (?=.*[A-Za-z])           // 영문
    (?=.*?[A-Z])             // 최소 한개의 대문자 영문
    (?=.*?[a-z])             // 최소 한개의 소문자 영문
    (?=.*?[0-9])             // 최소 한개의 숫자
    (?=.*?[#?!@$%^&*-])      // 최소 한개의 특수 문자
    { 8 , 10 }              // 최소 8자 최대 10자

이 정규식들을 합치면 자유롭게 사용할 수 있다.        

ex) 아래 코드는 최소 8 자, 최대 10자 영문/특수문자 조합        

    const checked = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,10}$/;
    console.log(checked.test("123qwe!!!")); // true

## 빈 Object 감지

    Object.keys( testObj ).length !== 0

## 최소, 최대 랜덤값

    Math.round((Math.random() * ( 최대 - 최소) + 최소);
    // 최소 ~ 최대
     
## 랜던 문자열
랜덤함 문자열이 필요할때 사용하면 된다.        

    function randomString () {
        // 대문자 영문 
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
        // 반환받을 문자열의 수
        var stringLength = 2;
        var randomstring = ''
        for (var i = 0; i < stringLength; i++) {
            var rnum = Math.floor(Math.random() * chars.length)
            randomstring += chars.substring(rnum, rnum + 1)
        }
        return randomstring
    }

    console.log(randomString());                   


## 두 좌표의 거리 계산 km
각 위도,경도의 값을 넣으면 두 좌표사이의 km 거리를 알 수 있다.

    function getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2){
        function deg2rad(deg) { return deg * (Math.PI/180) }
        var R = 6371;
        var dLat = deg2rad(lat2-lat1); 
        var dLon = deg2rad(lng2-lng1); 
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d;
    }

## React Https
package.json - start 를 수정하면 https로 열린다.

    "start": "set HTTPS=true&&react-scripts start",

## TimeStamp
현재시간의 타임스탬프를 얻어온다.

    let newTimestamp = null;
    newTimestamp = + new Date();

## Hash 256 변환

    function SHA256(s){

        var chrsz   = 8;
        var hexcase = 0;

        function safe_add (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        }

        function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
        function R (X, n) { return ( X >>> n ); }
        function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
        function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
        function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
        function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
        function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
        function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

        function core_sha256 (m, l) {

            var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1,
                0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
                0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786,
                0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
                0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147,
                0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
                0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B,
                0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
                0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A,
                0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
                0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);

            var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);

            var W = new Array(64);
            var a, b, c, d, e, f, g, h, i, j;
            var T1, T2;

            m[l >> 5] |= 0x80 << (24 - l % 32);
            m[((l + 64 >> 9) << 4) + 15] = l;

            for ( var i = 0; i<m.length; i+=16 ) {
                a = HASH[0];
                b = HASH[1];
                c = HASH[2];
                d = HASH[3];
                e = HASH[4];
                f = HASH[5];
                g = HASH[6];
                h = HASH[7];

                for ( var j = 0; j<64; j++) {
                    if (j < 16) W[j] = m[j + i];
                    else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

                    T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                    T2 = safe_add(Sigma0256(a), Maj(a, b, c));

                    h = g;
                    g = f;
                    f = e;
                    e = safe_add(d, T1);
                    d = c;
                    c = b;
                    b = a;
                    a = safe_add(T1, T2);
                }

                HASH[0] = safe_add(a, HASH[0]);
                HASH[1] = safe_add(b, HASH[1]);
                HASH[2] = safe_add(c, HASH[2]);
                HASH[3] = safe_add(d, HASH[3]);
                HASH[4] = safe_add(e, HASH[4]);
                HASH[5] = safe_add(f, HASH[5]);
                HASH[6] = safe_add(g, HASH[6]);
                HASH[7] = safe_add(h, HASH[7]);
            }
            return HASH;
        }

        function str2binb (str) {
            var bin = Array();
            var mask = (1 << chrsz) - 1;
            for(var i = 0; i < str.length * chrsz; i += chrsz) {
                bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
            }
            return bin;
        }

        function Utf8Encode(string) {
            string = string.replace(/\r\n/g,"\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {

                var c = string.charCodeAt(n);

                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return utftext;
        }

        function binb2hex (binarray) {
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var str = "";
            for(var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
                hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
            }
            return str;
        }

        s = Utf8Encode(s);
        return binb2hex(core_sha256(str2binb(s), s.length * chrsz));

    }

## IE 감지

        var agt = navigator.userAgent.toLowerCase();

        if( (navigator.appName == 'Netscape' && agt.indexOf('trident') != -1) || (agt.indexOf("msie") != -1)) {
            -- IE일경우
        }else{
            -- IE가 아닐 경우
        }

## React IE 호환 
package.json 

    "dependencies": {
        ...
        "react-app-polyfill": "^2.0.0",
    }
    .
    .
    .
    "browserslist": {
        "production": [
            ...
            "ie 11"
        ],
        "development": [
            ...
            "ie 11"
        ]
    }

index.js 최상단에 import        

    import 'react-app-polyfill/ie11';
    import 'react-app-polyfill/stable';

react-redux immer를 사용할 경우 enableAllPlugins() 사용       

    import { enableAllPlugins } from 'immer';
    import produce from 'immer';
    enableAllPlugins();
    
    
    
## url파일 File로 변환방법

저는 엑셀데이터입니다

    var _url = 'URL';
    if(!_url){return};
    var _jsonData = {
      name: 'webisfree',
      url: 'webisfree.com'
    };
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var _data = this.response;

        let file = new File([_data], "result.xlsx",{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});    
            var reader = new FileReader();
            reader.onload = function () {
                var data = reader.result;
                var workBook = XLSX.read(data, { type: 'binary' });
                workBook.SheetNames.forEach(function (sheetName) {
                    var rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
                    var xlsxData = JSON.parse(JSON.stringify(rows));
                    adminXlsxData = xlsxData;
                    parsingData(xlsxData);
                })
            };
            reader.readAsBinaryString(file);
      };
    };
    
    xhr.open('POST', _url);
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    xhr.send(_jsonData);
    
