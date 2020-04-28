import { Epic,ofType } from "redux-observable"
import { delay,mapTo } from 'rxjs/operators'
import { RootState } from '../index'
export type Action = {
  type: string
};
const SEARCH = 'searchModel/asyncSearch';
const SET_CACHE = 'sharedModel/setCache';

const cacheEpic: Epic<Action, Action, RootState> = (action$, store) =>{
  const { searchModel } = store.value
  return action$.pipe(
    ofType(SEARCH),
    delay(2000), 
    mapTo({ type: SET_CACHE, payload:searchModel.paginatedResult })
  )
}
;

export default cacheEpic