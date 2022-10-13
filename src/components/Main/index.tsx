import * as S from './styles'

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, React.js, Next.js e Styled Components'
}) => (
  <S.Wrapper>
    <S.Flex>
      <S.Link href="https://nextjs.org/" target="_blank">
        <S.Logo src="/img/nextjs.svg" alt="Nextjs Logo" />
      </S.Link>

      <S.Link href="https://reactjs.org/" target="_blank">
        <S.Logo src="/img/react.svg" className="react" alt="React Logo" />
      </S.Link>
    </S.Flex>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.LearnMore>Click on the Next and React logos to learn more</S.LearnMore>
  </S.Wrapper>
)

export default Main
