import styled from 'styled-components';

const FilterByPriceStyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: none;
    margin-left: 100px;
    width: 180px;
    margin-top: 100px;

    h4 {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    label {
        font-family: sans-serif;
        margin-top: 10px;
        input {
            margin: 5px;
        }

    }
`;

export default FilterByPriceStyledComponent;
