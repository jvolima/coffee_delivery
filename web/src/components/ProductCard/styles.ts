import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 310px;
  background-color: var(--card);
  border-radius: 6px 36px;

  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const ContainerImage = styled.div`
  position: absolute;
  top: -20px;
`;

export const Categories = styled.div`
  margin-top: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Category = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--yellow-light);
  border-radius: 8px;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.625rem;
  color: var(--yellow-dark);
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--subtitle);

  margin-top: 16px;
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: var(--label);
  text-align: center;

  margin: 0 20px;
  margin-top: 8px;
`;

export const PriceAndCartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px 20px;
`;

export const Price = styled.h4`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--text);
`;

export const Sign = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: var(--text);
`;

export const CartAndQuantity = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 9px;
  gap: 8px;
  border-radius: 6px;
  background-color: var(--button);
  margin-right: 8px;
`;

export const RemoveButton = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: var(--title);
`;

export const AddButton = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;
  border-radius: 6px;
  border: 0;
  background-color: var(--purple-dark);

  transition: background-color 0.2s;

  :hover {
    background-color: var(--purple);
  }
`;
