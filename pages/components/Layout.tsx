import React, { ReactNode } from "react";
import { AppBar, Container, Toolbar, Box, Typography } from "@mui/material";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Header from "./Header";

type Props = {
    children: ReactNode;
};

const pages = ["Collections", "Trades"];

export function Layout({ children }: Props) {
    return (
        <>
            <Header />

            {/* <AppBar position='static'>
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <Box
                            sx={{ 
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                }}
                            >
                                <Link
                                    href='/'
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    Home
                                </Link>
                            </Typography>
                            {pages.map((page) => (
                                    <Typography
                                        key={page}
                                        sx={{
                                            color: 'white',
                                        }}
                                    >
                                        <Link
                                            href={'/'+page}
                                            style={{
                                                marginRight: '1rem'
                                            }}
                                        >
                                            {page}
                                        </Link>
                                    </Typography>
                            ))}
                        </Box>
                        <Box
                            sx={{ flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'row-reverse'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                            >
                                <Link
                                    href='/MyNfts'
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    My NFTs
                                </Link>
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                            >
                                <Link
                                    href='/MyPools'
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    My Pools
                                </Link>
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                            >
                                <Link
                                    href='/MyVaults'
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    My Vaults
                                </Link>
                            </Typography>
                        </Box>
                        <ConnectButton />
                    </Toolbar>
                </Container>
            </AppBar> */}
            <main className="main">{children}</main>
        </>
    );
}

export default Layout;
