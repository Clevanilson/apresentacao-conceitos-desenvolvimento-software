export interface ItemApresentacao {
  id: string
  titulo: string
  caminho: string
}

export interface GrupoApresentacao {
  id: string
  titulo: string
  itens: ItemApresentacao[]
}

export const gruposApresentacao: GrupoApresentacao[] = [
  {
    id: 'logica-programacao',
    titulo: 'Introdução a lógica de programação',
    itens: [
      {
        id: 'variaveis',
        titulo: 'Variáveis',
        caminho: '/logica/variaveis',
      },
      {
        id: 'estruturas-controle-funcoes',
        titulo: 'Estruturas de controles e funções',
        caminho: '/logica/estruturas-controle-funcoes',
      },
      {
        id: 'arrays',
        titulo: 'Arrays',
        caminho: '/logica/arrays',
      },
    ],
  },
  {
    id: 'orientacao-objetos',
    titulo: 'Orientação a objetos',
    itens: [
      {
        id: 'abstracao',
        titulo: 'Abstração',
        caminho: '/orientacao-objetos/abstracao',
      },
      {
        id: 'encapsulamento',
        titulo: 'Encapsulamento',
        caminho: '/orientacao-objetos/encapsulamento',
      },
      {
        id: 'heranca',
        titulo: 'Herança',
        caminho: '/orientacao-objetos/heranca',
      },
      {
        id: 'polimorfismo',
        titulo: 'Polimorfismo',
        caminho: '/orientacao-objetos/polimorfismo',
      },
    ],
  },
]

export const sequenciaApresentacao: ItemApresentacao[] = gruposApresentacao.flatMap(
  (grupo) => grupo.itens,
)

export function obterIndiceAtual(caminho: string): number {
  return sequenciaApresentacao.findIndex((item) => item.caminho === caminho)
}

export function obterAnterior(caminho: string): ItemApresentacao | null {
  const indice = obterIndiceAtual(caminho)
  if (indice <= 0) return null
  return sequenciaApresentacao[indice - 1] ?? null
}

export function obterProximo(caminho: string): ItemApresentacao | null {
  const indice = obterIndiceAtual(caminho)
  if (indice < 0 || indice >= sequenciaApresentacao.length - 1) return null
  return sequenciaApresentacao[indice + 1] ?? null
}
