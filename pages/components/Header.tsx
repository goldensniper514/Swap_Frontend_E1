import React from 'react'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
import { auto } from '@popperjs/core'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export function Header() {
    return (
        <div>
            <main className="allbordycontent">
                <header>
                    <nav className="navbar navbar-expand-lg px-5 main-header">
                        <Link className="navbar-brand"
                            href='/'
                            style={{
                                marginRight: '1rem'
                            }}
                        >
                            <img src="/logo-top.png" alt="" width={auto}
                                height={auto} />

                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" >

                                < HorizontalSplitIcon style={{ color: "white" }} />
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="form-inline my-2 mx-lg-auto w-50">
                                <input
                                    className="form-control inputsearch-head w-100"
                                    type="search"
                                    placeholder="Search pools"
                                    aria-label="Search"
                                />
                            </form>
                            {/* <ul className="navbar-nav ml-auto">




                                
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >

                                        <img src="/flag.png" alt="" width={auto}
                                            height={auto} /> EN
                                    </a>
                                    <div
                                        className="dropdown-menu bg-dark"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Connect
                                    </a>
                                    <div
                                        className="dropdown-menu bg-dark"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </div>
                                </li>
                            </ul> */}

<Dropdown as={ButtonGroup}>
      <Button className='bg-transparent border-0 dropcus-btn pr-0' variant="success">   <img src="/flag.png" alt="" width={auto}
                                            height={auto} /> EN</Button>

      <Dropdown.Toggle className='bg-transparent border-0 dropcus-btn'   split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">english</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                              <Dropdown as={ButtonGroup}>
      <Button className='bg-transparent border-0 dropcus-btn pr-0' variant="success">Connect</Button>

      <Dropdown.Toggle className='bg-transparent border-0 dropcus-btn'   split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


                        </div>
                    </nav>
                </header>
            </main>

        </div>
    );
}

export default Header;
