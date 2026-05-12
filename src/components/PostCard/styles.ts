import styled from 'styled-components'

export const Card = styled.article<{ $highlight: boolean }>`
  background: #ffffff;
  border: 1px solid ${({ $highlight }) => ($highlight ? '#f97316' : '#ffd6a1')};
  box-shadow: ${({ $highlight }) => ($highlight ? '7px 7px 0 #ffcf88' : '4px 4px 0 #ffe2bb')};
  padding: 22px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
`

export const AuthorBlock = styled.div`
  display: grid;
  gap: 4px;
`

export const Author = styled.strong`
  font-family: Arial, sans-serif;
  font-size: 1rem;
`

export const Username = styled.span`
  color: #8a5a24;
  font-size: 0.92rem;
`

export const Badge = styled.span`
  align-self: flex-start;
  background: #f97316;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 5px 9px;
  text-transform: uppercase;
`

export const Content = styled.p`
  font-size: 1.22rem;
  line-height: 1.65;
  white-space: pre-wrap;
`

export const ImageGrid = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: ${({ $count }) => ($count > 1 ? '1fr 1fr' : '1fr')};
  gap: 10px;
  margin-top: 16px;

  img {
    width: 100%;
    aspect-ratio: ${({ $count }) => ($count > 1 ? '1 / 1' : '16 / 10')};
    object-fit: cover;
    border: 1px solid #ffd6a1;
    background: #fff8ef;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 14px;
`

export const LikeButton = styled.button<{ $liked: boolean }>`
  border: 1px solid #f97316;
  background: ${({ $liked }) => ($liked ? '#f97316' : '#fff8ef')};
  color: ${({ $liked }) => ($liked ? '#ffffff' : '#9a3412')};
  padding: 9px 12px;
  font-family: Arial, sans-serif;
  font-weight: 800;
`

export const Likes = styled.span`
  color: #8a5a24;
  font-size: 0.95rem;
`

export const PostTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  border: 1px solid #ffd6a1;
`

export const TabButton = styled.button<{ $active: boolean }>`
  border: 0;
  background: ${({ $active }) => ($active ? '#f97316' : '#fff8ef')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#9a3412')};
  padding: 11px 10px;
  font-family: Arial, sans-serif;
  font-weight: 800;
`

export const CommentsPanel = styled.section`
  display: grid;
  gap: 14px;
  padding-top: 14px;
`

export const CommentList = styled.div`
  display: grid;
  gap: 10px;
`

export const CommentItem = styled.article`
  background: #fff8ef;
  border: 1px solid #ffd6a1;
  padding: 12px;

  p {
    margin-top: 8px;
    line-height: 1.55;
    white-space: pre-wrap;
  }
`

export const CommentMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: baseline;

  strong {
    font-family: Arial, sans-serif;
    font-size: 0.95rem;
  }

  span {
    color: #8a5a24;
    font-size: 0.86rem;
  }
`

export const EmptyComments = styled.p`
  color: #8a5a24;
  background: #fff8ef;
  border: 1px dashed #ffc078;
  padding: 12px;
`

export const CommentForm = styled.form`
  display: grid;
  gap: 10px;
`

export const CommentInput = styled.textarea`
  width: 100%;
  min-height: 82px;
  resize: vertical;
  border: 1px solid #ffb65c;
  background: #fffdf8;
  padding: 12px;
  line-height: 1.5;
  outline-color: #f97316;

  &:disabled {
    color: #8a5a24;
    cursor: not-allowed;
    opacity: 0.72;
  }
`

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  span {
    color: #8a5a24;
    font-size: 0.9rem;
  }
`

export const CommentButton = styled.button`
  border: 0;
  background: #f97316;
  color: #ffffff;
  padding: 9px 14px;
  font-family: Arial, sans-serif;
  font-weight: 800;
  box-shadow: 3px 3px 0 #ffcf88;

  &:disabled {
    background: #c9a17a;
    cursor: not-allowed;
    box-shadow: none;
  }
`
