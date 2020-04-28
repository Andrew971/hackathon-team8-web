import { createEpicMiddleware } from 'redux-observable'
import { RootState } from '../index'
import { ajax } from 'rxjs/ajax'

 type Action = {
  type: string
};
export const dependencies = { fetch: ajax.getJSON }

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>(
  {
  dependencies
  }
)

export default epicMiddleware