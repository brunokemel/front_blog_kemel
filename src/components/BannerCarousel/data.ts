export interface Banner {
  id: string
  eyebrow: string
  title: string
  description: string
  actionLabel: string
  accent: string
}

export const banners: Banner[] = [
  {
    id: 'editorial',
    eyebrow: 'Editorial',
    title: 'Semana dos textos nostálgicos',
    description: 'Seleção especial com posts curtos, ranking local e aquela sensação de blog salvo nos favoritos.',
    actionLabel: 'Ver destaque',
    accent: '#f97316',
  },
  {
    id: 'community',
    eyebrow: 'Comunidade',
    title: 'Publique uma ideia antes que ela evapore',
    description: 'Use o compositor para registrar pensamentos rápidos e deixar seu feed com cara de diário público.',
    actionLabel: 'Criar post',
    accent: '#0f766e',
  },
  {
    id: 'ranking',
    eyebrow: 'Ranking',
    title: 'Os posts mais curtidos sobem no mural',
    description: 'Curtidas atualizam o top 3 da semana e disparam uma pequena comemoração visual no blog.',
    actionLabel: 'Explorar top 3',
    accent: '#7c3aed',
  },
]
