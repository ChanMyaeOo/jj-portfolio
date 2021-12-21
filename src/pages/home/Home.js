import React from 'react'
// import useStyles from './styles'
import Hero from '../../components/hero/Hero'
import Business from '../../components/business/Business'
import Creating from '../../components/creating/Creating'
import Experts from '../../components/experts/Experts'

const Home = () => {
    return (
        <div>
            <div style={{ background: '#f2f2f2'}}>
                <Hero />
                <Business />
            </div>
            <Creating />
            <Experts />
        </div>
    )
}

export default Home
