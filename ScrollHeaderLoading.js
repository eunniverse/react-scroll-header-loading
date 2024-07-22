import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash.debounce';

// 대문자로 써야함 (React custom hook)
export const CalculateScroll = () => {
    const [percentage, setPercentage] = useState(0);

    // useLayoutEffect 는 동기적으로, 렌더링 전에 호출이 일어나고 useEffect 는 비동기적으로 렌더링 후에 호출이 일어난다.
    // 렌더링 전에 scroll 이벤트 실행이 필요하여 사용 (즉시 반응이 필요)
    useLayoutEffect(() => {

        // scroll 계산하기
        // 함수를 여러 번 호출하고 마지막 호출에서 일정 시간이 지난 후 해당 함수의 기능이 동작하는 기법
        const scroll = debounce(() => {
            // document.scrollingElement : Document 인터페이스의 scrollingElement 속성은 문서를 스크롤하는 Element 에 대한 읽기 전용 참조를 반환
            const { scrollTop, scrollHeight, clientHeight} = document.scrollingElement;

            let currY = scrollTop; // 스크롤한 높이
            let totalY = scrollHeight - clientHeight;//스크롤 가능한 높이
            let yPercentage = (currY / totalY) * 100;//퍼센트 값

            // 숫자이면 percentage 세팅!
            if(!isNaN(yPercentage)) {
                setPercentage(yPercentage);
            }
        }, 10);

        // scroll event 달아주기
        document.addEventListener('scroll', scroll);
    }, []);

    return { percentage };
}

export const ScrollHeaderLoadingBar = ({loadingBarTopColor = '#003185', loadingBarTopHeight = '5px', loadingBarColor = '#2596be', loadingBarHeight = '5px'}) => {
    const { percentage } = CalculateScroll();

    const topDivStyle = {
        width: '100%',
        height: loadingBarTopHeight,
        backgroundColor: loadingBarTopColor
    };

    const bottomDivStyle = {
        width: `${percentage}%`,
        height: loadingBarHeight,
        backgroundColor: loadingBarColor
    }

    return (
        <div style={{width: '100%', position: 'fixed'}}>
            <div style={topDivStyle} />
            <div style={bottomDivStyle}/>
        </div>
    );
}