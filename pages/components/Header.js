import React from 'react';
import { Container } from 'semantic-ui-react';
 import Head from 'next/head';


export default props =>{
  return(
  	<div>
    
    <Head>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
    <link rel="stylesheet" href="../static/general.css"></link>
    <script src="http://code.dappbench.com/browser-solc.min.js" type="text/javascript"></script>
    </Head>

    </div>
  );
};