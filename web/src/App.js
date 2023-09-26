// import logo from './logo.svg';
import './App.css';
import {PostForm} from './components/crudform';
import Navbar from './components/navbar';
import {AllPosts} from './components/postrender';
import Signup from './components/pages/signup';
import {Routes, Route, Link, Navigate} from 'react-router-dom';



function App() {
  return (

    <>


    <Navbar />

    <Routes>

      <Route path='/' element={
      <>
      <PostForm />
      <AllPosts />
      </>
    
      } />

      <Route path='/signup' element={<Signup />} />

      
      
    </Routes>

    </>
    
  );
}

export default App;
