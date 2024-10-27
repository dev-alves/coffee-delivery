import { MapPinLine } from 'phosphor-react'
import { AddressInputsContainer, Container } from './styles'
import { InputText } from '../../InputText'

export function AddressForm() {
  return (
    <Container>
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
        <InputText text="CEP" name="cep" id="cepId" size={200} /> 
        <InputText text="Rua" name="rua" id="ruaId" />
        <InputText
          text="Número"
          type="number"
          name="numero"
          id="numId"
          size={200}
        />
        <InputText
          text="Complemento"
          name="complemento"
          id="complementoId"
          isRequired={false}
          size={348}
        />
        <InputText text="Bairro" name="bairro" id="bairroId" size={200} />
        <InputText text="Cidade" name="cidade" id="cityId" size={276} />
        <InputText text="UF" name="uf" id="ufId" size={60} />
      </AddressInputsContainer>
    </Container>
  )
}
