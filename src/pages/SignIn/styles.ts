import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 1.25rem;

  button {
    max-width: 280px;
    width: 100%;
    height: 3.75rem;
    background: #7d6af2;
    border-radius: 2.5rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 1.125rem;
    line-height: 1.313rem;
    text-align: center;
    margin-top: 2.5rem;
    color: #ffffff;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
