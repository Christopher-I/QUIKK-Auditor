import React from 'react';
import { Container, Form, TextArea, Grid } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import LandingPageSection1 from './Sections/landingPageSection1';
import LandingPageSection2 from './Sections/landingPageSection2';


class landingPage extends React.Component{

	state = {
		currentCompiler:'',
		contractCode:'',
		creationCost:'',
		executionCost:'',
		gasEstimate:'',
		timeOfAudit:'',
		fileSize: '',
		vunerabiltiesFound: '',
		noOfLines: '',
		percent:'',
		errorMessage:'',
		successMessage:'',
		loading:false
	}

	//get Time of Audit
	setTimeOfAudit=()=>{

		let today = new Date();
		let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		let dateTime = date+' '+time;

		this.setState({
			timeOfAudit: dateTime
		})
	}

	//receive compiler version from child component-landingPageSection1 and store it to state
	selectCompiler =(compiler)=>{
		this.setState({
			currentCompiler:compiler
		})
	}

	//receive contract code from child component-landingPageSection2 and store it to state
	storeContractCodeToState=(contractCode)=>{
		this.setState({
			contractCode: contractCode
		})
	}

	removeErrorMessage=()=>{
		this.setState({
			errorMessage: '',
			successMessage:'',
			percent:'0'
		})
	}

	//Compile contract and run audit
	onSubmit =()=>{
		if(this.state.currentCompiler){
		this.setTimeOfAudit();
		let self = this;

		this.setState({
		  		loading: true,
		  		errorMessage:'',
		  		successMessage:''
		  	})
		let source = this.state.contractCode;
		let dataArray = this.state.contractCode.split("\n");
		
		//printlist of available compilers
		// BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
		//   //console.log(soljsonSources);
		//   //console.log(soljsonReleases);
		// });

		//Load a specific compiler version
		BrowserSolc.loadVersion.bind(this)(this.state.currentCompiler, function(compiler){
		
		  let optimize = 1;
		  let result = compiler.compile(source, optimize);
		  let totalGasCost = result.contracts[":Migrations"].gasEstimates.creation[0]+result.contracts[":Migrations"].gasEstimates.creation[1];
		  if(result.errors){

		  	self.setState({
		  		errorMessage: result.errors[0]
		  	})
		  }else{
		  	self.setState({
		  		noOfLines:dataArray.length,
		  		creationCost:result.contracts[":Migrations"].gasEstimates.creation[0],
		  		executionCost:result.contracts[":Migrations"].gasEstimates.creation[1],
		  		gasEstimate : totalGasCost,
		  		percent: 100,
		  		successMessage:"Audit Complete!"
		  	})

		  }
		  console.log(result.contracts[":Migrations"].gasEstimates.creation);
		});

	}else{
		this.setState({
			errorMessage:"Please select a compiler"
		})

	}

		this.setState({
		  		loading: false
		  	})  
	}


	render(){

		return(
			<Container style={{width:'1230px'}}>
			  <Header/>
				<Grid>
				    <Grid.Row>

					      <Grid.Column width={12}>
					      <LandingPageSection1
					      removeErrorMessage = {this.removeErrorMessage}
					      loading = {this.state.loading}
					      successMessage = {this.state.successMessage}
					      errorMessage = {this.state.errorMessage}
					      percent = {this.state.percent}
					      storeContractCodeToState = {this.storeContractCodeToState}
					      />
					      </Grid.Column>


					      <Grid.Column width={4}>
					      <LandingPageSection2 
					      gasEstimate = {this.state.gasEstimate}
					      removeErrorMessage = {this.removeErrorMessage}
					      loading = {this.state.loading}
					      noOfLines = {this.state.noOfLines}
					      timeOfAudit = {this.state.timeOfAudit}
					      vunerabiltiesFound = {this.state.vunerabiltiesFound}
					      onSubmit ={this.onSubmit}
					      selectCompiler = {this.selectCompiler}
					      />
					      </Grid.Column>

				    </Grid.Row>
			    </Grid>
		  </Container>
		  )

	}
}

export default landingPage;