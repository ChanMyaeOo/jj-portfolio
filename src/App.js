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
import Design from './pages/design/Design'
import WdDevelopment from './pages/wd-development/WdDevelopment'
import Contact from './pages/contact/Contact'
import './style.css'

const App = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route path="/contact">
                        <Layout>
                            <Contact />
                        </Layout>
                    </Route>
                    <Route path="/wordpress-development">
                        <Layout>
                            <WdDevelopment />
                        </Layout>
                    </Route>
                    <Route path="/web-design">
                        <Layout>
                            <Design />
                        </Layout>
                    </Route>
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