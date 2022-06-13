import styled from 'styled-components';

const SidebarCartStyledComponent = styled.aside`
    right: 0;
    background-color: #f5f5f5;
    box-shadow: -2px 0 4px 0 rgb(0 0 0 / 18%);
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 85vw;
    position: fixed;
    top: 0;
    transition: all .5s;
    width: 360px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        display: none;
    }


    .Sidebar-cart-header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        background: #fff;
        left: -100%;
        height: 60px;
        position: sticky;
        top: 0;
        height: 80px;

        svg {
            height: 45px;
            width: 45px;
            margin-right: 70px;
        }

        span {
            font-size: 28px;
            margin-right: 65px;
            font-family: sans-serif;
            font-size: 18px;
            width: 150px;
        }
    }

    footer {
        display: inherit;
        width: 350px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #fff;
        top: 100%;
        position: sticky;

        .Subtotal-wrap {
            align-items: baseline;
            display: flex;
            justify-content: space-between;
            padding-bottom: 16px;
            padding-top: 16px ;

            .Subtotal-text {
                color: #666;
                font-size: 20px;
                font-weight: 700;
                margin: 0 80px;
            }
        }

        .Subtotal-price {
            color: #b6116e;
            font-size: 22px;
            margin: 0 30px;
            font-family: Lato,Arial,sans-serif;
            font-weight: 400;
            width: 150px;
            overflow: hidden;
        }
    }

    .Button-shop {
        font-size: 16px;
        height: 48px;
        width: 300px;
        line-height: 16px;
        border-radius: 4px;
        border-style: solid;
        border-width: 2px;
        cursor: pointer;
        font-weight: 700;
        padding: 0 32px;
        text-align: center;
        background-color: #7ebc43;
        border-color: #7ebc43;
        color: #fff;
        margin-bottom: 20px;
    }
`;

export default SidebarCartStyledComponent;
