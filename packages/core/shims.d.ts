import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PageTransition: typeof import('./dist/components/PageTransition')['PageTransition']
  }
}
