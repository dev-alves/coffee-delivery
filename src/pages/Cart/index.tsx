import { MapPinLine } from 'phosphor-react'
import { Address, AddressContainer, Container, FormContainer } from './styles'
import { InputText } from '../../components/InputText'

export function Cart() {
  return (
    <Container>
      <h1>Complete seu pedido</h1>
      <AddressContainer>
        <Address>
          <div>
            <MapPinLine size={22} />
          </div>
          <div>
            <span>Endereço de entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Address>
        <FormContainer>
          <div>
            <InputText name="CEP" id="cepId" isRequired={true} size={200} />
          </div>
          <div>
            <InputText name="Rua" id="ruaId" isRequired={true} size={560} />
          </div>
          <div>
            <InputText name="Número" id="numId" isRequired={true} size={200} />
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
            <InputText name="Cidade" id="cityId" isRequired={true} size={276} />
            <InputText name="UF" id="ufId" isRequired={true} size={60} />
          </div>
        </FormContainer>
      </AddressContainer>
    </Container>
  )
}
