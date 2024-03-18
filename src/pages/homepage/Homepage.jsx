import React from 'react';
import { Box, Typography } from '@mui/material';

const Homepage = () => {
  return (
    <Box className='bordered' display='flex' flexDirection='column' p={10} alignItems="center">
      <Box maxWidth="800px" textAlign="center">
        <Typography variant='h4' sx={{ letterSpacing: '2px', textTransform: 'uppercase', color: '#007BFF', marginBottom: '20px' }}>
          Web5 AD.
        </Typography>
        <Typography variant='p' fontSize='18px' paragraph={true} style={{ color: '#333333', marginBottom: '20px' }}>
          Promote your biz AD for Bitcoin $RNT or L$VE in Telegram {' '}
          <a href="https://t.me/lovebrc" target='_blank' rel='noreferrer' style={{ color: '#007BFF' }}>
            Love BRC
          </a>{' '} 
          or in the LUV NFT Discord {' '}
          <a href="https://discord.gg/PNFrxJNG6z" target='_blank' rel='noreferrer' style={{ color: '#007BFF' }}>
            #bitcoin channel.
          </a>{' '} 
          <br />
        </Typography>
        <Typography variant='p' fontSize='18px' paragraph={true} style={{ color: '#333333', marginBottom: '20px' }}>
          Start writing your posts using Markdown, and check out these{' '}
          <a href="https://www.markdownguide.org/basic-syntax/" target='_blank' rel='noreferrer' style={{ color: '#007BFF' }}>
            Markdown syntax tips
          </a>{' '}
          to get familiar with it.
        </Typography>
        <Typography variant='p' fontSize='18px' paragraph={true} style={{ color: '#333333' }}>
          All your posts are securely stored in Web3.storage IPFS clusters. Make sure to have your own cluster at{' '}
          <a href="https://web3.storage/" target='_blank' rel='noreferrer' style={{ color: '#007BFF' }}>
          Web3.storage
          </a>{' '}
          for full control. The first 5GB of storage is free.
        </Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
