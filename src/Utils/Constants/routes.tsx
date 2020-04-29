import MainApp from '../../Modules/MainApp'
import OnBoarding from '../../Modules/OnBoarding'
import SignUp from '../../Modules/OnBoarding/Signup'
import Login from '../../Modules/OnBoarding/Login'
import ConfirmationCode from '../../Modules/OnBoarding/ConfirmationCode'

export const Routes = {
  'MainApp': {
    path: (matchUrl: string) => `/dashboard`,
    component: MainApp,
    type: 'private',
    isExact: false,
    routes: {
      'Overview': {
        path: (matchUrl: string) => `${matchUrl}/overview`,
        component: MainApp,
        isExact: true,
        type: 'private',
      },
    }
  },
  'OnBoarding': {
    path: (_matchUrl: string) => `/`,
    component: OnBoarding,
    type: 'public',
    redirectTo: (_matchUrl: string) => `/login`,
    isExact: false,
    routes: {
      'Login': {
        path: (_matchUrl: string) => `/login`,
        component: Login ,
        isExact: true,
        type: 'public',
      },
      'SignUp': {
        path: (_matchUrl: string) => `/sign-up`,
        component: SignUp,
        isExact: true,
        type: 'public',
      },
      'ConfirmationCode': {
        path: (_matchUrl: string) => `/confirmation-code`,
        component: ConfirmationCode,
        isExact: true,
        type: 'public',
      },
    }
  },

  }
