import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 40px auto 0;

  display: flex;
  justify-content: space-between;
`;

export const CheckoutInfos = styled.div`
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
`;

export const PaymentInfos = styled.div`
  margin-top: 12px;
  padding: 40px;
  background-color: var(--card);
  border-radius: 6px;
`;

export const ItemsSelected = styled.div`
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
`;