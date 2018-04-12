// import React from 'react'
//
// function logErrorToMyService(err, info) {
//   return(
//     <div>
//       {err.message}
//       {info}
//     </div>
//   )
// }
//
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { hasError: false }
//   }
//
//   componentDidCatch (error, info) {
//     this.setState({ hasError: true })
//     logErrorToMyService(error, info)
//   }
//
//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>
//     }
//     return this.props.children
//   }
// }
//
// export default class Error extends React.Component {
//   render() {
//     return(
//       <div>
//         <ErrorBoundary>
//           {/*<MyWidget />*/}
//         </ErrorBoundary>
//       </div>
//     )
//   }
// }