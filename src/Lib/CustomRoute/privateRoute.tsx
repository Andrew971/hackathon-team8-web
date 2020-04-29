import * as React from 'react'
import { Route,Redirect } from 'react-router-dom'
import store from '../../Utils/Redux'

function PrivateRoute({
  fetcher,
  isExact,
  path,
  isPrivate = false,
  component:Component,
  routes,
  ...restProps
}:any) {

  return (
    <Route
      exact={isExact}
      path={path}
      render={(props:any)=> {
        const preFetchData = fetcher && fetcher(props);
        const { userModel:user } = store.getState()
        const fakeAuth =  false
        console.log(user)
        if(user){
        return (
          <Component {...props} routes={routes} liftedProps={{...preFetchData,...restProps}} />
        )
        }else {
          return (<Redirect
            to={{
              pathname: "/login",
              state: { from: restProps.location }
            }}
          />
          )
        }
      }}
    />
  );
}


export default PrivateRoute
