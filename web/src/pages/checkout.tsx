import Head from "next/head";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MapPinLine } from "phosphor-react";
import { Input } from "../components/Form/Input";
import { Navbar } from "../components/Navbar";
import { useCart } from "../hooks/cart";
import { 
  AddressHelp,
  CheckoutInfos, 
  CheckoutTitle, 
  Container, 
  ContainerMoreThanOneInputs, 
  DeliveryInfos, 
  DeliveryTitle, 
  DeliveryTitleContainer, 
  Form, 
  ItemsInfos, 
  ItemsSelected,
  ItemsSelectedTitle,
  PaymentInfos
} from "./styles/checkout";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";

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
  const { itemsInCart } = useCart();

  const { register, handleSubmit, formState } = useForm<CheckoutInfosFormData>({
    resolver: yupResolver(checkoutInfosFormSchema)
  });

  const handleConfirmCheckout: SubmitHandler<CheckoutInfosFormData> = async (values) => {
    console.log(values);
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
            <DeliveryTitleContainer>
              <MapPinLine size={22} color="#C47F17" />
              <DeliveryTitle>Endereço de Entrega</DeliveryTitle>
            </DeliveryTitleContainer>
            <AddressHelp>Informe o endereço onde deseja receber seu pedido</AddressHelp>
            <Form onSubmit={handleSubmit(handleConfirmCheckout)}>
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
          </PaymentInfos>
        </CheckoutInfos>

        <ItemsSelected>
          <ItemsSelectedTitle>Cafés selecionados</ItemsSelectedTitle>
          <ItemsInfos>
            
          </ItemsInfos>
        </ItemsSelected>
      </Container>
    </>
  );
}