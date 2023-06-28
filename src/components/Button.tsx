import styled from "styled-components";

const light = "#e4cbcb";
const dark = "#75728D";

export const Button = styled.button<{ $variant?: string }>`
  font-size: 1rem;
  background-color: ${({ $variant }) => ($variant === "dark" ? dark : light)};
  border-radius: 1rem;
  width: 130px;
  border: none;
  height: 1.9rem;
  font-family: "Princess Sofia", cursive;
  color: ${({ $variant }) => ($variant === "dark" ? light : dark)};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
