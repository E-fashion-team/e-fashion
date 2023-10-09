import React from 'react'
import '../styles/Home.scss'

const Home = () => {
  return (
    <div id='homePage'>
        <div>Navbar</div>
        {/*  */}
            <div className="topSectionBtns">
                <button>Main Collection</button>
                <button>Creators Market</button>
            </div>
            <div className='bottomSection'>
                <div>
                    <span className='secondSection'>
                        <span>
                            <h1>Clothes are the Spirit of Fation</h1>
                            <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div>
                                <button>Explore Now</button>
                                <button>Create</button>
                            </div>
                            <div id="statistics">
                                <span>
                                    <h4>
                                        100+
                                    </h4>
                                    <h5>
                                        Brands
                                    </h5>
                                </span>
                                <span>
                                    <h4>
                                        20k+
                                    </h4>
                                    <h5>
                                        Fashion Designer
                                    </h5>
                                </span>
                                <span>
                                    <h4>
                                        60+
                                    </h4>
                                    <h5>
                                        Fashion shows
                                    </h5>
                                </span>
                            </div>
                        </span>
                </span>
                </div>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div>
                    <span>LOGOS</span>
                    <span>LOGOS</span>
                    <span>LOGOS</span>
                </div>
                <div>
                    <h2>
                        About Us
                    </h2>
                    <p className='lightParag' >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <span>
                        <img src="" alt="" />
                    </span>
                    <span>
                        <h2>
                            Fashion That Speaks
                        </h2>
                        <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt provident dolorum iste nisi quae, voluptatem odit inventore soluta voluptas unde eveniet, aliquam dolore laborum ullam? Cum assumenda necessitatibus corporis.</p>
                        <button>Show more</button>
                    </span>
                </div>
                <div>
                    <span>
                        <h2>
                            All Collections
                        </h2>
                        <p className='lightParag' >Worlds First Layer 2 Fashions Marketplace</p>
                    </span>
                    <span>
                        <span>
                            <img src="" alt="" />
                            <p className='lightParag' >No Gas Fees</p>
                        </span>
                        <span>
                            <img src="" alt="" />
                            <p className='lightParag' >Carbon Netural NFTs</p>
                        </span>
                        <span>
                            <img src="" alt="" />
                            <p className='lightParag' >Fast And Easy Transactions</p>
                        </span>
                    </span>
                </div>
                <div>
                    <span>
                        <h4>All Collections</h4>
                        <h4>Verified Brands</h4>
                        <h4>Verified Artists</h4>
                        <h4>New Drops</h4>
                        <h4>Live Shows</h4>
                    </span>
                    <span>
                        {//? products will be mapped and rendered here
                        }
                    </span>
                    <span>
                        <h2>
                            New & Trending
                        </h2>
                        <p className='lightParag' >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </span>
                    <span>
                        {//? only new products will be mapped and rendered here
                        }
                    </span>
                    <span>
                        <h2>
                            Upcoming Creators
                        </h2>
                        <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </span>
                    <span>
                        {//? only Upcoming Creators will be mapped and rendered here
                        }
                    </span>
                    <span>
                        <h2>
                            Upcoming Brands
                        </h2>
                        <p className='lightParag' >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </span>
                        {//? only Upcoming Creators will be mapped and rendered here
                        }
                    <span>
                        {//? only Upcoming Brands will be mapped and rendered here
                        }
                    </span>
                    <span>
                        <h2>
                            Freaquently Asked Questions
                        </h2>
                        <p className='lightParag' >Wanna Ask Something?</p>
                    </span>
                    <span>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                    </span>
                    <span>
                        <h1>
                            Highest Quality Collection
                        </h1>
                        <button>Get Started</button>
                    </span>
                </div>
            </div>
        {/*  */}
        <div>Footer</div>
    </div>
  )
}

export default Home