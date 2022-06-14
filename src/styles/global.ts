import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        main {
            display: flex;
            justify-content: center;
            flex-direction: column;
            background: #DEDEDE;
            height: 100%;

            .winesQuantity { 
                text-align: center;
                font-size: 22px;
                margin-top: 30px;
                font-weight: bold;
                font-family: sans-serif;
            }
        }
    }
`;
