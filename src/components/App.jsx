import './App.scss'

import React from 'react';
import Sidebar from './sidebar/Sidebar'
import Items from '../containers/Items'

const App = () => (
  <div className="page">
    <Sidebar />
    <Items />
  </div>

)

export default App;
