// import { Home,
//   Search,
//   Account,
//   Cart,
//   Checkout,
//   Profile,
//   AccountSummary,
//   OrderList,
//   SignUp,
//   Login
// } from './modules'

// export default {

// //   "Profile":{
// //     component: Profile,
// //     path: '/account/profile',
// //     isExact:true,
// //     // isPrivate: true,
// //     fetcher: (props:any) => {

// //   return {
// //     text:"Message from Host App"
// //   }
// // },

// // },


// //   "Order List":{
// //     component: OrderList,
// //     path: '/account/order-list',
// //     isExact:true,
// //     type: 'public',
// //     // isPrivate: true,
// //     fetcher: (props:any) => {

// //   return {
// //     text:"Message from Host App"
// //   }
// // },
// //   },
//   "Catalogue": {
//     component: Search,
//     path: '/catalogue',
//     isExact:true,
//     type: 'public',
//     fetcher: (props:any) => {

//       return {
//         text:"Message from Host App"
//       }
//     }
//   },
// //   "Account Summary":{
// //     component: AccountSummary,
// //     path: '/account',
// //     isExact:true,
// //     // isPrivate: true,
// //     fetcher: (props:any) => {

// //   return {
// //     text:"Message from Host App"
// //   }
// // },
// //   },
//   "Account": {
//     component: Account,
//     path: '/account',
//     redirectTo: '/account/summary', 
//     isExact:false,
//     type: 'private',
//     isPrivate: true,
//     fetcher: (props:any) => {

//       return {
//         text:"Message from Host App"
//       }
//     },
//     routes: {
//       "Profile":{
//         component: Profile,
//         path: '/account/profile',
//         isExact:true,
//         type: 'private',
//         // isPrivate: true,
//         fetcher: (props:any) => {

//       return {
//         text:"Message from Host App"
//       }
//     },
//       },
//       "Order List":{
//         component: OrderList,
//         path: '/account/order-list',
//         isExact:true,
//         type: 'private',
//         // isPrivate: true,
//         fetcher: (props:any) => {

//           return {
//             text:"Message from Host App"
//           }
//         },
//       },
//       "Account Summary":{
//         component: AccountSummary,
//         path: '/account',
//         isExact:true,
//         type: 'private',
//         // isPrivate: true,
//         fetcher: (props:any) => {

//       return {
//         text:"Message from Host App"
//       }
//     },
//       },

//     },
//   },
//   "Cart": {
//     component: Cart,
//     path: '/cart',
//     type: 'public',
//     isExact:true,
//     fetcher: (props:any) => {

//       return {
//         props:"test"
//       }
//     }
//   },
//   "Checkout": {
//     component: Checkout,
//     path: '/checkout',
//     type: 'public',
//     isExact:true,
//     fetcher: (props:any) => {

//       return {
//         props:"test"
//       }
//     }
//   },
//   "Login": {
//     component: Login,
//     path: '/login',
//     type: 'public',
//     isExact:true,
//     fetcher: (props:any) => {

//       return {
//         props:"test"
//       }
//     }
//   },
//   "Sign Up": {
//     component: SignUp,
//     path: '/sign-up',
//     type: 'public',
//     isExact:true,
//     fetcher: (props:any) => {

//       return {
//         props:"test"
//       }
//     }
//   },
//   "Home": {
//     component: Home,
//     path: '/',
//     isExact:false,
//     type: 'public',
//     fetcher: (props:any) => {

//       return {
//         props:"test"
//       }
//     }
//   }


// };
