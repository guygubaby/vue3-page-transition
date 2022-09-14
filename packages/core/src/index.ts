import './styles/index.scss'
import type { App } from 'vue'
import { PageTransition } from './components/PageTransition'

const install = (app: App<Element>) => {
  app.component('PageTransition', PageTransition)
}

export { PageTransition, install as default }
