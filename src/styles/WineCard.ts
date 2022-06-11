import styled from 'styled-components';

const WineCardStyledComponent = styled.article`
    display: flex;
    margin: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    div {
        display: inherit;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 356px;
        width: 256px;
        left: 0%;
        right: 0%;
        top: -0.26%;
        bottom: 14.21%;
        background: #FFFFFF;
        box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    }

    img {
        height: 198.57px;
        width: 178.13px;
    }

    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        text-align: center;
        letter-spacing: -0.222488px;

        color: #1D1D1B;
    }

    .socio span {
        color: rgba(182, 17, 110, 1);
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
    }

    .WineName {
        width:100px;
        word-wrap: break-word;
        letter-spacing: -0.222488px;
        width: 250px;
    }

    .priceAndDiscount {
        display: inherit;
        justify-content: center;
        flex-direction: row;
        box-shadow: none;
        height: 0;
        margin: 18px;

        p {
            text-decoration-line: line-through;
            color: #888888;
            background: #FFFFFF;
            height: 15.57px;
            margin-right: 6px;
            top: calc(50% - 15.57px/2 + 0px);
        }
        span {
            background: #F79552;
            border-radius: 1.94677px;
            left: 51.92%;
            right: 0%;
            top: 6.25%;
            bottom: 6.25%;
            color: #FFFFFF;
            height: 13.63px;
            text-align: center;
        }
    }

    .nonSocio {
        margin-top: 8px;
        text-transform: uppercase;
        color: #888888;
        font-size: 18px;
    }

    button {
        background-color: rgba(126, 188, 67, 1);
        height: 39.36px;
        width: 256px;
        border-radius: 3.89px;
        padding: 12px, 23px, 12px, 23px;
        margin-top: 9.73px;
        border: none;
        color: #fff;
        box-shadow:  0px 0.97px 1.95px 0px rgba(0, 0, 0, 0.2);

        &:hover {
            cursor: pointer;
        }
    }
`;

export default WineCardStyledComponent;
