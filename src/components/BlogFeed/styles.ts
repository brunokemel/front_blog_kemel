import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const Layout = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 24px 64px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 28px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const MainColumn = styled.section`
  display: grid;
  gap: 22px;
`

export const Composer = styled.form`
  background: #ffffff;
  border: 1px solid #ffd6a1;
  box-shadow: 4px 4px 0 #ffe2bb;
  padding: 22px;
`

export const ComposerTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 12px;
`

export const LoginHint = styled.p`
  background: #fff2df;
  border-left: 4px solid #f97316;
  color: #6b3b10;
  padding: 10px;
  margin-bottom: 12px;
  font-size: 0.95rem;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  resize: vertical;
  border: 1px solid #ffb65c;
  background: #fffdf8;
  padding: 14px;
  line-height: 1.6;
  outline-color: #f97316;

  &:disabled {
    color: #8a5a24;
    cursor: not-allowed;
    opacity: 0.72;
  }
`

export const ComposerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 12px;
`

export const Counter = styled.span`
  color: #8a5a24;
`

export const PublishButton = styled.button`
  border: 0;
  background: #f97316;
  color: #ffffff;
  padding: 11px 18px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  box-shadow: 4px 4px 0 #ffcf88;

  &:disabled {
    background: #c9a17a;
    cursor: not-allowed;
    box-shadow: none;
  }
`

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ffd6a1;
`

export const TabButton = styled.button<{ $active: boolean }>`
  border: 0;
  padding: 14px;
  background: ${({ $active }) => ($active ? '#f97316' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#9a3412')};
  font-family: Arial, sans-serif;
  font-weight: 800;
`

export const PostsList = styled.div`
  display: grid;
  gap: 18px;
`

export const Sidebar = styled.aside`
  position: sticky;
  top: 24px;
  align-self: start;
  background: #ffffff;
  border: 1px solid #f97316;
  box-shadow: 6px 6px 0 #ffcf88;
  padding: 20px;
`

export const SidebarTitle = styled.h2`
  font-size: 1.35rem;
  margin-bottom: 16px;
`

export const RankingList = styled.div`
  display: grid;
  gap: 12px;
`

export const RankingItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border-bottom: 1px dashed #ffc078;
  padding-bottom: 12px;
`

export const Rank = styled.strong`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  background: #fff3e0;
  color: #f97316;
  border: 1px solid #ffb65c;
  font-family: Arial, sans-serif;
`

export const RankingText = styled.div`
  display: grid;
  gap: 4px;

  span {
    color: #8a5a24;
    font-size: 0.9rem;
  }
`
