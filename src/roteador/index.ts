import { createRouter, createWebHistory } from 'vue-router'
import { sequenciaApresentacao } from '@/dados/itensApresentacao'

import PaginaVariaveis from '@/paginas/logica/PaginaVariaveis.vue'
import PaginaEstruturaControleIf from '@/paginas/logica/PaginaEstruturaControleIf.vue'
import PaginaEstruturaControleElse from '@/paginas/logica/PaginaEstruturaControleElse.vue'
import PaginaEstruturaControleSwitch from '@/paginas/logica/PaginaEstruturaControleSwitch.vue'
import PaginaEstruturaControleFor from '@/paginas/logica/PaginaEstruturaControleFor.vue'
import PaginaEstruturaControleWhile from '@/paginas/logica/PaginaEstruturaControleWhile.vue'
import PaginaEstruturaControleDoWhile from '@/paginas/logica/PaginaEstruturaControleDoWhile.vue'
import PaginaArrays from '@/paginas/logica/PaginaArrays.vue'
import PaginaFuncoes from '@/paginas/logica/PaginaFuncoes.vue'
import PaginaIntroducaoOrientacaoObjetos from '@/paginas/orientacao-objetos/PaginaIntroducaoOrientacaoObjetos.vue'
import PaginaAbstracao from '@/paginas/orientacao-objetos/PaginaAbstracao.vue'
import PaginaEncapsulamento from '@/paginas/orientacao-objetos/PaginaEncapsulamento.vue'
import PaginaHeranca from '@/paginas/orientacao-objetos/PaginaHeranca.vue'
import PaginaPolimorfismo from '@/paginas/orientacao-objetos/PaginaPolimorfismo.vue'

const roteador = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: sequenciaApresentacao[0]?.caminho ?? '/logica/variaveis',
    },
    {
      path: '/logica/variaveis',
      name: 'variaveis',
      component: PaginaVariaveis,
    },
    {
      path: '/logica/estrutura-controle-if',
      name: 'estrutura-controle-if',
      component: PaginaEstruturaControleIf,
    },
    {
      path: '/logica/estrutura-controle-else',
      name: 'estrutura-controle-else',
      component: PaginaEstruturaControleElse,
    },
    {
      path: '/logica/estrutura-controle-switch',
      name: 'estrutura-controle-switch',
      component: PaginaEstruturaControleSwitch,
    },
    {
      path: '/logica/estrutura-controle-for',
      name: 'estrutura-controle-for',
      component: PaginaEstruturaControleFor,
    },
    {
      path: '/logica/estrutura-controle-while',
      name: 'estrutura-controle-while',
      component: PaginaEstruturaControleWhile,
    },
    {
      path: '/logica/estrutura-controle-do-while',
      name: 'estrutura-controle-do-while',
      component: PaginaEstruturaControleDoWhile,
    },
    {
      path: '/logica/arrays',
      name: 'arrays',
      component: PaginaArrays,
    },
    {
      path: '/logica/funcoes',
      name: 'funcoes',
      component: PaginaFuncoes,
    },
    {
      path: '/orientacao-objetos/introducao',
      name: 'introducao-orientacao-objetos',
      component: PaginaIntroducaoOrientacaoObjetos,
    },
    {
      path: '/orientacao-objetos/abstracao',
      name: 'abstracao',
      component: PaginaAbstracao,
    },
    {
      path: '/orientacao-objetos/encapsulamento',
      name: 'encapsulamento',
      component: PaginaEncapsulamento,
    },
    {
      path: '/orientacao-objetos/heranca',
      name: 'heranca',
      component: PaginaHeranca,
    },
    {
      path: '/orientacao-objetos/polimorfismo',
      name: 'polimorfismo',
      component: PaginaPolimorfismo,
    },
  ],
})

export default roteador
