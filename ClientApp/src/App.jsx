import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import NotFound from './pages/NotFound'
import SearchPage from './pages/SearchPage'
import SearchResults from './pages/SearchResults'
import './custom.scss'
import AddQuestion from './pages/AddQuestion'
import QuestionDetails from './pages/QuestionDetails'
import SignUp from './pages/SignUp'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={HelloWorld} />
          <Route exact path="/typescript" component={HeyWorld} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/ask" component={AddQuestion} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search/:searchTerm" component={SearchResults} />
          <Route
            exact
            path="/questions/:questionId"
            component={QuestionDetails}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
