import * as S from './styles'

interface BannerArtProps {
  accent: string
  currentNumber: number
}

export function BannerArt({ accent, currentNumber }: BannerArtProps) {
  return (
    <S.BannerArt aria-hidden="true">
      <S.ArtWindow $accent={accent}>
        <S.ArtBar />
        <S.ArtLine $wide />
        <S.ArtLine />
        <S.ArtStamp $accent={accent}>{currentNumber}</S.ArtStamp>
      </S.ArtWindow>
    </S.BannerArt>
  )
}
