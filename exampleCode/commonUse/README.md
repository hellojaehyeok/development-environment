


# 숫자에 " , " 넣기
숫자를 표기할 때 세 번째 자리마다 , 를 함수입니다.    
       
사용법 -> InsertComma( 숫자 )         
       
ex) InsertComma(1000000) // 1,000,000        

    function InsertComma(int){
        return (String(int).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'))
    }

# 날짜변환
날짜를 변환해 주는 함수입니다.         
       
사용법 -> DateText( 날짜, 날짜 사이에 넣을 텍스트)       
       
ex) DateText(new Date("2021-01-01"), ",")  // 2021.01.01       
두 번째 파라미터인 text를 넣지 않을 시에는 undefined가 뜹니다.       

    function DateText(date, text){
        let month = String(date.getMonth()+1).length;
        let _date = String(date.getDate()).length;
        if(month == 1){
            month = "0"+String(date.getMonth()+1);
        }
        if(_date == 1){
            _date = "0"+String(date.getDate());
        }
        return (`${date.getFullYear()}${text}${month}${text}${_date}`)
    }

# 텍스트 자르기
긴 텍스트를 자르는 함수입니다.       
CSS를 이용하여 자를 수 있지만 여러 줄을 자르고 싶을 때에는       
크로스 브라우징이 불가능하여 js로 제작하였습니다.       
       
사용법 ->  SliceText( 텍스트, 자르는 기준점)       
       
ex) SliceText("가나다라마바사", 3) // 가나다...       

    function SliceText(text, int){
        let newText = text;
        newText=newText.substring(0, int) + "...";
        return newText;
    }

