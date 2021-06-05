
React 퍼블리싱을 할 때 편안하게 진행하기 위하여 만든 코드입니다.        

# React styled-components, PC/Mobile
리액트 스타일 컴포넌트와 PC/Mobile 분기 처리를 사용할 때 모든 파일에서         
동일한 import를 하는 번거로움을 줄이기 위하여 하나로 합쳤습니다.        

    import {styled, Mobile, PC} from './mediaStyle.js';

## PC/Mobile 분기처리
PC와 Mobile 분기 처리가 필요할 때 사용하시면 됩니다.        
원하는 분기 픽셀을 max-width로 지정하면 그 픽세을 기준으로 UI가 달라집니다.        


    const Mobile : React.FC = ({children}) => {
        const isMobile = useMediaQuery({query : "(max-width: --- px)"});
        return <React.Fragment>{isMobile && children}</React.Fragment>
    }

    const PC  : React.FC = ({children}) => {
        const isPc = useMediaQuery({query : "(min-width:  ---  px) "});
        return <React.Fragment>{isPc && children}</React.Fragment>
    }

# calc
퍼블리싱 중 calc를 사용하게 되면 가독성이 떨어지고           
코드가 길어지는 것을 방지하기 위하여 만들었습니다.           

    // 기존 css
    @media (max-width: 1024px) {
        width: calc(100vw * (300/428));
        margin: calc(100vw * (10/428)) calc(100vw * (15/428)) calc(100vw * (20/428)) calc(100vw * (30/428));
        font-size: calc(100vw * (15, 428));
    }
    
    // 변환 css
    import {Width, Margin, FontSize} from './mediaStyle.js';
    const mediaPxMb = 1024;
    const mbSize = 428;
    .
    .
    .
    ${Media(mediaPxMb,[
        Width(400, mbSize),
        Margin(10, 15, 20, 30, mbSize),
        FontSize(15, mbSize),
        "display:flex",
    ])}

제작한 코드는 배열 안에서 이루어지기 때문에           
코드의 끝에는 ; 로 끝나는 것이 아닌 , 로 처리하여야 합니다.           
display:flex 같은 사이즈를 지정하는 코드를 넣어야 할 때는           
위 코드처럼 문자열 형식으로 넣으시면 됩니다.           
