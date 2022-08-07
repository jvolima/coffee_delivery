import styled from "styled-components";

interface IconCircleProps {
  color: string;
}

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100vh;
  margin: 80px auto 0;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: var(--yellow-dark);
`;

export const Subtitle = styled.h2`
  margin-top: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--subtitle);
`;

export const Content = styled.div`
  margin-top: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderDetails = styled.div`
  max-width: 526px;
  width: 100%;
  padding: 40px;
  background-color: var(--background);
  background-clip: padding-box;

  border: 1px solid transparent;
  border-radius: 6px 36px;
  box-sizing: border-box;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px; 
    border-radius: inherit; 
    background: linear-gradient(to right, var(--yellow), var(--purple));
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px 0px;
`;

export const IconCircle = styled.div<IconCircleProps>`
  width: 32px;
  height: 32px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 32px;
  background-color: ${({ color }) => color};
  margin-right: 12px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Texts = styled.div`
`;

export const InfoTitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: var(--text);
  line-height: 130%;
`;

export const InfoDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
  line-height: 130%;
`;
