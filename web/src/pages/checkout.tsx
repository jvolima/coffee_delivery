import Head from "next/head";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CurrencyDollar, MapPinLine, Minus, Plus, Trash } from "phosphor-react";
import { Input } from "../components/Form/Input";
import { Navbar } from "../components/Navbar";
import { useCart } from "../hooks/cart";
import { 
  SectionSubtitle,
  CheckoutInfos, 
  CheckoutTitle, 
  Container, 
  ContainerMoreThanOneInputs, 
  DeliveryInfos, 
  SectionTitle, 
  SectionTitleContainer, 
  Form, 
  ItemsInfos, 
  ItemsSelected,
  ItemsSelectedTitle,
  PaymentInfos,
  PaymentMethods,
  ItemContainer,
  Items,
  ItemContent,
  SeparateLine,
  ItemTitleAndPrice,
  ItemTitle,
  ItemPrice,
  Functionalities,
  RemoveButton,
  RemoveTitle,
  ItemDetailsAndActions,
  QuantityContainer,
  DecreaseButton,
  Quantity,
  AddButton,
  PriceSection,
  ConfirmButton,
  TotalContainer,
  TotalPrice,
  TotalTitle,
  ExpenseContainer,
  ExpenseTitle,
  ExpensePrice
} from "./styles/checkout";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { PaymentMethod } from "../components/PaymentMethod";
import { useState } from "react";

interface Item {
  id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}

type CheckoutInfosFormData = {
  cep: string;
  address: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  uf: string;
}

const checkoutInfosFormSchema = yup.object().shape({
  cep: yup.string().required('CEP obrigatório'),
  address: yup.string().required('Endereço obrigatório'),
  number: yup.number().required('Número do local obrigatório').typeError('Digite um número válido'),
  complement: yup.string().notRequired(),
  district: yup.string().required('Bairro obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  uf: yup.string().required('Unidade federativa obrigatória')
});

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'debit-card' | 'cash' | null>(null);

  const { itemsInCart, removeItem, addItemToCart } = useCart();

  const { register, handleSubmit, formState } = useForm<CheckoutInfosFormData>({
    resolver: yupResolver(checkoutInfosFormSchema)
  });

  const handleConfirmCheckout: SubmitHandler<CheckoutInfosFormData> = async (values) => {
    console.log(values);
    console.log(paymentMethod);
  }

  function handleSelectPaymentMethod(method: 'credit-card' | 'debit-card' | 'cash') {
    setPaymentMethod(method);
  }

  function handleAddProduct(id: string) {
    const item = itemsInCart.find(item => item.id === id) as Item;
    item.quantity += 1;

    addItemToCart(item);
  }

  function handleDecreaseProduct(id: string) {
    const item = itemsInCart.find(item => item.id === id) as Item;

    if(item.quantity > 1) {
      item.quantity -= 1;

      addItemToCart(item);
    }
  }

  function handleRemoveProduct(id: string) {
    removeItem(id);
  }

  return (
    <>
      <Head>
        <title>Finalizar Compra | Coffee Delivery</title>
      </Head>
      <Navbar cartItems={itemsInCart} />
      <Container>
        <CheckoutInfos>
          <CheckoutTitle>Complete seu pedido</CheckoutTitle>
          <DeliveryInfos>
            <SectionTitleContainer>
              <MapPinLine size={22} color="#C47F17" />
              <SectionTitle>Endereço de Entrega</SectionTitle>
            </SectionTitleContainer>
            <SectionSubtitle>Informe o endereço onde deseja receber seu pedido</SectionSubtitle>
            <Form>
              <Input 
                placeholder="CEP"
                width="200px" 
                error={formState.errors.cep as FieldError | undefined}
                {...register("cep")}
              />
              <Input 
                placeholder="Rua" 
                error={formState.errors.address as FieldError | undefined}
                {...register("address")}
              />
              <ContainerMoreThanOneInputs>
                <Input 
                  type="number" 
                  placeholder="Número" 
                  width="200px" 
                  error={formState.errors.number as FieldError | undefined}
                {...register("number")}
                />
                <Input 
                  placeholder="Complemento" 
                  width="348px" 
                  extraPlaceholder="Opcional" 
                  error={formState.errors.complement as FieldError | undefined}
                {...register("complement")}
                />
              </ContainerMoreThanOneInputs>
              <ContainerMoreThanOneInputs>
                <Input 
                  placeholder="Bairro" 
                  width="200px" 
                  error={formState.errors.district as FieldError | undefined}
                  {...register("district")}
                />
                <Input 
                  placeholder="Cidade" 
                  width="276px" 
                  error={formState.errors.city as FieldError | undefined}
                  {...register("city")}
                />
                <Input 
                  placeholder="UF" 
                  width="60px" 
                  error={formState.errors.uf as FieldError | undefined}
                  {...register("uf")}
                />
              </ContainerMoreThanOneInputs>
            </Form>
          </DeliveryInfos>

          <PaymentInfos>
            <SectionTitleContainer>
              <CurrencyDollar size={22} color="#8047F8" />
              <SectionTitle>Pagamento</SectionTitle>
            </SectionTitleContainer>
            <SectionSubtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SectionSubtitle>
            <PaymentMethods>
              <PaymentMethod 
                handleSelectPaymentMethod={handleSelectPaymentMethod} 
                method="credit-card" 
                isSelected={paymentMethod === "credit-card"} 
              />
              <PaymentMethod 
                handleSelectPaymentMethod={handleSelectPaymentMethod}
                method="debit-card" 
                isSelected={paymentMethod === "debit-card"} 
              />
              <PaymentMethod 
                handleSelectPaymentMethod={handleSelectPaymentMethod}
                method="cash" 
                isSelected={paymentMethod === "cash"} 
              />
            </PaymentMethods>
          </PaymentInfos>
        </CheckoutInfos>

        <ItemsSelected>
          <ItemsSelectedTitle>Cafés selecionados</ItemsSelectedTitle>
          <ItemsInfos>
            <Items>
              {
                itemsInCart.map(item => (
                  <ItemContainer key={item.id}>
                    <ItemContent>
                      <img src={item.image_url} width={64} height={64} alt="Item image" />
                      <ItemDetailsAndActions>
                        <ItemTitleAndPrice>
                          <ItemTitle>{item.name}</ItemTitle>
                          <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                        </ItemTitleAndPrice>
                        <Functionalities>
                          <QuantityContainer>
                            <DecreaseButton onClick={() => handleDecreaseProduct(item.id)}>
                              <Minus size={14} weight="bold" color="#8047F8" />
                            </DecreaseButton>
                            <Quantity>{item.quantity}</Quantity>
                            <AddButton onClick={() => handleAddProduct(item.id)}>
                              <Plus size={14} weight="bold" color="#8047F8" />
                            </AddButton>
                          </QuantityContainer>
                          <RemoveButton onClick={() => handleRemoveProduct(item.id)}>
                            <Trash size={16} color="#8047F8" />
                            <RemoveTitle>remover</RemoveTitle>
                          </RemoveButton>
                        </Functionalities>
                      </ItemDetailsAndActions>
                    </ItemContent>
                    <SeparateLine />
                  </ItemContainer>
                ))
              }
            </Items>

            <PriceSection>
              <ExpenseContainer>
                <ExpenseTitle>Total de itens</ExpenseTitle>
                <ExpensePrice>R$ 29.70</ExpensePrice>
              </ExpenseContainer>

              <ExpenseContainer>
                <ExpenseTitle>Entrega</ExpenseTitle>
                <ExpensePrice>R$ 3.50</ExpensePrice>
              </ExpenseContainer>

              <TotalContainer>
                <TotalTitle>Total</TotalTitle>
                <TotalPrice>R$ 33.20</TotalPrice>
              </TotalContainer>
              
              <ConfirmButton onClick={handleSubmit(handleConfirmCheckout)}>Confirmar pedido</ConfirmButton>
            </PriceSection>
          </ItemsInfos>
        </ItemsSelected>
      </Container>
    </>
  );
}