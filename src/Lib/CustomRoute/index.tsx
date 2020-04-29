import * as React from 'react'
import PrivateRoute from "./privateRoute"
import PublicRoute from "./publicRoute"
import { withRouter, Switch } from "react-router-dom"
// import NotFound from "../../Shared/404"


function CustomRoute(props: any) {
  const { routes, ...restProps } = props
  return (
    <Switch>
      {Object.keys(routes).map((routeKey: string, index) => {
        const currentRoute = routes[routeKey]
        // //console.log('routeProps', currentRoute)
        const matchUrl = `${restProps.match.url !== '/' ? restProps.match.url : ''}`
        console.log(currentRoute)
        switch (currentRoute.type) {
          case 'public':
            // //console.log('routePath', currentRoute.path(matchUrl))

            return (
              <PublicRoute
                isExact={currentRoute.isExact}
                key={index}
                path={currentRoute.path(matchUrl)}
                component={currentRoute.component}
                routes={currentRoute.routes}
                routeProps={{...restProps, currentRoute}}
              />
            )
              ;
          case 'private':
            return (
              <PrivateRoute isExact={currentRoute.isExact}
                key={index}
                path={currentRoute.path(matchUrl)}
                component={currentRoute.component}
                routes={currentRoute.routes}
                routeProps={{...restProps, currentRoute}}
              />
            )
              ;
          // case 'redirect':
          //   const rootPath = currentRoute.path(matchUrl)
          //   const redirectTo = currentRoute.redirectTo ? currentRoute.redirectTo(rootPath) : '/'
          //   //console.log('redirectTo', redirectTo)
          //   return (
          //     <Redirect
          //       // push
          //       exact
          //       from={rootPath}
          //       to={{
          //         pathname: redirectTo,
          //         // search: "",
          //         // state: { referrer: 'currentLocation' }
          //       }}
          //     />
          //   )
          //     ;
          default:
            // //console.log('log')
            return (
              <PublicRoute isExact={currentRoute.isExact}
                key={index}
                path={currentRoute.path(matchUrl)}
                component={currentRoute.component}
                routes={currentRoute.routes}
                routeProps={{...restProps, currentRoute}}
              />
            )
        }

      })}

      {/* <Route render={(routeProps: any) => <NotFound {...routeProps} />} /> */}
    </Switch>
  )

}


export default withRouter(CustomRoute)




// {Object.keys(routeMap).map((routeKey:string, index) =>{
//   const currentRoute = routeMap[routeKey]
//   const routeProps = {...currentRoute ,...props}
//   //console.log(currentRoute)

//   switch (currentRoute.type) {
//     case 'public':
//       return (
//         <PublicRoute isExact={currentRoute.isExact} key={index} {...routeProps} />
//       )
//       break;
//     case 'private':
//       return (
//         <PrivateRoute isExact={currentRoute.isExact} key={index} {...routeProps} />
//       )
//       break;
//     case 'redirect':
//       return (<Redirect
//         to={{
//           pathname: currentRoute.redirect,
//           state: { from: props.location }
//         }}
//       />
//       )
//     default:
//       return (
//         <PublicRoute isExact={currentRoute.isExact} key={index} {...routeProps} />
//       )
//   }

// })}
