import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const ProfileLayout = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding: 28px 24px 64px;
`

export const BackButton = styled.button`
  border: 1px solid #f97316;
  background: #ffffff;
  color: #9a3412;
  padding: 9px 14px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  margin-bottom: 18px;
`

export const ProfileHeader = styled.section`
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr) 220px;
  gap: 22px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #f97316;
  box-shadow: 6px 6px 0 #ffcf88;
  padding: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 110px 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const Avatar = styled.div`
  display: grid;
  place-items: center;
  width: 140px;
  height: 140px;
  background: #f97316;
  color: #ffffff;
  border: 3px solid #ffcf88;
  font-family: Arial, sans-serif;
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 110px;
    height: 110px;
    font-size: 2.5rem;
  }
`

export const ProfileDetails = styled.div`
  min-width: 0;
`

export const Name = styled.h1`
  font-size: 2rem;
  line-height: 1.15;
  overflow-wrap: anywhere;
`

export const Username = styled.p`
  color: #9a3412;
  font-family: Arial, sans-serif;
  font-weight: 800;
  margin-top: 4px;
`

export const Email = styled.p`
  color: #7c4a1f;
  margin-top: 8px;
  overflow-wrap: anywhere;
`

export const PhotoButton = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f97316;
  background: #fff8ef;
  color: #9a3412;
  padding: 9px 12px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  margin-top: 16px;
  cursor: pointer;

  input {
    display: none;
  }
`

export const Stats = styled.div`
  display: grid;
  gap: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-column: 1 / -1;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`

export const Stat = styled.div`
  background: #fff3e0;
  border: 1px solid #ffd6a1;
  padding: 14px;

  strong {
    display: block;
    color: #f97316;
    font-family: Arial, sans-serif;
    font-size: 1.8rem;
  }

  span {
    color: #6b3b10;
    font-size: 0.95rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 28px 0 16px;
`

export const PostsList = styled.div`
  display: grid;
  gap: 18px;
`

export const EmptyState = styled.p`
  background: #ffffff;
  border: 1px solid #ffd6a1;
  box-shadow: 4px 4px 0 #ffe2bb;
  color: #6b3b10;
  padding: 22px;
`
