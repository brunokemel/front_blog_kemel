import styled, { keyframes } from 'styled-components'

interface ConfettiProps {
  active: boolean
}

const pieces = Array.from({ length: 28 }, (_, index) => index)

export function Confetti({ active }: ConfettiProps) {
  if (!active) return null

  return (
    <ConfettiLayer>
      {pieces.map((piece) => (
        <Piece key={piece} $left={(piece * 37) % 100} $delay={(piece % 7) * 0.08} />
      ))}
    </ConfettiLayer>
  )
}

const fall = keyframes`
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 1;
  }

  100% {
    transform: translateY(100vh) rotate(460deg);
    opacity: 0;
  }
`

const ConfettiLayer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 20;
`

const Piece = styled.span<{ $left: number; $delay: number }>`
  position: absolute;
  top: -20px;
  left: ${({ $left }) => $left}%;
  width: 10px;
  height: 16px;
  background: ${({ $left }) => ($left % 2 === 0 ? '#f97316' : '#ffd166')};
  border: 1px solid #b45309;
  animation: ${fall} 1.7s linear forwards;
  animation-delay: ${({ $delay }) => $delay}s;
`
