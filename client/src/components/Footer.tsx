import React from 'react'
import IconYoutube from '../images/youtube.svg'
import IconDiscord from '../images/discord.svg'
import IconInstagram from '../images/instagram.svg'
import '../styles/footer.css'



const Footer = () => {
    return (
        <div className='footer'>
        <div className="group-18">
                        <div className="overlap-2">
                            <footer className="footer">
                                <div className="group-19">
                                    <div className="text-wrapper-26">About</div>
                                    <div className="text-wrapper-27">Product</div>
                                    <div className="text-wrapper-28">Resource</div>
                                    <div className="text-wrapper-29">Term &amp; Condition</div>
                                    <div className="text-wrapper-30">FAQ</div>
                                </div>
                                <div className="group-20">
                                    <div className="text-wrapper-26">Company</div>
                                    <div className="text-wrapper-27">Our Team</div>
                                    <div className="text-wrapper-28">Partner With Us</div>
                                    <div className="text-wrapper-29">Privacy &amp; Policy</div>
                                    <div className="text-wrapper-30">Features</div>
                                </div>
                                <div className="group-21">
                                    <p className="text-wrapper-31">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque donec non pellentesque ut.
                                    </p>
                                </div>
                                <div className="group-22">
                                    <div className="text-wrapper-26">Contact</div>
                                    <div className="text-wrapper-27">+012 3456789</div>
                                    <div className="text-wrapper-28">adorableprogrammer@gmail.com</div>
                                </div>
                                <div className='group-23'>
                                <img src={IconDiscord} alt="" />
                                    <img src={IconInstagram} alt="" />
                                    <img src={IconYoutube} alt="" />
                                </div>
                            </footer>
                            <div className="text-wrapper-32">LOGO</div>
                        </div>
                    </div>
                    </div>
    )
}

export default Footer