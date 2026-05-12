import type { BlogPost } from '../types'

export const initialPosts: BlogPost[] = [
  {
    id: 'post-1',
    authorName: 'Bruno Kemel',
    username: 'devkemel',
    content:
      'Tem texto que não precisa gritar para ser forte. Às vezes, só precisa parecer escrito às 02h da manhã em um blog esquecido da internet.',
    images: [],
    createdAt: 'Segunda, 08:20',
    likes: 42,
    likedByMe: false,
    comments: [
      {
        id: 'comment-1',
        authorName: 'Ana Script',
        username: 'anascript',
        content: 'Esse texto tem cheiro de madrugada e CSS antigo.',
        createdAt: 'Segunda, 09:04',
      },
    ],
  },
  {
    id: 'post-2',
    authorName: 'Ana Script',
    username: 'anascript',
    content:
      'A internet antiga tinha menos pressa. Você lia um texto, pensava sobre ele e talvez deixasse um comentário que virava conversa.',
    images: [],
    createdAt: 'Terça, 19:45',
    likes: 31,
    likedByMe: false,
    comments: [
      {
        id: 'comment-2',
        authorName: 'Bruno Kemel',
        username: 'devkemel',
        content: 'Era exatamente essa conversa lenta que fazia falta.',
        createdAt: 'Terça, 20:12',
      },
    ],
  },
  {
    id: 'post-3',
    authorName: 'Caio Front',
    username: 'caiofront',
    content:
      'Construir interface também é construir sensação. Cor, espaço e texto contam uma história antes do usuário clicar em qualquer coisa.',
    images: [],
    createdAt: 'Quarta, 12:10',
    likes: 27,
    likedByMe: false,
    comments: [],
  },
  {
    id: 'post-4',
    authorName: 'Lia Dev',
    username: 'liadev',
    content:
      'O post curto tem a força de um bilhete deixado na mesa. Não explica tudo, mas deixa uma porta aberta.',
    images: [],
    createdAt: 'Quinta, 22:14',
    likes: 18,
    likedByMe: false,
    comments: [],
  },
]
