import './styles/index.scss'
import type { App } from 'vue'
import { PageTransition } from './components/PageTransition'
import { TransitionPresets } from './misc/presets'

const install = (app: App<Element>) => {
  app.component('PageTransition', PageTransition)
}

export type { ITransitionName } from './components/PageTransition'
export { PageTransition, TransitionPresets, install as default }
