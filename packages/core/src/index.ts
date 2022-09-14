import './styles/index.scss'
import type { App } from 'vue'
import { PageTransition, defineTransitionProps } from './components/PageTransition'
import { TransitionPresets } from './misc/presets'

const install = (app: App<Element>) => {
  app.component('PageTransition', PageTransition)
}

export type { ITransitionName, IPageTransitionProps } from './components/PageTransition'
export { PageTransition, TransitionPresets, defineTransitionProps, install as default }
