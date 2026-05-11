# DevKemel Old Blog

Um blog 100% independente e open source, feito por mim.

A ideia deste projeto e construir um espaco proprio para publicar textos, ideias, registros e experimentos sem depender de plataformas fechadas, algoritmos ou redes sociais. Um lugar simples, direto e meu, com liberdade para evoluir do jeito que fizer sentido.

Se você é desenvolvedor e tem alguma ideia de melhoria faça seu fork e mande o que você alterou para revisão

## Sobre

Este projeto sera um blog autoral com foco em independencia, transparencia e controle sobre o proprio conteudo. O codigo sera aberto para que outras pessoas possam estudar, acompanhar, sugerir melhorias ou usar como referencia para criar seus proprios espacos na web.

## Stack

- React
- TypeScript
- Vite
- styled-components

## Organizacao de pastas

- `src/`: onde fica o codigo principal da aplicacao.
- `src/main.tsx`: ponto de entrada do React. Ele renderiza o App na tela.
- `src/App.tsx`: componente principal. Ele organiza as secoes da aplicacao.
- `src/components/`: componentes visuais separados por area, como `TopBar`, `HeroSection`, `BannerCarousel`, `BlogFeed`, `PostCard` e `AuthPanel`.
- `src/styles/`: estilos globais, estilos do App e breakpoints responsivos.
- `src/data/`: dados iniciais usados na tela, como os posts de exemplo.
- `src/types.ts`: tipos TypeScript compartilhados.
- `public/`: arquivos publicos acessados direto pelo navegador.
- `package.json`: dependencias e scripts do projeto.
- `vite.config.ts`: configuracao do Vite.

Cada pasta dentro de `components/` normalmente tem:

- `index.tsx`: arquivo principal do componente.
- `styles.ts`: estilos daquele componente usando `styled-components`.

Exemplo:

```txt
src/components/BannerCarousel/
  index.tsx
  styles.ts
  data.ts
  BannerArt.tsx
```

O `index.tsx` monta o componente. O `styles.ts` guarda o visual. Arquivos extras, como `data.ts` ou `BannerArt.tsx`, entram quando ajudam a deixar o componente mais organizado.

## Rodando o projeto

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Licenca

Este projeto sera open source. A licenca definitiva ainda sera escolhida.
