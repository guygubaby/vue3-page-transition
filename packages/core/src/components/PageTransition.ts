import type { PropType, TransitionProps } from 'vue'
import { Transition, defineComponent, h, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export type ITransitionName = 'fade' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'overlay-up' | 'overlay-down' | 'overlay-left' | 'overlay-right' | 'overlay-down-full' | 'overlay-right-full' | 'overlay-up-full' | 'overlay-left-full' | 'overlay-up-down' | 'overlay-left-right' | 'flip-x' | 'flip-y' | 'zoom'
type IMode = TransitionProps['mode']
type Appear = TransitionProps['appear']

export const PageTransition = defineComponent({
  name: 'PageTransition',
  props: {
    name: {
      type: String as PropType<ITransitionName>,
      required: false,
      default: 'fade',
    },
    mode: {
      type: String as PropType<IMode>,
      required: false,
      default: 'out-in',
    },
    appear: {
      type: Boolean as PropType<Appear>,
      required: false,
      default: false,
    },
  },
  setup(props, { slots }) {
    const router = useRouter()

    const transition = ref<ITransitionName>(props.name)

    watch(() => props.name, (val) => {
      transition.value = val || 'fade'
    })

    router.beforeEach((to, _, next) => {
      if (!to.meta.transition)
        return next()

      transition.value = to.meta.transition as ITransitionName || props.name
      next()
    })

    return () => (
      h('div',
        [
          h(Transition, {
            name: transition.value,
            mode: props.mode || 'out-in',
            appear: props.appear ?? false,
          }, () => slots.default?.()),
          h('div', { class: 'overlay-top' }),
          h('div', { class: 'overlay-right' }),
          h('div', { class: 'overlay-bottom' }),
          h('div', { class: 'overlay-left' }),
        ],
      )
    )
  },
})
