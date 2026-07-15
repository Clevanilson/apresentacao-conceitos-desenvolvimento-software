import { createRouter, createWebHistory } from 'vue-router'
import { sequenciaApresentacao } from '@/dados/itensApresentacao'

import PaginaVariaveis from '@/paginas/logica/PaginaVariaveis.vue'
import PaginaEstruturasControleFuncoes from '@/paginas/logica/PaginaEstruturasControleFuncoes.vue'
import PaginaArrays from '@/paginas/logica/PaginaArrays.vue'
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
      path: '/logica/estruturas-controle-funcoes',
      name: 'estruturas-controle-funcoes',
      component: PaginaEstruturasControleFuncoes,
    },
    {
      path: '/logica/arrays',
      name: 'arrays',
      component: PaginaArrays,
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
