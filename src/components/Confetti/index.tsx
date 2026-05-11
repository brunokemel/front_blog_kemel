import * as S from './styles'

interface ConfettiProps {
  active: boolean
}

const pieces = Array.from({ length: 28 }, (_, index) => index)

export function Confetti({ active }: ConfettiProps) {
  if (!active) return null

  return (
    <S.ConfettiLayer>
      {pieces.map((piece) => (
        <S.Piece key={piece} $left={(piece * 37) % 100} $delay={(piece % 7) * 0.08} />
      ))}
    </S.ConfettiLayer>
  )
}
