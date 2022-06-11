import styled from 'styled-components';

const NavBarStyledComponent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 88.23px;

    div {
        display: inherit;
        align-items: center;
        justify-content: space-between;
        width: 200px;

        button {
            position: absolute;
            display: inherit;
            align-items: center;
            justify-content: center;
            height: 56px;
            width: 56px;
            border: 1px solid black;
            border-radius: 100%;
            background-color: #fff;
        }

        svg {
            height: 41.66px;
            width: 41.66px;
            left: 3.16px;
            top: 3.16px;
            border-radius: 0px;
        }
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
        margin-left: -120%;
    }

    .input:focus, input:hover {
        outline: none;
        padding: .2rem 1rem;
        border-radius: 1rem;
        border-color: #7a9cc6;
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
