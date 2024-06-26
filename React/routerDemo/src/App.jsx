import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Routes, Route, useNavigate, useSearchParams, useParams } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      this is home page
      <button onClick={() => navigate('/about/100', { replace: true })}>跳去关于页面</button>
    </div>
  )
}
const About = () => {
  // let [params] = useSearchParams()
  // console.log(params.get('id'));
  let [params] = useParams()
  console.log(params.get('age'));
  return (<div>this is about page</div>)
}

const App = props => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about:age' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {

};

export default App;