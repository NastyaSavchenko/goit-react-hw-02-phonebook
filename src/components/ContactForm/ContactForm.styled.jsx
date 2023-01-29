import styled from 'styled-components';

export const FormTitle = styled.h3`
  margin-bottom: 20px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 40px;
`;

export const FormInput = styled.input`
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

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 558px;
  width: 100%;
  height: 70px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 40px;
  cursor: pointer;

  border-radius: 6px;
  color: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(248, 110, 103, 0.63) 0%,
    rgba(253, 86, 143, 0.86) 100%
  );
  box-shadow: 0px 7px 27px -2px rgba(253, 88, 140, 0.35);
  border: inherit;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 40px;

  &:hover,
  &:focus {
    border: solid 1px #f3848c;
    color: #f3848c;
    background: #ffffff;
    filter: drop-shadow(10px 15px 25px rgba(232, 183, 183, 0.45));
  }
`;
