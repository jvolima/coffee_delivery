import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  width: 100%;
  margin: 32px auto;
  background-color: var(--background);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
`;

export const CoffeeLocation = styled.div`
  background-color: var(--purple-light);
  border-radius: 6px;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoffeeLocationText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  color: var(--purple-dark);

  display: block;
  margin-left: 4px;
`;

export const CartButton = styled.button`
  background-color: var(--yellow-light);
  border: 0;
  border-radius: 6px;
  padding: 8px;
  margin-left: 12px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const ItemsInCart = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: var(--yellow-dark);

  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--white);
`;
