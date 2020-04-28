// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    containerWidth:string
    navHeight:string
    asideWidth:string
    inventory:{
      asideWidth:string
    },
    navBar:{
      background:{
        primary:string
        secondary:string
        isActive:string
        hover:string
      },
      color:{
        primary:string
        secondary:string
        isActive:string
        hover:string
      },
      
    },
    footer:{
      background:{
        primary:stringstring
        secondary:stringstring
      },
      color:{
        primary:stringstring
        secondary:stringstring
      },
      
    },
    header:{
      background:{
        primary:stringstring
        secondary:stringstring
      },
      color:{
        primary:stringstring
        secondary:stringstring
      },
      
    },
    section:{
      background:{
        primary:stringstring
        secondary:stringstring
      },
      color:{
        primary:string
        secondary:string
      },
      title:{
        primary:string
        secondary:string
      },
    },
    button:{
      cta:{
        primary:string
        secondary:string
      }
    },
  }
}