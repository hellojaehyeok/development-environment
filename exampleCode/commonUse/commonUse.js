

// " , " 넣기
function InsertComma(int){
    return (String(int).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'))
}

// 날짜 -> 텍스트 변환
function DateText(date, text){
    let month = String(date.getMonth()+1);
    let _date = String(date.getDate());

    if(month.length == 1){
        month = "0"+String(date.getMonth()+1);
    }
    if(_date.length == 1){
        _date = "0"+String(date.getDate());
    }

    return (`${date.getFullYear()}${text}${month}${text}${_date}`)
}

// 문자열 자르고 "..."넣기
function SliceText(text, int){
    if(text.length < int){return text}
    let newText = text;
    newText=newText.substring(0, int) + "...";
    return newText;
}

export {InsertComma, DateText, SliceText}