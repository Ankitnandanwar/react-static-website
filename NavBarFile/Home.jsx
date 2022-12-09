import React from 'react';
import {Link} from 'react-router-dom'
import Banner from './Images/coffee.png'
import CardSection from './CardSection';
// import coffee_1 from './Images/coffee-1.jpg'
// import coffee_2 from './Images/coffee-2.jpg'
// import coffee_3 from './Images/coffee-3.jpg'
// import coffee_4 from './Images/coffee-4.jpg'
// import coffee_5 from './Images/coffee-5.jpg'
// import coffee_6 from './Images/coffee-6.jpg'





const Home = () => {
  return (
    <div>
        <section id='header' className='d-flex align-items-center'>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1 className='Headermain'><strong>CAMPOS.</strong></h1>
                                <p className='my-3 fw-bold'>1445 Floral Ave. New York City, United States</p>
                                <div className='mt-3'>
                                    <Link to="/menu">Get Started</Link>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={Banner} alt="coffee-img" className='animate' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </section>

        <CardSection/>

        
    </div>
  )
}

export default Home