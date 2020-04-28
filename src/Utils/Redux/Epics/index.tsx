import { Epic } from "redux-observable"
import { combineEpics } from 'redux-observable'
import cacheEpic, { Action } from './cacheEpic'
import { BehaviorSubject } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { RootState } from '../index'



export const epic$:any = new BehaviorSubject(combineEpics(
  cacheEpic,
));

const rootEpic:Epic<Action, any, RootState> = (action$, state$,dependencies) => epic$.pipe(
  mergeMap((epic:any) => epic(action$, state$,dependencies))
);


export default rootEpic