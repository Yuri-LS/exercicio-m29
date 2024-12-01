import { FormEvent, useState } from 'react'

import { BtnFormVagas, InputVagas, VagasForm } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <VagasForm onSubmit={aoEnviarForm}>
      <InputVagas
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnFormVagas type="submit">Pesquisar</BtnFormVagas>
    </VagasForm>
  )
}
export default FormVagas
