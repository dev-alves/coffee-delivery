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
} from './styles'
import { InputText } from '../../components/InputText'
import { useContext, useState } from 'react'
import { CoffeContext } from '../../contexts/CoffeeContext'
import { Select } from '../../components/Select'
import { TypeSelect } from '../../components/Select/typeSelect'
import { ButtonRemove } from '../../components/Remove'
import { Input } from '../../components/Catalog/styles'

export function Cart() {
  const { coffes } = useContext(CoffeContext)
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<TypeSelect>()

  const formatterBR = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return (
    <Container>
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
              <div>
                <InputText name="CEP" id="cepId" isRequired={true} size={200} />
              </div>
              <div>
                <InputText name="Rua" id="ruaId" isRequired={true} size={560} />
              </div>
              <div>
                <InputText
                  name="Número"
                  id="numId"
                  isRequired={true}
                  size={200}
                />
                <InputText
                  name="Complemento"
                  id="complementoId"
                  isRequired={false}
                  size={348}
                />
              </div>
              <div>
                <InputText
                  name="Bairro"
                  id="bairroId"
                  isRequired={true}
                  size={200}
                />
                <InputText
                  name="Cidade"
                  id="cityId"
                  isRequired={true}
                  size={276}
                />
                <InputText name="UF" id="ufId" isRequired={true} size={60} />
              </div>
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
              <div>
                <Select
                  type={TypeSelect.CREDIT_CARD}
                  setSelectedItem={setSelectedPaymentMethod}
                  isSelect={selectedPaymentMethod === TypeSelect.CREDIT_CARD}
                />
              </div>
              <div>
                <Select
                  type={TypeSelect.DEBIT_CARD}
                  setSelectedItem={setSelectedPaymentMethod}
                  isSelect={selectedPaymentMethod === TypeSelect.DEBIT_CARD}
                />
              </div>
              <div>
                <Select
                  type={TypeSelect.MONEY}
                  setSelectedItem={setSelectedPaymentMethod}
                  isSelect={selectedPaymentMethod === TypeSelect.MONEY}
                />
              </div>
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
                            <Minus weight="bold" />
                            <Input value={0} />
                            <Plus weight="bold" />
                          </CoffePlusAndMinusContainer>
                          <ButtonRemove text="Remover" />
                        </CoffesInputsContainer>
                      </div>
                    </CoffeAmountDetailsContainer>
                  </CoffeAmountContainer>
                  <CoffeValueContainer>
                    <span>{formatterBR.format(9.9).replace('R$', '')}</span>
                  </CoffeValueContainer>
                </div>
                <hr />
              </CoffesContainer>
            ))}
          </FormInfoDetailsOrder>
        </DetailsOrderContainer>
      </FormContainer>
    </Container>
  )
}
