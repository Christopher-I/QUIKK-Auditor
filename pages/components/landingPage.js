import React from 'react';
import { Container, Segment, Form, TextArea,Grid, Button } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import LandingPageSection1 from './Sections/landingPageSection1';
import LandingPageSection2 from './Sections/landingPageSection2';


class landingPage extends React.Component{
	render(){

		return(
			<Container style={{width:'1230px'}}>
			  <Header/>
				<Grid>
				    <Grid.Row>

					      <Grid.Column width={12}>
					      <LandingPageSection1/>
					      </Grid.Column>


					      <Grid.Column width={4}>
					      <LandingPageSection2/>
					      </Grid.Column>

				    </Grid.Row>
			    </Grid>
		  </Container>
		  )

	}
}

export default landingPage;