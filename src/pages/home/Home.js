import React from 'react'
// import useStyles from './styles'
import Hero from '../../components/hero/Hero'
import Business from '../../components/business/Business'

const Home = () => {
    return (
        <div>
            <div style={{ background: '#f2f2f2'}}>
                <Hero />
                <Business />
            </div>
        </div>
    )
}

export default Home
