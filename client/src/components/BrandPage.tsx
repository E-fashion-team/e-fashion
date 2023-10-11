import React from "react";
import asset from '../images/Brandpage/unsplash_DbOdCSoefsg.png'
import asset1 from '../images/Brandpage/albert-dera-ILip77SbmOE-unsplash 1.png'
import tick from '../images/Brandpage/tick.svg'
import vec from '../images/Brandpage/Vector.svg'
import vec1 from '../images/Brandpage/Vector (1).svg'
import grp from '../images/Brandpage/Group.svg'
import "../styles/BrandPage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export const BrandPage = () => {
    return (<div>
        <NavBar/>
        <div className="brand-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="group">
                            <div className="overlap-group-2">
                                <div className="overlap-group-2">
                                    <img className="unsplash-dbodcsoefsg" alt="Unsplash dbodcsoefsg" src={asset} />
                                    <img className="photo" alt="Photo" src={asset1} />
                                </div>
                                <div className="text-wrapper-8">Zara</div>
                                <div className="text-wrapper-9">@zara</div>
                                <div className="frame">
                                    <div className="text-wrapper-10">Follow</div>
                                </div>
                            </div>
                            <p className="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo adipiscing viverra et etiam vestibulum
                                bibendum nec neque. Enim quis imperdiet sit urna. Commodo adipiscing viverra et etiam vestibulum
                                bibendum nec neque. Enim quis imperdiet sit urna
                            </p>
                            <p className="element-following">
                                <span className="span">11</span>
                                <span className="text-wrapper-11">&nbsp;&nbsp;</span>
                                <span className="text-wrapper-12">Following</span>
                            </p>
                            <p className="element-followers">
                                <span className="span">3M</span>
                                <span className="text-wrapper-11">&nbsp;&nbsp;</span>
                                <span className="text-wrapper-12">Followers</span>
                            </p>
                            <p className="created-by-farhan">
                                <span className="text-wrapper-13">Created By&nbsp;&nbsp;</span>
                                <span className="text-wrapper-14">Farhan</span>
                            </p>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-3">
                                <div className="ellipse" />
                                <img className="vector" alt="Vector" src={tick} />
                            </div>
                        </div>
                      
                    </div>
                    <div className="frame-2">
                        <div className="div-wrapper">
                            <div className="overlap-group-4">
                                <div className="text-wrapper-15">Items</div>
                                <div className="text-wrapper-16">1k</div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="overlap-group-4">
                                <div className="text-wrapper-17">Owners</div>
                                <div className="text-wrapper-18">100</div>
                            </div>
                        </div>
                        <div className="group-2">
                            <div className="overlap-group-4">
                                <div className="text-wrapper-19">Floor Price</div>
                                <div className="group-3">
                                    <div className="text-wrapper-20">19.6</div>
                                    <img className="vector-2" alt="Vector" src={vec} />
                                </div>
                            </div>
                        </div>
                        <div className="group-4">
                            <div className="overlap-group-4">
                                <div className="text-wrapper-21">Volume Traded</div>
                                <div className="group-5">
                                    <div className="text-wrapper-20">240K</div>
                                    <img className="vector-2" alt="Vector" src={vec} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-6">
                        <div className="text-wrapper-22">Items</div>
                        <div className="group-7">
                            <div className="overlap-2">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-6.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-2.svg" />
                                </div>
                            </div>
                            <div className="div-2">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-4.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-6.svg" />
                                </div>
                            </div>
                            <div className="overlap-3">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-7.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-5.svg" />
                                </div>
                            </div>
                            <div className="overlap-4">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-8.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-4.svg" />
                                </div>
                            </div>
                            <div className="overlap-5">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-5.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-7.svg" />
                                </div>
                            </div>
                            <div className="overlap-6">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-9.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-3.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-wrapper">
                        <div className="group-9">
                            <div className="overlap-2">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="image.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-8.svg" />
                                </div>
                            </div>
                            <div className="div-2">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-4-2.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-12.svg" />
                                </div>
                            </div>
                            <div className="overlap-3">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-7-2.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-11.svg" />
                                </div>
                            </div>
                            <div className="overlap-4">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-8-2.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-10.svg" />
                                </div>
                            </div>
                            <div className="overlap-5">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-5-2.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-13.svg" />
                                </div>
                            </div>
                            <div className="overlap-6">
                                <div className="div-2">
                                    <div className="overlap-group-5">
                                        <div className="text-wrapper-23">@Johny</div>
                                        <div className="text-wrapper-24">Lorem Ipsum</div>
                                        <div className="text-wrapper-25">0.005 ETH</div>
                                        <div className="text-wrapper-26">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-9-2.png" />
                                    </div>
                                </div>
                                <div className="group-8">
                                    <div className="frame-3">
                                        <div className="text-wrapper-27">Buy Now</div>
                                    </div>
                                    <img className="vector-3" alt="Vector" src="vector-9.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-10">
                        
                    </div>
                    <div className="group-15">
                        <div className="frame-5">
                            <img className="vector-4" alt="Vector" src="vector-14.svg" />
                            <div className="text-wrapper-35">Back To Collection</div>
                        </div>
                        <div className="group-16">
                            <div className="overlap-8">
                                <div className="group-17">
                                    <div className="overlap-group-3">
                                        <div className="ellipse" />
                                        <img className="vector" alt="Vector" src="vector-15.svg" />
                                    </div>
                                </div>
                                <div className="group-18">
                                    <div className="overlap-group-3">
                                        <div className="ellipse" />
                                        <img className="vector" alt="Vector" src="vector-16.svg" />
                                    </div>
                                </div>
                                <div className="group-19">
                                    <div className="overlap-group-3">
                                        <div className="ellipse" />
                                        <img className="vector" alt="Vector" src="vector-17.svg" />
                                    </div>
                                </div>
                                <div className="group-20">
                                    <div className="seller">
                                        <div className="overlap-group-6">
                                            <p className="text-wrapper-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="frame-6">
                                                <div className="text-wrapper-37">+ Follow</div>
                                            </div>
                                            <div className="overlap-group-7">
                                                <img className="creator" alt="Creator" src="creator-1.png" />
                                                <img className="photo-2" alt="Photo" src="photo-1.png" />
                                            </div>
                                            <div className="text-wrapper-38">Adidas</div>
                                        </div>
                                    </div>
                                    <div className="seller-2">
                                        <div className="overlap-9">
                                            <p className="text-wrapper-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="frame-7">
                                                <div className="text-wrapper-39">+ Followed</div>
                                            </div>
                                            <div className="overlap-group-7">
                                                <img className="creator" alt="Creator" src="creator-2.png" />
                                                <img className="photo-2" alt="Photo" src="photo-2-2.png" />
                                            </div>
                                            <div className="text-wrapper-40">Nike</div>
                                        </div>
                                    </div>
                                    <div className="seller-3">
                                        <div className="overlap-group-6">
                                            <p className="text-wrapper-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="frame-6">
                                                <div className="text-wrapper-37">+ Follow</div>
                                            </div>
                                            <div className="overlap-group-7">
                                                <img className="creator" alt="Creator" src="creator-3.png" />
                                                <img className="photo-2" alt="Photo" src="photo-3.png" />
                                            </div>
                                            <div className="text-wrapper-41">Lacoste</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="line-6"  />
                        <div className="line-7"  />
                        <div className="line-8"  />
                        <div className="line-9"  />
                        <div className="line-10"  />
                        <div className="group-21">
                            <div className="group-22">
                                <div className="text-wrapper-42">Status</div>
                            </div>
                            <img className="vector-5" alt="Vector" src={vec1} />
                        </div>
                        <div className="group-23">
                            <div className="group-24">
                                <div className="text-wrapper-42">Price</div>
                            </div>
                            <img className="vector-6" alt="Vector" src={vec1} />
                        </div>
                        <div className="group-25">
                            <div className="group-26">
                                <div className="text-wrapper-42">Collections</div>
                            </div>
                            <img className="vector-6" alt="Vector" src={vec1} />
                        </div>
                        <div className="group-27">
                            <div className="group-28">
                                <div className="text-wrapper-42">Chains</div>
                            </div>
                            <img className="vector-6" alt="Vector" src={vec1} />
                        </div>
                        <div className="group-29">
                            <div className="text-wrapper-42">Categories</div>
                            <img className="vector-6" alt="Vector" src={vec1} />
                        </div>
                        <div className="group-30">
                            <div className="text-wrapper-42">On Sale In</div>
                            <img className="vector-6" alt="Vector" src={vec1} />
                        </div>
                        <div className="group-31">
                            <div className="text-wrapper-43">Filter</div>
                            <img className="group-32" alt="Group" src={grp} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};
