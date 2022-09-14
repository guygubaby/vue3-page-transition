import type { PropType, TransitionProps } from 'vue'
import { Transition, defineComponent, h, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export type ITransitionName = 'fade' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'overlay-up' | 'overlay-down' | 'overlay-left' | 'overlay-right' | 'overlay-down-full' | 'overlay-right-full' | 'overlay-up-full' | 'overlay-left-full' | 'overlay-up-down' | 'overlay-left-right' | 'flip-x' | 'flip-y' | 'zoom'
type ITransitionMode = TransitionProps['mode']
type Appear = TransitionProps['appear']

export interface IPageTransitionProps {
  name?: ITransitionName
  mode?: ITransitionMode
  appear?: Appear
  overlay?: boolean
  overlayBg?: string
  transitionDuration?: number
  transformDistance?: number
}

export const defineTransitionProps = (props: IPageTransitionProps) => props

export const PageTransition = defineComponent({
  name: 'PageTransition',
  props: {
    name: {
      type: String as PropType<ITransitionName>,
      required: false,
      default: 'fade',
    },
    mode: {
      type: String as PropType<ITransitionMode>,
      required: false,
      default: 'out-in',
    },
    appear: {
      type: Boolean as PropType<Appear>,
      required: false,
      default: false,
    },
    overlayBg: {
      type: String,
      required: false,
      default: '#1867c0',
    },
    /**
     * In ms, default is 300ms
     */
    transitionDuration: {
      type: Number,
      required: false,
      default: 300,
    },
    /**
     * Used as fade-x transform distance
     */
    transformDistance: {
      type: [Number, String],
      required: false,
      default: 40,
    },
    overlay: {
      type: Boolean,
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

    const getTransformDistance = () => {
      const { transformDistance } = props
      if (!transformDistance)
        return null

      if (typeof transformDistance === 'number')
        return `${transformDistance}px`

      return transformDistance
    }

    const genCssVars = () => {
      return {
        '--overlay-bg': props.overlayBg ? props.overlayBg : null,
        '--transition-duration': props.transitionDuration ? `${props.transitionDuration}ms` : null,
        '--transform-distance': getTransformDistance(),
      }
    }

    const renderTransition = () => {
      const style = props.overlay ? {} : genCssVars()

      return h(Transition, {
        name: transition.value,
        mode: props.mode || 'out-in',
        appear: props.appear ?? false,
        style,
      }, () => slots.default?.())
    }

    return () => props.overlay
      ? (
          h('div',
            {
              style: genCssVars(),
            },
            [
              renderTransition(),
              h('div', { class: 'overlay-top' }),
              h('div', { class: 'overlay-right' }),
              h('div', { class: 'overlay-bottom' }),
              h('div', { class: 'overlay-left' }),
            ],
          )
        )
      : renderTransition()
  },
})
