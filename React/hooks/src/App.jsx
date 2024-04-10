import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/todo/TodoList'

const App = props => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

App.propTypes = {

};

export default App;