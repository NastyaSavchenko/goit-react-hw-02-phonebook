import styled from 'styled-components';

export const FilterInputStyled = styled.input`
  max-width: 550px;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 2px 30px;

  border: solid 2px #f3848c;
  border-radius: 6px;
  background-color: inherit;

  outline: none;

  font-size: 30px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #f3848c;
  &:hover,
  &:focus {
    border: solid 2px #3c322d;
  }
`;

export const FilterTitleStyled = styled.h3`
  margin-bottom: 30px;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 40px;
`;
