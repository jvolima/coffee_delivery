import styled from "styled-components";

interface BenefitIconCircleProps {
  circleColor: string;
}

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

export const AboutContainer = styled.div`
  margin-top: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Texts = styled.div`
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: var(--title);
  line-height: 130%;
`;

export const SubTitle = styled.h2`
  margin-top: 16px;
  margin-bottom: 70px;

  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--subtitle);
  line-height: 130%;
`;

export const Benefits = styled.div`
  display: flex;
  align-items: center;
`;

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

export const BenefitIconCircle = styled.div<BenefitIconCircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${({ circleColor }) => circleColor};
  margin-right: 12px;
`;

export const BenefitText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: var(--text);
`;