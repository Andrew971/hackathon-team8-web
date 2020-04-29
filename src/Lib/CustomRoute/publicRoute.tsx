import * as React from 'react'
import { Route } from 'react-router-dom'

function PublicRoute({
  isExact,
  path,
  component: Component,
  routes,
  routeProps
}: any) {
  // const matchUrl = `${restProps.match.url !== '/' ? restProps.match.url : ''}`
  //   const routePath = path(matchUrl)
  // //console.log('routePath', routePath)
  return (
    <Route
      exact={isExact}
      path={path}
      render={(props: any) => {
        // const preFetchData = fetcher && fetcher(props);
        // pass the sub-routes down to keep nesting
        return (
          <Component {...props} routes={routes} contextProps={routeProps} />
        )
      }}
    />
  );
}

export default PublicRoute
