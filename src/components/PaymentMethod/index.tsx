import { CreditCard, Bank, Money } from "phosphor-react";
import { Container, Title } from "./styles";


interface PaymentMethodProps {
  method: 'credit-card' | 'debit-card' | 'cash';
  isSelected: boolean;
  handleSelectPaymentMethod: (method: 'credit-card' | 'debit-card' | 'cash') => void;
}

export function PaymentMethod({ method, isSelected, handleSelectPaymentMethod }: PaymentMethodProps) {
  return (
    <Container onClick={() => handleSelectPaymentMethod(method)} isSelected={isSelected}>
      { 
        method === 'credit-card' ? <CreditCard size={16} color="#8047F8" /> 
        : method === 'debit-card' ? <Bank size={16} color="#8047F8" /> 
        : <Money size={16} color="#8047F8" /> 
      }
      <Title>
        { method === 'credit-card' ? 'cartão de crédito' : method === 'debit-card' ? 'cartão de débito' : 'dinheiro' }
      </Title>
    </Container>
  )
}