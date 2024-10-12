import { CurrencyDollar, MapPinLine, Minus, Plus } from 'phosphor-react'
import {
  FormInfoAddressContainer,
  AddressInputsContainer,
  Container,
  FormContainer,
  FormInfoPaymentContainer,
  PaymentInfoContainer,
  OrderAddressContainer,
  DetailsOrderContainer,
  FormInfoDetailsOrder,
  CoffesContainer,
  CoffeAmountContainer,
  CoffeAmountDetailsContainer,
  CoffesInputsContainer,
  CoffePlusAndMinusContainer,
  CoffeValueContainer,
  FooterContainer,
  FooterInfoValues,
  FooterButtonSubmitContainer,
  FooterInfoLabels,
} from './styles'
import { InputText } from '../../components/InputText'
import { MouseEvent, useContext, useState } from 'react'
import { Coffe, CoffeContext } from '../../contexts/CoffeeContext'
import { PaymentMethod } from '../../components/Select/typeSelect'
import { ButtonRemove } from '../../components/Remove'
import { Input } from '../../components/Catalog/styles'
import { FormProvider, useForm } from 'react-hook-form'
import { Select } from '../../components/Select'
import { ButtonPrimary } from '../../components/Primary'

export interface ICartForm {}

export function Cart() {
  const { coffes, setNewCoffe, deleteItem } = useContext(CoffeContext)
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>()
  const methods = useForm()

  const formatterBR = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleSubmitForm(event: MouseEvent<HTMLButtonElement>) {
    event?.preventDefault()
    console.log('methods.getValues()', methods.getValues())
  }

  function handleDecrementCoffeAmount(coffe: Coffe) {
    const updatedCoffe = {
      ...coffe,
      amount: coffe.amount - 1,
    }
    if (coffe.amount > 0) {
      setNewCoffe(updatedCoffe)
    }

    if (updatedCoffe.amount === 0) {
      deleteItem(coffe)
    }
  }

  function handleIncrementCoffeAmount(coffe: Coffe) {
    const updatedCoffe = {
      ...coffe,
      amount: coffe.amount + 1,
    }
    setNewCoffe(updatedCoffe)
  }

  function handleButtonRemoveCoffe(
    coffe: Coffe,
    event: MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault()
    deleteItem(coffe)
  }

  return (
    <Container>
      <FormProvider {...methods}>
        <FormContainer>
          <OrderAddressContainer>
            <h1>Complete seu pedido</h1>
            <FormInfoAddressContainer>
              <header>
                <div>
                  <MapPinLine size={22} />
                </div>
                <div>
                  <h1>Endereço de entrega</h1>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </header>
              <AddressInputsContainer>
                <InputText
                  text="CEP"
                  name="cep"
                  id="cepId"
                  isRequired={true}
                  size={200}
                />
                <InputText
                  text="Rua"
                  name="rua"
                  id="ruaId"
                  isRequired={true}
                  size={560}
                />
                <InputText
                  text="Número"
                  name="numero"
                  id="numId"
                  isRequired={true}
                  size={200}
                />
                <InputText
                  text="Complemento"
                  name="complemento"
                  id="complementoId"
                  isRequired={false}
                  size={348}
                />
                <InputText
                  text="Bairro"
                  name="bairro"
                  id="bairroId"
                  isRequired={true}
                  size={200}
                />
                <InputText
                  text="Cidade"
                  name="cidade"
                  id="cityId"
                  isRequired={true}
                  size={276}
                />
                <InputText
                  text="UF"
                  name="uf"
                  id="ufId"
                  isRequired={true}
                  size={60}
                />
              </AddressInputsContainer>
            </FormInfoAddressContainer>
            <FormInfoPaymentContainer>
              <header>
                <div>
                  <CurrencyDollar />
                </div>
                <div>
                  <h1>Pagamento</h1>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </header>
              <PaymentInfoContainer>
                {Object.values(PaymentMethod).map((payment) => {
                  return (
                    <Select
                      key={payment}
                      registerElementName={'paymentMethod'}
                      type={payment}
                      setSelectedItem={setSelectedPaymentMethod}
                      isSelect={selectedPaymentMethod === payment}
                    />
                  )
                })}
              </PaymentInfoContainer>
            </FormInfoPaymentContainer>
          </OrderAddressContainer>
          <DetailsOrderContainer>
            <h1>Cafés selecionados</h1>
            <FormInfoDetailsOrder>
              {coffes.map((coffe) => (
                <CoffesContainer key={coffe.id}>
                  <div>
                    <CoffeAmountContainer>
                      <div>
                        <img src={coffe.img} alt={coffe.alt} />
                      </div>
                      <CoffeAmountDetailsContainer>
                        <div>
                          <span>{coffe.name}</span>
                          <CoffesInputsContainer>
                            <CoffePlusAndMinusContainer>
                              <Minus
                                weight="bold"
                                onClick={() =>
                                  handleDecrementCoffeAmount(coffe)
                                }
                              />
                              <Input readOnly value={coffe.amount} />
                              <Plus
                                weight="bold"
                                onClick={() =>
                                  handleIncrementCoffeAmount(coffe)
                                }
                              />
                            </CoffePlusAndMinusContainer>
                            <ButtonRemove
                              text="Remover"
                              handleClick={(
                                event: MouseEvent<HTMLButtonElement>,
                              ) => handleButtonRemoveCoffe(coffe, event)}
                            />
                          </CoffesInputsContainer>
                        </div>
                      </CoffeAmountDetailsContainer>
                    </CoffeAmountContainer>
                    <CoffeValueContainer>
                      <span>
                        {formatterBR
                          .format(coffe.price * coffe.amount)
                          .replace('R$', '')}
                      </span>
                    </CoffeValueContainer>
                  </div>
                  <hr />
                </CoffesContainer>
              ))}
              <FooterContainer>
                <FooterInfoLabels>
                  <div>
                    <span>Total de itens</span>
                  </div>
                  <div>
                    <span>Entrega</span>
                  </div>
                  <div>
                    <span>Total</span>
                  </div>
                </FooterInfoLabels>
                <FooterInfoValues>
                  <div>
                    <span>
                      {formatterBR
                        .format(
                          coffes.reduce((accumul, current) => {
                            return accumul + current.price * current.amount
                          }, 0),
                        )
                        .replace('R$', '')}
                    </span>
                  </div>
                  <div>
                    <span>{formatterBR.format(47.5).replace('R$', '')}</span>
                  </div>
                  <div>
                    <span>
                      {formatterBR
                        .format(
                          coffes.reduce((accumul, current) => {
                            return accumul + current.price * current.amount
                          }, 0) + 47.5,
                        )
                        .replace('R$', '')}
                    </span>
                  </div>
                </FooterInfoValues>
              </FooterContainer>
              <FooterButtonSubmitContainer>
                <ButtonPrimary
                  text="Confirmar pedido"
                  handleSubmit={handleSubmitForm}
                />
              </FooterButtonSubmitContainer>
            </FormInfoDetailsOrder>
          </DetailsOrderContainer>
        </FormContainer>
      </FormProvider>
    </Container>
  )
}
