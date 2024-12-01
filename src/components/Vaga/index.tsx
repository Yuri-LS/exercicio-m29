import { FonteTituloVaga, LiVaga, VagaLink } from './styles'

type Props = {
  titulo?: string
  localizacao?: string
  nivel?: string
  modalidade?: string
  salarioMin?: number
  salarioMax?: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <LiVaga>
    <FonteTituloVaga>{props.titulo}</FonteTituloVaga>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </LiVaga>
)

export default Vaga