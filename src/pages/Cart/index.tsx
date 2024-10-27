import {
  Container,
  FormContainer,
  OrderAddressContainer,
  CoffesContainer,
  CoffeAmountContainer,
  CoffeAmountDetailsContainer,
  CoffeValueContainer,
  FooterContainer,
  FooterInfoValues,
  FooterButtonSubmitContainer,
  FooterInfoLabels,
  PlusAndMinusAndRemoveContainer,
} from './styles'
import { MouseEvent, useContext } from 'react'
import { Coffe, CoffeContext } from '../../contexts/CoffeeContext'
import { FormProvider, useForm } from 'react-hook-form'
import { ButtonPrimary } from '../../components/Primary'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { PaymentMethodUtils } from '../../utils/PaymentMethodUtils'
import { AddressForm } from '../../components/Forms/Address'
import { PaymentOptions } from '../../components/PaymentOptions'
import { Detail } from '../../components/Detail'
import { PlusAndMinus } from '../../components/PlusAndMinus'
import { ButtonRemove } from '../../components/Remove'

const formValitionSchema = zod.object({
  cep: zod.string().min(8, 'O cep está inválido'),
  numero: zod.number().positive('O número deve ser maior que zero'),
  rua: zod.string().min(4, 'Required'),
  cidade: zod.string().min(3, 'Required'),
  uf: zod.string(),
  paymentMethod: zod.string().min(1, 'Required'),
  bairro: zod.string(),
  complemento: zod.string().optional(),
})

type FormData = zod.infer<typeof formValitionSchema>

export function Cart() {
  const { coffes, setNewCoffe, deleteItem, resetState } =
    useContext(CoffeContext)

  const methods = useForm<FormData>({
    resolver: zodResolver(formValitionSchema),
  })
  const {
    handleSubmit,
    formState: { isValid },
  } = methods

  const isValidToSubmitForm = isValid && coffes.length > 0

  const navigate = useNavigate()

  const formatterBR = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleSubmitForm(data: FormData) {
    event?.preventDefault()
    resetState()
    navigate('/cart/checkout', {
      state: {
        paymentMethod: PaymentMethodUtils.getValueFromEnum(data.paymentMethod),
        numero: data.numero,
        rua: data.rua,
        uf: data.uf,
        estado: data.cidade,
        bairro: data.bairro,
        cidade: data.cidade,
      },
    })
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
            <AddressForm />
            <PaymentOptions />
          </OrderAddressContainer>
          <Detail title="Cafés selecionados">
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
                        <PlusAndMinusAndRemoveContainer>
                          <PlusAndMinus
                            handleIncrement={() =>
                              handleIncrementCoffeAmount(coffe)
                            }
                            handleDecrement={() =>
                              handleDecrementCoffeAmount(coffe)
                            }
                            amount={coffe.amount}
                          />
                          <ButtonRemove
                            text="Remover"
                            handleClick={(
                              event: MouseEvent<HTMLButtonElement>,
                            ) => handleButtonRemoveCoffe(coffe, event)}
                          />
                        </PlusAndMinusAndRemoveContainer>
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
                disabled={!isValidToSubmitForm}
                text="Confirmar pedido"
                handleSubmit={handleSubmit(handleSubmitForm)}
              />
            </FooterButtonSubmitContainer>
          </Detail>
        </FormContainer>
      </FormProvider>
    </Container>
  )
}
