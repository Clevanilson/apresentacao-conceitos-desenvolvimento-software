import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { obterAnterior, obterProximo } from '@/dados/itensApresentacao'

export function usarNavegacaoSequencial() {
  const rota = useRoute()
  const roteador = useRouter()

  const itemAnterior = computed(() => obterAnterior(rota.path))
  const itemProximo = computed(() => obterProximo(rota.path))

  function irParaAnterior() {
    if (itemAnterior.value) {
      void roteador.push(itemAnterior.value.caminho)
    }
  }

  function irParaProximo() {
    if (itemProximo.value) {
      void roteador.push(itemProximo.value.caminho)
    }
  }

  function aoPressionarTecla(evento: KeyboardEvent) {
    if (evento.key === 'ArrowLeft') {
      evento.preventDefault()
      irParaAnterior()
    }

    if (evento.key === 'ArrowRight') {
      evento.preventDefault()
      irParaProximo()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', aoPressionarTecla)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', aoPressionarTecla)
  })

  return {
    itemAnterior,
    itemProximo,
    irParaAnterior,
    irParaProximo,
  }
}
