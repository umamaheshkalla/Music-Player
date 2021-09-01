import {BrowserRouter, Switch, Route} from 'react-router-dom'

import AppStore from './components/AppStore'

import MusicTrackBlog from './components/MusicTrackBlog'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppStore} />
      <Route exact path="/:id" component={MusicTrackBlog} />
    </Switch>
  </BrowserRouter>
)
export default App
