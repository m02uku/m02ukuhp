import styled from "styled-components";

const MainPage = () => {
    return (
        <MainPageDiv>
            <PaddedDiv>
                <RainbowTitle>モ ズ ク の ホ ー ム ペ ー ジ へ よ う こ そ ！</RainbowTitle>
            </PaddedDiv>
            <p>☆ ☆ ☆ ゆっくりしていってね ☆ ☆ ☆</p>
            <p>^^</p>
        </MainPageDiv>
    );
};

const MainPageDiv = styled.div`
    width: 80%;
    background-color: #e4d2d8;
    text-align: center;
`;

const RainbowTitle = styled.h1`
    background: linear-gradient(to right, Magenta, yellow, Cyan, Magenta) 0% center/200%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline;
    font-size: 250%;
    font-weight: bold;
    font-style: italic;
`;

const PaddedDiv = styled.div`
    padding-top: 30px;
`;

export default MainPage;
