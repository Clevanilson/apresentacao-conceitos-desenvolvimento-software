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
        id: 'estrutura-controle-if',
        titulo: 'Estrutura de controle 1: if',
        caminho: '/logica/estrutura-controle-if',
      },
      {
        id: 'estrutura-controle-else',
        titulo: 'Estrutura de controle 2: else',
        caminho: '/logica/estrutura-controle-else',
      },
      {
        id: 'estrutura-controle-switch',
        titulo: 'Estrutura de controle 3: switch',
        caminho: '/logica/estrutura-controle-switch',
      },
      {
        id: 'estrutura-controle-for',
        titulo: 'Estrutura de controle 4: for',
        caminho: '/logica/estrutura-controle-for',
      },
      {
        id: 'estrutura-controle-while',
        titulo: 'Estrutura de controle 5: while',
        caminho: '/logica/estrutura-controle-while',
      },
      {
        id: 'estrutura-controle-do-while',
        titulo: 'Estrutura de controle 6: do-while',
        caminho: '/logica/estrutura-controle-do-while',
      },
      {
        id: 'arrays',
        titulo: 'Arrays',
        caminho: '/logica/arrays',
      },
      {
        id: 'funcoes',
        titulo: 'Funções',
        caminho: '/logica/funcoes',
      },
    ],
  },
  {
    id: 'orientacao-objetos',
    titulo: 'Orientação a objetos',
    itens: [
      {
        id: 'introducao-orientacao-objetos',
        titulo: 'Introdução à orientação a objetos',
        caminho: '/orientacao-objetos/introducao',
      },
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
  {
    id: 'arquitetura-software',
    titulo: 'Arquitetura de software (MVC)',
    itens: [
      {
        id: 'introducao-arquitetura-software',
        titulo: 'Introdução',
        caminho: '/arquitetura-software/introducao',
      },
      {
        id: 'model',
        titulo: 'Model',
        caminho: '/arquitetura-software/model',
      },
      {
        id: 'view',
        titulo: 'View',
        caminho: '/arquitetura-software/view',
      },
      {
        id: 'controller',
        titulo: 'Controller',
        caminho: '/arquitetura-software/controller',
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
