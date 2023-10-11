import React from 'react'
import '../styles/drops.css'
import BrandDropCard from './BrandDropCard'
import NavBar from './NavBar'
import Footer from './Footer'

const Drops = () => {
    return (
    <div>
        
  <div className='nav'><NavBar/>  </div>
        <div className='exclusive'>
            <div className="label">
                <div className="text-wrapper">Exclusive Drops</div>
                <div className='disc'>
                    <p className="text-wrapper1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate tortor ipsum neque nulla. Et turpis
                        scelerisque vulputate elementum, egestas neque scelerisque turpis. Adipiscing lacus vel lobortis sit tincidunt
                        enim, libero. In dignissim tortor sit sit convallis morbi.
                    </p>
                </div>
                <div>
                    <BrandDropCard/>
                    </div>
            </div> 
          
     </div>
      <Footer/>  
    </div>
    
    )
}

export default Drops