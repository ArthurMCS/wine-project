import styled from 'styled-components';

const SideCardStyledComponent = styled.article`
    display: flex;
    align-items: center;
    padding-bottom: 20px;

    div {
        display: inherit;
        justify-content: center;
        flex-direction: column;

        span {
            margin-top: 60px;
        }
    }

    p {
        max-width: 200px;
        text-align: center;
        text-wrap: break-word;
        margin-top: 15px;
    }

    img {
        width: 25%;
        max-height: 110px;
        margin-top: 10px
    }

    svg {
        height: 20px;
        width: 20px;
        cursor: pointer;
        margin: -10px 0 60px 5px;
    }

    span {
        margin-top: 100px;
        color: #b6116e;
    }
`;

export default SideCardStyledComponent;
