import styled from 'styled-components'

export const AuthWrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
`

export const AuthCard = styled.section`
  width: min(100%, 460px);
  background: #ffffff;
  border: 2px solid #ff9f1c;
  box-shadow: 10px 10px 0 #ffcf88;
  padding: 34px;
`

export const Brand = styled.p`
  color: #f97316;
  font-family: Arial, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
`

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1;
  margin-bottom: 12px;
`

export const Description = styled.p`
  color: #6b4b2f;
  line-height: 1.6;
  margin-bottom: 24px;
`

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ffd6a1;
  margin-bottom: 18px;
`

export const TabButton = styled.button<{ $active: boolean }>`
  border: 0;
  padding: 12px;
  background: ${({ $active }) => ($active ? '#f97316' : '#fff8ef')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#3b2a1c')};
  font-family: Arial, sans-serif;
  font-weight: 700;
`

export const Form = styled.form`
  display: grid;
  gap: 12px;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid #ffb65c;
  background: #fffdf8;
  padding: 13px 14px;
  outline-color: #f97316;
`

export const Message = styled.p`
  background: #fff2df;
  border-left: 4px solid #f97316;
  color: #6b3b10;
  padding: 10px;
  font-size: 0.95rem;
`

export const SubmitButton = styled.button`
  border: 0;
  background: #f97316;
  color: #ffffff;
  padding: 14px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 4px 4px 0 #ffcf88;

  &:hover {
    transform: translate(-1px, -1px);
  }
`
