import { init, RematchRootState , RematchDispatch } from '@rematch/core'
import models from './Models'
import plugins from './Plugins'
import middlewares from './Middlewares'
import enhancers from './Enhancers'
import rootEpic from './Epics'
import reduxObservable from './Middlewares/reduxObservable'


const store = init({
  plugins,
  models,
  redux: {
    middlewares,
    enhancers,
    devtoolOptions: {
      disabled: false,
      name:"HaulyShop",
      trace:true
    },
  }
})

reduxObservable.run(rootEpic);

// console.log(models)
export const { dispatch, select } = store

export type Store = typeof store
export type RootState = RematchRootState<typeof models>
export type Dispatch = RematchDispatch<typeof models>


export default store