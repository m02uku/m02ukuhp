import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <SidebarDiv>
            <PaddedDiv>
                <h3>メニュー</h3>
                <ul>
                    <li>
                        <Link to="/">トップ</Link>
                    </li>
                    <li>はじめに</li>
                    <li>更新情報</li>
                    <li>
                        <Link to="/links">リンク集</Link>
                    </li>
                </ul>
            </PaddedDiv>
        </SidebarDiv>
    );
};

const SidebarDiv = styled.div`
    width: 20%;
    background-color: #fef263;
    white-space: nowrap;
`;

const PaddedDiv = styled.div`
    padding: 10px 30px;
`;

export default Sidebar;
