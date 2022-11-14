import { Button, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import Layout from './components/Layout';
import type { NextPage } from "next";


const MyVaults: NextPage = () => {
    return (
        <Layout>
            <div className='myVaultContainer'>
                <div className='header'>
                    <Typography
                        variant='h2'
                        gutterBottom
                    >
                        Welcome to Vaults
                    </Typography>
                </div>
                <div className="separator"></div>
                <div className='vaultBody'>
                    <Button>
                        <Link
                            href='/CreateVaults'
                        >
                        Create Vault 
                        </Link>
                    </Button>
                </div>
            </div>
        </Layout>
    );
}

export default MyVaults;