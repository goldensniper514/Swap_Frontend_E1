import { Typography, TextField, FormControl } from '@mui/material';
import React from 'react';
import Layout from './components/Layout';
import type { NextPage } from "next";
import CreatePoolButton from './components/vaults/CreatePoolButton';
import CreateRewardPairButton from './components/vaults/CreateRewardPairButton';

const CreateVaults: NextPage =  () => {

    return (
        <Layout>
            <div className='vaultCreationContainer'>
                <div className='header'>
                    <Typography
                        variant='h2'
                        gutterBottom
                    >
                        Create Your Vault
                    </Typography>
                </div>
                <div className='vaultCreationBody'>
                    <div className='topTwo'>
                        <div className='parameters'>
                            <Typography
                                variant='h4'
                                gutterBottom
                            >
                                Set Parameters for Pool
                            </Typography>
                            
                        </div>
                        <div className='rewards'>
                            <Typography
                                variant='h4'
                                gutterBottom
                            >
                                Set Rewards Options
                            </Typography>
                        </div>
                    </div>
                    <div className='bottomOne'>
                        <div className='summary'>
                            <Typography
                                variant='h4'
                                gutterBottom
                            >
                                Summary of Vault Settings
                            </Typography>
                        </div>
                    </div>
                </div>
                <CreatePoolButton />
                <CreateRewardPairButton />
            </div>
        </Layout>
    );
}

export default CreateVaults;