import styled from 'styled-components';

const Title = styled.h1`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 34px;
    line-height: 44px;
    color: ${({ theme }) => theme.colors.text};
`;

export default Title;
