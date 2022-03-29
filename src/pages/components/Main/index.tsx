import * as Style from './styles'

const Main = () => (
  <Style.Wrapper>
    <Style.Logo
      src="/images/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <Style.Title>Boilerplate</Style.Title>
    <Style.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </Style.Description>
    <Style.Illustration
      src="/images/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </Style.Wrapper>
)

export default Main
