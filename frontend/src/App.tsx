import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CostCalculation from './components/CostCalculation';


function App() {
  return (
      <BrowserRouter>
       <div className="App">
      <Header />
      <Outlet/>
      <Routes>
        <Route  path='/' element={<CostCalculation/>}></Route>
        <Route  path='/home' element={<Home/>}></Route>
        <Route  path='/about' element={<About/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
      </Routes>
          </div>

      </BrowserRouter>
  );
}

export default App;



// export const appRoute = createBrowserRouter([
//   {
//     path:'/',
//     element: <CostCalculation/>,
//     children:[
//       {
//     path:"/home",
//     element:<Home/>
//   },
//   {
//     path: '/about',
//   element: <About />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   }
  
// ]
//   }
  
// ])

