/**
 * @class ExampleComponent
 */

import * as React from 'react'
import CustomRoute from "../../Lib/CustomRoute"
import {
  // useLocation,
  Redirect,
  withRouter,
  RouteComponentProps
} from "react-router";

export type Props = RouteComponentProps & {
  routes: any
  CurrentRoute: string
  contextProps: any
}
const EntityModule = React.memo((props: Props) => {

  const {
    routes,
    // currentRoute
    contextProps
  } = props
  // let location = useLocation();
  //console.log('props', props)
  // React.useEffect(() => {
  //   if (location.pathname === props.match.url) {
  //     props.history.replace(`${props.match.url}/overview`)
  //   }

  // }, [location])
  const redirectPath = contextProps.currentRoute.redirectTo
  console.log('props',props)
  console.log('redirectPath',redirectPath)
  return (<>
    {redirectPath && typeof redirectPath === 'function' &&
      <Redirect
        // push
        exact
        from={props.match.url}
        to={{
          pathname: redirectPath(props.match.url),
          // search: "",
          // hash: {

          // },
          // state: { referrer: 'currentLocation' }
        }}
      />

    }

    <CustomRoute routes={routes} />
  </>
  )

})

export default withRouter(EntityModule)
