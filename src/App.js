import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import './style.css'

const App = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route path="/portfolio">
                        <Layout>
                            <Portfolio />
                        </Layout>
                    </Route>
                    <Route path="/about">
                        <Layout>
                            <About />
                        </Layout>
                    </Route>
                    <Route path="/">
                        <Layout>
                            <Home />
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App