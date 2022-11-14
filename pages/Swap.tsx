import React from 'react';
import Layout from './components/Layout';
import type { NextPage } from "next";

import Link from "next/link";
import { auto } from '@popperjs/core'
const swap: NextPage = () => {
    return (
        <Layout>
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
                            <div className="homemaincontent">
                                <h1 className='text'>Swapping</h1>
                                <div className="swappingdiv mt-5 px-md-4">
                                    <h3 className="pl-xl-5 my-5 py-md-3" style={{ color: "#fff" }}>
                                        Celo / Geor.A.D. <span className="pl-4">(1 C elo = 1 G)</span>
                                    </h3>
                                    <form>
                                        <div className="swaping-sub">
                                            <div className="d-flex">
                                                <h4 className="px-4 mb-4">swap</h4>
                                                <i className="fa fa-gear ml-auto" />
                                            </div>
                                            <div className="select-token p-md-4 p-3">
                                                <h4>From</h4>
                                                <div className="d-md-flex">
                                                    <input type="text" placeholder="0.0" />
                                                    <select className="form-control ml-auto">
                                                        <option>Select a token</option>
                                                        <option>one</option>
                                                        <option>two</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="select-token p-md-4 p-3">
                                                <h4>To</h4>
                                                <div className="d-md-flex">
                                                    <input type="text"  placeholder="0.0"  />
                                                    <select className="form-control ml-auto">
                                                        <option>Select nft</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="select-token p-md-4 p-3">
                                                <h4 className='target'>Target Wallet</h4>
                                            </div>
                                            <div>
                                                <button className="wallet-connect" type="button">
                                                    Connect Wallet
                                                </button>
                                             
                                            </div>
                                        </div>
                                        <div className="text-center py-4">
                                            <a href="#" className="recent-trans">
                                                {" "}
                                                Recent Transactions
                                            </a>
                                        </div>
                                    </form>
                                   
                                </div>
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

        </Layout>
    );
}
export default swap;