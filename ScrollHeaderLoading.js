import CalculateScroll from 'CalculateScroll.js';
import styled from "styled-components";

const ParentNavDiv = styled.div`
      width: 100%;
      position: fixed;
    `;

const TopNavDiv = styled.div`
      width: 100%;
      height: ${(props) => props.loadingTopBarHeight? `${props.loadingTopBarHeight}px` : '5px'};
      background: ${(props) => props.loadingBarTopColor? props.loadingBarTopColor : '#003185'};
      `;

const ScrollHeaderLoading = (options) => {
    const { percentage } = CalculateScroll();
    const loadingBarTopColor = options.loadingBarTopColor || '#003185';
    const loadingBarTopHeight = options.loadingBarTopHeight || 5;

    const loadingBarColor = options.loadingBarColor || '#2596be';
    const loadingBarHeight = options.loadingBarHeight || 5;

    return (
        <ParentNavDiv>
            <TopNavDiv loadingTopBarHeight={loadingBarTopHeight} loadingBarTopColor={loadingBarTopColor}/>
            <div style={{width: `${percentage}%`, backgroundColor: `${loadingBarColor}`, height: `${loadingBarHeight}px`}}/>
        </ParentNavDiv>
    );
}

export default ScrollHeaderLoading;