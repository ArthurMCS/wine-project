import styled from 'styled-components';

const NavBarStyledComponent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 88.23px;
    background: #FFFFFF;
    position: sticky;
    top: 0;

    button {
        border: none;
    }

    .Icons-wrap {
        display: inherit;
        align-items: center;
        margin-right: -100px;
    }

    .Logo-image [
        position: absolute;
    ]

    .UserMenu-toggler {
        color: #fff;
        font-size: 10px;
        text-align: center;
    }

    .UserMenu-togglerPhoto {
        position: relative;
        margin: 16px 20px;
        width: 56px;
        height: 56px;
        overflow: hidden;
    }

    .UserMenu-togglerPhoto img{
        position: relative;
        margin: 0;
        display: block;
        left: -56px;
        width: 168px;
        height: 112px;
    }

    .MainMenu-search-icon {
        background-image: url(https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg);
        background-position-x: initial;
        background-position-y: initial;
        background-size: initial;
        background-repeat-x: initial;
        background-repeat-y: initial;
        background-attachment: initial;
        background-origin: content-box;
        background-clip: initial;
        background-color: initial;
        background-origin: content-box;
        cursor: pointer;
        display: inline-block;
        float: right;
        height: 56px;
        margin: 16px 0px;
        outline: 0;
        width: 56px;
    }

    .active {
        background-position-y: 56px;
    }

    .WineboxButton {
        cursor: pointer;
        display: inline-block;
        position: relative;
    }

    .WineboxButton-image-wrap { 
        height: 56px;
        overflow: hidden;
        width: 56px;
    }

    .WineboxButton-image {
        left: -112px;
        position: relative;
    }

    .WineboxButton-quantity {
        align-items: center;
        background-color: #f5f5f5;
        border-radius: 50%;
        bottom: -1px;
        color: #5cb79f;
        display: flex;
        font-size: 11px;
        height: 20px;
        justify-content: center;
        letter-spacing: normal;
        line-height: normal;
        position: absolute;
        right: -1px;
        width: 20px;
    }

    .Searcher-Wrap {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    /* From uiverse.io by @alexruix */
    /* From uiverse.io by @alexruix */
    .input {
        line-height: 28px;
        border: 2px solid transparent;
        border-bottom-color: #777;
        padding: .2rem 0;
        outline: none;
        background-color: transparent;
        color: #0d0c22;
        transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .input:focus, input:hover {
        outline: none;
        padding: .2rem 1rem;
        border-radius: 1rem;
        border-color: #c81a78;
    }

    .input::placeholder {
        color: #777;
    }

    .input:focus::placeholder {
    opacity: 0;
    transition: opacity .3s;
    }
`;

export default NavBarStyledComponent;
