import React, { useEffect, useState } from "react";
import asset from "../images/BrandStorepage/+.png"
import asset1 from "../images/BrandStorepage/Vector.svg"
import asset2 from '../images/BrandStorepage/image 13.png'
import asset3 from '../images/BrandStorepage/image 15.png'
import asset4 from "../images/BrandStorepage/Vector (1).svg"
import "../styles/BrandStorePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { number } from "prop-types";


interface Product {
 
    id: number;
    name: string;
    price: number;  
    image:string;
  category:string;
  UserId:number;
  
  
  }
  interface propsState{
    prod:Product
  }
  

export const BrandStorePage = (props:any) => {
    const location = useLocation();
    const data  = location.state;
    const [count,setCount] = useState(1);
    useEffect(()=>{
        
    },[count])

    return (
    <div>
        <NavBar/>
        <div className="brand-store-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                
                    <div className="overlap-2">
                        <div className="overlap-2">
                            <div className="item">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper-14">{data.name}</div>
                                    <div className="text-wrapper-15">Lorem Ipsum</div>
                                    <div className="text-wrapper-16">{data.price}</div>
                                    <img className="rectangle" alt="Rectangle" src={data.image} />
                                    <div className="text-wrapper-17">Current Bid</div>
                                    <div className="group-4">
                                        <div className="frame-2">
                                            <Link to='/error'><div className="text-wrapper-18">Buy Now</div></Link>
                                        </div>
                                        <img className="vector" alt="Vector" src="vector.svg" />
                                    </div>
                                </div>
                            </div>
                            <div className="overlap-3">
                                <div className="group-5">
                                    <div className="group-wrapper">
                                        <div className="group-6">
                                            <img className="vector-2" alt="Vector" src={asset1} />
                                            <div className="text-wrapper-19" onClick={()=>{console.log('Work');
                                            }}>Digital</div>
                                        </div>
                                    </div>
                                    <div className="frame-3">
                                        <img className="mask-group" alt="Mask group" src={asset2} />
                                        <div className="group-7">
                                            <div className="text-wrapper-20">Physical</div>
                                        </div>
                                    </div>
                                    <div className="frame-4">
                                        <img className="mask-group" alt="Mask group" src={asset3} />
                                        <div className="group-8">
                                            <div className="text-wrapper-20">Exclusive</div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="text-wrapper-21">{data.name}</div>
                        </div>
                        <div className="QTY-sec">
                            <div className="text-wrapper-22">QTY</div>
                            <div className="group-9">
                                <div className="overlap-group-3">
                                    <div className="text-wrapper-23">{count}</div>
                               
                                </div>
                                <img className="frame-5" alt="Frame" src={asset} onClick={()=>{
                                    setCount(count+1);
                                    console.log(count)
                                    }}/>
                            </div>
                            <div className="rectangle-wrapper" onClick={()=>{setCount(count-1)}}>
                                <div className="rectangle-3" />
                            </div>
                        </div>
                        <div className="people">
                            <div className="text-wrapper-24">Created By</div>
                            <div className="text-wrapper-25">Owned By</div>
                            <div className="group-10">
                                <div className="text-wrapper-26">@farhan</div>
                                <img className="ellipse" alt="Ellipse" src="ellipse-286.png" />
                            </div>
                            <div className="group-11">
                                <img className="ellipse" alt="Ellipse" src="ellipse-287.png" />
                                <div className="text-wrapper-26">@farhan</div>
                            </div>
                        </div>
                        <p className="text-wrapper-27">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat, sem commodo diam aliquet purus
                            nunc metus velit. Ac turpis orci cursus posuere. Proin phasellus viverra nulla aliquam amet, sapien id.
                            Malesuada gravida nullam sem sollicitudin vestibulum. Molestie rhoncus, at non pharetra tristique iaculis
                            faucibus. Ligula tincidunt ultrices vel tempus eget. Fringilla eget lectus tempor dolor volutpat sed
                            platea sit.
                        </p>
                    </div>
                    <div className="overlap-4">
                        <div className="line-6"/>
                        <div className="line-7"  />
                        <div className="line-8"  />
                        <div className="line-9"  />
                        <div className="group-12">
                            <div className="group-13">
                                <div className="text-wrapper-28">Description</div>
                                <img className="vector-3" alt="Vector" src={asset4} />
                            </div>
                            <img className="vector-4" alt="Vector" src="vector-2.svg" />
                        </div>
                        <div className="text-wrapper-29">Digital</div>
                        <img className="vector-5" alt="Vector" src={asset1} />
                        <img className="vector-6" alt="Vector" src="vector-5.svg" />
                        <img className="group-14" alt="Group" src="group-48095658.png" />
                        <img className="group-15" alt="Group" src="group-48095659.png" />
                        <div className="group-16">
                            <div className="group-17">
                                <div className="text-wrapper-28">Details</div>
                                <img className="vector-7" alt="Vector" src="vector-6.svg" />
                            </div>
                            <img className="vector-8" alt="Vector" src="vector-7.svg" />
                        </div>
                        <div className="group-18">
                            <div className="text-wrapper-28">Physical</div>
                            <img className="mask-group-2" alt="Mask group" src={asset2} />
                        </div>
                        <div className="group-19">
                            <div className="text-wrapper-28">Exclusive</div>
                            <img className="mask-group-2" alt="Mask group" src="mask-group-3.png" />
                        </div>
                    </div>
                    <div className="group-20">
                        <div className="group-21">
                            <div className="div-2">
                                <div className="div-2">
                                    <div className="overlap-group-2">
                                        <div className="text-wrapper-14">@Johny</div>
                                        <div className="text-wrapper-15">Lorem Ipsum</div>
                                        <div className="text-wrapper-16">0.005 ETH</div>
                                        <img className="rectangle" alt="Rectangle" src="rectangle-23-2.png" />
                                        <div className="text-wrapper-17">Current Bid</div>
                                    </div>
                                </div>
                                <div className="group-4">
                                    <div className="frame-2">
                                        <div className="text-wrapper-18">Buy Now</div>
                                    </div>
                                    <img className="vector" alt="Vector" src="vector-9.svg" />
                                </div>
                            </div>
                            <div className="overlap-5">
                                <div className="div-2">
                                    <div className="overlap-group-2">
                                        <div className="text-wrapper-14">@Johny</div>
                                        <div className="text-wrapper-15">Lorem Ipsum</div>
                                        <div className="text-wrapper-16">0.005 ETH</div>
                                        <div className="text-wrapper-17">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-2.png" />
                                    </div>
                                </div>
                                <div className="group-4">
                                    <div className="frame-2">
                                        <div className="text-wrapper-18">Buy Now</div>
                                    </div>
                                    <img className="vector" alt="Vector" src="vector-10.svg" />
                                </div>
                            </div>
                            <div className="overlap-6">
                                <div className="div-2">
                                    <div className="overlap-group-2">
                                        <div className="text-wrapper-14">@Johny</div>
                                        <div className="text-wrapper-15">Lorem Ipsum</div>
                                        <div className="text-wrapper-16">0.005 ETH</div>
                                        <div className="text-wrapper-17">Current Bid</div>
                                        <img className="collection" alt="Collection" src="collection-3.png" />
                                    </div>
                                </div>
                                <div className="group-4">
                                    <div className="frame-2">
                                        <div className="text-wrapper-18">Buy Now</div>
                                    </div>
                                    <img className="vector" alt="Vector" src="vector-8.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper-30">More Collections</div>
                    </div>
                    <div className="frame-6">
                        <div className="text-wrapper-31">View All Collection</div>
                    </div>
                    <div className="group-22">
                        <p className="text-wrapper-32">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat, sem commodo diam aliquet purus
                            nunc metus velit. Ac turpis orci cursus posuere. Proin phasellus viverra nulla aliquam amet, sapien id.
                            Malesuada gravida nullam sem sollicitudin vestibulum. Molestie rhoncus, at non pharetra tristique iaculis
                            faucibus. Ligula tincidunt ultrices vel tempus eget. Fringilla eget lectus tempor dolor volutpat sed
                            platea sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui consequat, sem commodo diam
                            aliquet purus nunc metus velit. Ac turpis orci cursus posuere. Proin phasellus viverra nulla aliquam amet,
                            sapien id. Malesuada gravida nullam sem sollicitudin vestibulum. Molestie rhoncus, at non pharetra
                            tristique iaculis faucibus. Ligula tincidunt ultrices vel tempus eget. Fringilla eget lectus tempor dolor
                            volutpat sed platea
                        </p>
                        <div className="text-wrapper-33">The Story</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
        </div>
    );
};
