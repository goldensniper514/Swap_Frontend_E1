import React from 'react'
import Link from "next/link";
import type { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import {
    faWhatsapp,
    faTelegram,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import 'bootstrap/dist/css/bootstrap.css'
import { auto } from '@popperjs/core'

const Landing: NextPage = () => {
    return (
        <div>
            <main className="allbordycontent">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-2" id="green">
                            <br />
                            <br />
                            {/* Navigation links in sidebar*/}
                            <Link
                                href='/Swap'
                                style={{
                                    marginRight: '1rem'
                                }}
                            >
                                Swap
                            </Link>
                            <br />
                            <br />

                            <Link
                                href='/MyPools'
                                style={{
                                    marginRight: '1rem'
                                }}
                            >
                                Pools
                            </Link>
                            <br />
                            <br />
                            <br />
                        </div>
                        {/*Contains the main content of the webpage*/}
                        <div className="col-10 col-md-8 py-4">
                            <div className="homemaincontent ">
                                <h1 className='text'>THE FIRST NFT POOLS <span>FOR BEGINNERS</span></h1>
                                <div className="topbitcoin ">
                                    <div>
                                        <span>NEWS</span>
                                    </div>
                                    <img src="/bitcoin.png" alt="bitcoin" width={auto}
                                        height={auto} />
                                </div>
                                {/* features */}
                                <div className="feature-sec my-4 py-4">
                                    <h2 className="pb-4 text">Features</h2>
                                    <div className="row">
                                        <div className="col-md-4 effect">
                                            <div className="feature-swap d-flex">
                                                <div className="feature-news">
                                                    <span>
                                                        NE
                                                        <br />
                                                        WS
                                                    </span>
                                                </div>
                                                <img src="/featureimg.png" alt="featureimg" width={auto}
                                                    height={auto} />
                                                <div className="pl-4">
                                                    <h4>Swap</h4>
                                                    <p>
                                                        Swap your
                                                        <br /> NFTs
                                                    </p>
                                                    <span className="borderspan" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 effect">
                                            <div className="feature-swap d-flex">
                                                <div className="feature-news">
                                                    <span>
                                                        NE
                                                        <br />
                                                        WS
                                                    </span>
                                                </div>
                                                <img src="/featureimg.png" alt="featureimg" width={auto}
                                                    height={auto} />
                                                <div className="pl-4">
                                                    <h4>Provide</h4>
                                                    <p>
                                                        Provide
                                                        <br /> liquidity
                                                    </p>
                                                    <span className="borderspan" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 effect">
                                            <div className="feature-swap d-flex">
                                                <div className="feature-news">
                                                    <span>
                                                        NE
                                                        <br />
                                                        WS
                                                    </span>
                                                </div>
                                                <img src="/featureimg.png" alt="featureimg" width={auto}
                                                    height={auto} />
                                                <div className="pl-4">
                                                    <h4>Earn</h4>
                                                    <p>
                                                        Earn swapping
                                                        <br /> fees
                                                    </p>
                                                    <span className="borderspan" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of features */}
                                {/* Why us */}
                                <div className="feature-sec my-4 py-4 ">
                                    <h2 className="pb-4 text">Why us</h2>
                                    <div className="row">
                                        <div className="col-md-4 effect">
                                            <div className="feature-swap d-flex">
                                                <div className="feature-news">
                                                    <span>
                                                        NE
                                                        <br />
                                                        WS
                                                    </span>
                                                </div>
                                                <img src="/featureimg.png" alt="featureimg" width={auto}
                                                    height={auto} />
                                                <div className="pl-4">
                                                    <h4>Security</h4>
                                                    <p>
                                                        Secure
                                                        <br /> transactions
                                                    </p>
                                                    <span className="borderspan" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 effect">
                                            <div className="feature-swap d-flex">
                                                <div className="feature-news">
                                                    <span>
                                                        NE
                                                        <br />
                                                        WS
                                                    </span>
                                                </div>
                                                <img src="/featureimg.png" alt="featureimg" width={auto}
                                                    height={auto} />
                                                <div className="pl-4">
                                                    <h4>Fast</h4>
                                                    <p>
                                                        Fast
                                                        <br />transactions
                                                    </p>
                                                    <span className="borderspan" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 effect">
                                            <div className="feature-swap d-flex">
                                                <div className="feature-news">
                                                    <span>
                                                        NE
                                                        <br />
                                                        WS
                                                    </span>
                                                </div>
                                                <img src="/featureimg.png" alt="featureimg" width={auto}
                                                    height={auto} />
                                                <div className="pl-4">
                                                    <h4>Simple</h4>
                                                    <p>
                                                        Easy to use UI
                                                        <br />
                                                    </p>
                                                    <span className="borderspan" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end of Why us */}
                                {/* about us */}
                                <div className="about-us">
                                    <div className="p-2 p-md-5">
                                        <h2 className='text'>About Us</h2>
                                        <div className="aboutus-content">
                                            <p className="mb-0">IotaOrigin UG</p>
                                            <a href="tel:+380 (50) 477 47 47">+380 (50) 477 47 47</a>
                                            <p className="mb-0">conta@iotaorigin.de</p>
                                        </div>
                                        <div className="aboutus-icons">
                                            <InstagramIcon style={{ color: "#FFFFFF" }} />
                                            <TelegramIcon style={{ color: "#FFFFFF" }} />
                                            <  WhatsAppIcon style={{ color: "#FFFFFF" }} />
                                        </div>
                                    </div>
                                    <div className="footer-content">
                                        <div className="d-md-flex justify-content-between">
                                            <img src="/logo-top.png" alt="logo-top" width={auto}
                                                height={auto} />

                                            <p className="mb-0  text-right">
                                                (c) 2022 All right reserved <br />
                                                Iotaorigin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* end of about us */}
                            </div>
                        </div>
                        <div className="col-md-2 pr-0 d-none d-md-block">
                            <div className="bitcoin-right text-right">
                                <img src="/side-top.png" alt="side-top" width={auto}
                                    height={auto} />
                                <img src="/nftpools.png" alt="nftpools" width={auto}
                                    height={auto} />
                                <img src="/bitcoin-bottom.png" alt="bitcoin" width={auto}
                                    height={auto} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Landing;