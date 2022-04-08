import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  gap: 20px;

  button {
    max-width: 280px;
    width: 100%;
    height: 55px;
    background: #7d6af2;
    border-radius: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-top: 40px;
    color: #ffffff;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
