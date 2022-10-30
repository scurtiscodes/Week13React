import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import SignInForm from './components/SignInForm';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <h3 className='border border-dark border-end-0 border-bottom-0 border-1'>Login</h3>
      <SignInForm />
    </div>
  )
}

// class App extends React.Component {
//   render() {
//       return (
//         <div>
//           <h1> Well </h1>
//           <h2> Hello there... </h2>
//           <Header />
//         </div>
//         );
//   }
// }

export default App
