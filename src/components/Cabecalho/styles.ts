import styled from 'styled-components'

export const EstiloCabecalho = styled.header`
  background-color: ${(props) => props.theme.corSecundaria};
  text-align: center;
  padding: 24px 0;
`

export const FonteCabecalho = styled.h1`
  color: ${(props) => props.theme.corPrincipal};
`
