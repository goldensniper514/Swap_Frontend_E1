import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Layout from './components/Layout';
import type { NextPage } from "next";

import Link from "next/link";
import { auto } from '@popperjs/core'
const MyPools: NextPage = () => {


    const canvasEl = useRef(null);

    const colors = {
      purple: {
        default: "rgba(149, 76, 233, 1)",
        half: "rgba(149, 76, 233, 0.5)",
        quarter: "rgba(149, 76, 233, 0.25)",
        zero: "rgba(149, 76, 233, 0)"
      },
      indigo: {
        default: "rgba(80, 102, 120, 1)",
        quarter: "rgba(80, 102, 120, 0.25)"
      }
    };
  
    useEffect(() => {
      const ctx = canvasEl.current.getContext("2d");
      // const ctx = document.getElementById("myChart");
  
      const gradient = ctx.createLinearGradient(0, 16, 0, 600);
      gradient.addColorStop(0, colors.purple.half);
      gradient.addColorStop(0.65, colors.purple.quarter);
      gradient.addColorStop(1, colors.purple.zero);
  
      const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
  
      const labels = [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
        "Week 8",
        "Week 9",
        "Week 10"
      ];
      const data = {
        labels: labels,
        datasets: [
          {
            backgroundColor: gradient,
            label: "My First Dataset",
            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.purple.default,
            lineTension: 0.2,
            pointBackgroundColor: colors.purple.default,
            pointRadius: 3
          }
        ]
      };
      const config = {
        type: "line",
        data: data
      };
      const myLineChart = new Chart(ctx, config);
  
      return function cleanup() {
        myLineChart.destroy();
      };
    });


    return (
        <Layout>
            <main className="allbordycontent">
                {/* header */}
                {/* end of header */}
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
                                <h1 className="text">Pools</h1>
                                <div className="poolchat text-center">
                                    {/* <img src="/pool_chart.png" alt="chart" /> */}
                                <canvas id="myChart" ref={canvasEl} height="100" style={{width:"50%",marginLeft:"50px"}} />

                                </div>
                                <div className="row my-5 effects">
                                    <div className="col-md-6">
                                        <div className="celopoolo">
                                            <h3 style={{ color: "#fff" }}>
                                                Celo / Geor.A.D. <span className="pl-2">(1 C elo = 1 G)</span>
                                            </h3>
                                            <div className="row">
                                                <div className="col-6">
                                                    <span className="left-head">APY</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">200%</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">APR</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">3.98 %</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards Expiry</span>
                                                </div>
                                                <div className="col-6">

                                                    <img src="/celogear.png" alt="celogear" />
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">October 31 2022</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">TVL</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">$5,421.45</span>
                                                </div>
                                                <div className="col-12">
                                                    <button type="button" className="btn providebtn">
                                                        Provide Liquidity/NFT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="celopoolo">
                                            <h3 style={{ color: "#fff" }}>
                                                Celo / Geor.A.D. <span className="pl-2">(1 C elo = 1 G)</span>
                                            </h3>
                                            <div className="row">
                                                <div className="col-6">
                                                    <span className="left-head">APY</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">200%</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">APR</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">3.98 %</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards Expiry</span>
                                                </div>
                                                <div className="col-6">

                                                    <img src="/celogear.png" alt="celogear" />
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">October 31 2022</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">TVL</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">$5,421.45</span>
                                                </div>
                                                <div className="col-12">
                                                    <button type="button" className="btn providebtn">
                                                        Provide Liquidity/NFT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="celopoolo">
                                            <h3 style={{ color: "#fff" }}>
                                                Celo / Geor.A.D. <span className="pl-2">(1 C elo = 1 G)</span>
                                            </h3>
                                            <div className="row">
                                                <div className="col-6">
                                                    <span className="left-head">APY</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">200%</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">APR</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">3.98 %</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards Expiry</span>
                                                </div>
                                                <div className="col-6">
                                                    <img src="/celogear.png" alt="celogear" />

                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">October 31 2022</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">TVL</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">$5,421.45</span>
                                                </div>
                                                <div className="col-12">
                                                    <button type="button" className="btn providebtn">
                                                        Provide Liquidity/NFT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="celopoolo">
                                            <h3 style={{ color: "#fff" }}>
                                                Celo / Geor.A.D. <span className="pl-2">(1 C elo = 1 G)</span>
                                            </h3>
                                            <div className="row">
                                                <div className="col-6">
                                                    <span className="left-head">APY</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">200%</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">APR</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">3.98 %</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards Expiry</span>
                                                </div>
                                                <div className="col-6">
                                                    <img src="/celogear.png" alt="celogear" />
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">October 31 2022</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">TVL</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">$5,421.45</span>
                                                </div>
                                                <div className="col-12">
                                                    <button type="button" className="btn providebtn">
                                                        Provide Liquidity/NFT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="celopoolo">
                                            <h3 style={{ color: "#fff" }}>
                                                Celo / Geor.A.D. <span className="pl-2">(1 C elo = 1 G)</span>
                                            </h3>
                                            <div className="row">
                                                <div className="col-6">
                                                    <span className="left-head">APY</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">200%</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">APR</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">3.98 %</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards Expiry</span>
                                                </div>
                                                <div className="col-6">
                                                    <img src="/celogear.png" alt="celogear" />
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">October 31 2022</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">TVL</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">$5,421.45</span>
                                                </div>
                                                <div className="col-12">
                                                    <button type="button" className="btn providebtn">
                                                        Provide Liquidity/NFT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="celopoolo">
                                            <h3 style={{ color: "#fff" }}>
                                                Celo / Geor.A.D. <span className="pl-2">(1 C elo = 1 G)</span>
                                            </h3>
                                            <div className="row">
                                                <div className="col-6">
                                                    <span className="left-head">APY</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">200%</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">APR</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">3.98 %</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards Expiry</span>
                                                </div>
                                                <div className="col-6">

                                                    <img src="/celogear.png" alt="celogear" />
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">Rewards</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">October 31 2022</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="left-head">TVL</span>
                                                </div>
                                                <div className="col-6">
                                                    <span className="right-head">$5,421.45</span>
                                                </div>
                                                <div className="col-12">
                                                    <button type="button" className="btn providebtn">
                                                        Provide Liquidity/NFT
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button className="btn loadmorebtn" type="button">
                                            Load more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 pr-0 d-none d-md-block">
                            <div className="bitcoin-right text-right">
                                <img src="/side-top.png" alt="top" width={auto}
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

export default MyPools;