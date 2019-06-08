import React from 'react';
import { Button,Segment, Form, TextArea} from 'semantic-ui-react';
// import Web3 from '../../../Ethereum/web3';


class landingPageSection1 extends React.Component{

constructor(props) {
    super(props);

	this.state = {
		contract:''
	}

	this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}


	onSubmit  (){

		var x = this.state.contract.split("\n");
		var source = this.state.contract;

		BrowserSolc.getVersions(function(soljsonSources, soljsonReleases) {
		  console.log(soljsonSources);
		  //console.log(soljsonReleases);
		});

		//Load a specific compiler version
		BrowserSolc.loadVersion("soljson-v0.4.24+commit.e67f0147.js", function(compiler) {
		  		// var source = "" + 
				  //  "contract test {\n" +
				  //  "   function multiply(uint a) returns(uint d) {\n" +
				  //  "       return a * 7;\n" +
				  //  "   }\n" +
				  //  "}\n";
		
		  let optimize = 1;
		  let result = compiler.compile(source, optimize);
		  console.log(result);
		});


	}

	handleChange(event){

		this.setState({
			contract:event.target.value
		});
	}



	render(){
	return (
		<Segment style = {{height:'850px'}}>
			<h1> QUIKK Smart Contract Auditor</h1> 


			 <p style ={{color:'grey'}}> light, open-source smart contract auditor for ethereum</p>

			 <Form >
			 <TextArea value= {this.state.contract} onChange={this.handleChange} style ={{height:'700px'}} placeholder="Paste your smart contract code here..."/>
			 <Button primary floated = "right" style ={{marginTop:'10px'}} onClick ={this.onSubmit} >Run Audit</Button>
			 </Form>
		 </Segment>
		)
	}
}

export default landingPageSection1;