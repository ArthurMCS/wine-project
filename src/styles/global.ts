import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        main {
            display: flex;
            /* align-items: center; */
            justify-content: center;
            flex-direction: column;
            background: #DEDEDE;;
        }
    }
`;
