import React from 'react';
import { Container, Form, TextArea, Grid,List } from 'semantic-ui-react';
import Auditor from '../auditor/Auditor';
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
		renderedList:"",
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
		contractCode:'',
		warningsList:'',
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
		renderedList:"",
		})
	}


	renderWarningList=(warnings)=>{

		 //update loading bar
      	this.setState({
		  		percent: '75',
		  		warningsList:warnings.length
		  	})

	let list = warnings.map(warnings => {        
            return (
                <List.Item>
                          <List.Content>
                            <List.Header as='a'>line {warnings.key}</List.Header>
                            <List.Description as='a'>{warnings.value}</List.Description>
                          </List.Content>
                    </List.Item>
            );   
        });

	     //update loading bar
        this.setState({
		  		percent: '100',
		  		renderedList:list
		  	})

	}


	auditCode=(dataArray)=>{
        return Auditor(dataArray);

    }

	//Compile contract and run audit
	onSubmit =()=>{
		//check if compiler is selected by user else notify user
		if(this.state.currentCompiler){
		this.setTimeOfAudit();
		let self = this;


		//notify user of progress
		this.setState({
		  		loading: true,
		  		errorMessage:'',
		  		successMessage:''
		  	})

		//store contract code to state and prepare for compile and audit
		let source = this.state.contractCode;
		//split code into array based on each new line
        let dataArray = source.split("\n");
        let dataArrayLength = dataArray.length;

        //update loading bar
        self.setState({
		  		percent: '25'
		  	})
		
		//printlist of available compilers
		// BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
		//   //console.log(soljsonSources);
		//   //console.log(soljsonReleases);
		// });

		//Load a chosen compiler version
		BrowserSolc.loadVersion.bind(this)(this.state.currentCompiler, function(compiler){
		
		  let optimize = 1;
		  let result = compiler.compile(source, optimize);
		  // console.log(result);
		  // console.log(result.sources[""]);
		  //console.log(result.contracts);






		  //check for errrors in compilation
		  if(result.errors && !result.sources[""]){

		  			  //save all warning and errors to state
		  self.setState({
		  		errorMessage: result.errors[0]
		  	})



		  }else{
		  	//check for warnings in compilation
		  if(result.errors){

		  			  //save all warning and errors to state
		  self.setState({
		  		errorMessage: result.errors[0]
		  	})
		   }



		  	//compilation was succesful, auditing and updating general stats begins at this point 

		  	//compute total gas cost which is the estimated creation cost plus the execution cost
		  //let totalGasCost = result.contracts[":Migrations"].gasEstimates.creation[0]+result.contracts[":Migrations"].gasEstimates.creation[1];

		  	self.setState({
		  		noOfLines:dataArrayLength,
		  		// creationCost:result.contracts[":Migrations"].gasEstimates.creation[0],
		  		// executionCost:result.contracts[":Migrations"].gasEstimates.creation[1],
		  		// gasEstimate : totalGasCost,
		  		percent: 50,
		  		successMessage:"Audit Complete!"
		  	})
		  	//send contract code to auditor and await feed back of array of warnings
		  	let warnings = self.auditCode(dataArray);

		  	//send array of warnings to renderList function to create organized JSX and update state
		  	self.renderWarningList(warnings);

		  }
	
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
					      warningsList = {this.state.warningsList}
					      renderedList = {this.state.renderedList}
					      gasEstimate = {this.state.gasEstimate}
					      removeErrorMessage = {this.removeErrorMessage}
					      loading = {this.state.loading}
					      noOfLines = {this.state.noOfLines}
					      timeOfAudit = {this.state.timeOfAudit}
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