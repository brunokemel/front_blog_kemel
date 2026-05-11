import styled, { keyframes } from 'styled-components'

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

export const ConfettiLayer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 20;
`

export const Piece = styled.span<{ $left: number; $delay: number }>`
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
