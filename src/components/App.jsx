import './App.scss'

import React from 'react';
import Sidebar from './sidebar/Sidebar'
import Items from '../containers/Items'
import Comments from './Comments'

const App = () => (
  <div className="page">
    <Sidebar />
    <div className="main">
      <Items />
      <Comments />
    </div>
  </div>

)

export default App;
