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


### Vanila JavaScript
순수 자바스크립트를 사용하여 웹 개발을 진행할 때 ES6 문법을 사용하면
IE 등 일부 웹브라우저에서는 작동이 불가하여 피하는 게 좋다.