import { useEffect, useState } from 'react'
import { BannerArt } from './BannerArt'
import { banners } from './data'
import * as S from './styles'

export function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeBanner = banners[activeIndex]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % banners.length)
    }, 5200)

    return () => window.clearInterval(intervalId)
  }, [])

  function goToPrevious() {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? banners.length - 1 : currentIndex - 1))
  }

  function goToNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % banners.length)
  }

  return (
    <S.CarouselSection aria-label="Banners em destaque">
      <S.CarouselFrame $accent={activeBanner.accent}>
        <S.Slide>
          <S.SlideCopy>
            <S.Eyebrow>{activeBanner.eyebrow}</S.Eyebrow>
            <S.Title>{activeBanner.title}</S.Title>
            <S.Description>{activeBanner.description}</S.Description>
            <S.ActionButton type="button">{activeBanner.actionLabel}</S.ActionButton>
          </S.SlideCopy>

          <BannerArt accent={activeBanner.accent} currentNumber={activeIndex + 1} />
        </S.Slide>

        <S.Controls>
          <S.ArrowButton type="button" onClick={goToPrevious} aria-label="Banner anterior">
            ‹
          </S.ArrowButton>

          <S.Dots aria-label="Selecionar banner">
            {banners.map((banner, index) => (
              <S.DotButton
                key={banner.id}
                type="button"
                $active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                aria-label={`Mostrar banner ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </S.Dots>

          <S.ArrowButton type="button" onClick={goToNext} aria-label="Próximo banner">
            ›
          </S.ArrowButton>
        </S.Controls>
      </S.CarouselFrame>
    </S.CarouselSection>
  )
}
