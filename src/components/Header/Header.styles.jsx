import styled from "styled-components";

import palette from "../../themes/palette";

const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${palette.main};
`;

export { HeaderContainer };