import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 40px auto 0;

  display: flex;
  justify-content: space-between;
`;

export const CheckoutInfos = styled.div`
  max-width: 640px;
  width: 100%;
`;

export const CheckoutTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--subtitle);
`;

export const DeliveryInfos = styled.div`
  margin-top: 15px;
  padding: 40px;
  background-color: var(--card);
  border-radius: 6px;
  width: 100%;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  margin-left: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: var(--subtitle);
`;

export const SectionSubtitle = styled.h3`
  margin-top: 2px;
  margin-left: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: var(--text);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

export const ContainerMoreThanOneInputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const PaymentInfos = styled.div`
  margin-top: 12px;
  padding: 40px;
  background-color: var(--card);
  border-radius: 6px;
  width: 100%;
`;

export const PaymentMethods = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 12px;
`;

export const ItemsSelected = styled.div`
  max-width: 448px;
  width: 100%;
`;

export const ItemsSelectedTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--subtitle);
`;

export const ItemsInfos = styled.div`
  margin-top: 15px;
  padding: 40px;
  background-color: var(--card);
  border-radius: 6px 44px;
  width: 100%;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
`;

export const ItemContent = styled.div`
  padding: 8px 4px;
  display: flex;
  align-items: center;
`;

export const ItemDetailsAndActions = styled.div`
  width: 100%;
`;

export const ItemTitleAndPrice = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemTitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: var(--subtitle);
`;

export const ItemPrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
`;

export const Functionalities = styled.div`
  margin-top: 8px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  padding: 0px 9px;
  gap: 8px;
  border-radius: 6px;
  background-color: var(--button);
  margin-right: 8px;
`;

export const DecreaseButton = styled.button`
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

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 0px 8px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  background-color: var(--button);

  transition: background-color 0.2s;

  :hover {
    background-color: var(--hover);
  }
`;

export const RemoveTitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  color: var(--text);
  text-transform: uppercase;

  display: block;
  margin-left: 4px;
`;

export const SeparateLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--button);
  margin: 24px 0;
`;