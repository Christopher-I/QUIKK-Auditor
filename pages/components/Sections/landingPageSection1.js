import React from 'react';
import { Button,Segment, Form, TextArea, Progress,Message} from 'semantic-ui-react';


class landingPageSection1 extends React.Component{

constructor(props) {
    super(props);
	this.state = {
		contractCode:'',
	}
}


//when smart contract code changes update the state of the parent
	handleChangesToContract=(event)=>{
		this.props.removeErrorMessage(); 
		this.props.storeContractCodeToState(event.target.value);
		this.setState({
			contract:event.target.value
		});
	}



	render(){
	return (
		<Segment style = {{height:'850px'}}>
			<h1> QUIKK Smart Contract Auditor</h1> 
			 <p style ={{color:'grey'}}> light, open-source smart contract auditor for ethereum</p>
			 <Form error= {!!this.props.errorMessage} success={!!this.props.successMessage}>
			<Progress percent={this.props.percent} autoSuccess />
			<Message error header = "Error" content = {this.props.errorMessage}/>
			<Message success header = "Success!" content = {this.props.successMessage}/>


			 
			 <TextArea value= {this.state.contract} onChange={this.handleChangesToContract} style ={{maxHeight:'680px',minHeight:'680px'}} placeholder="Paste your smart contract code here..."/>
			 </Form>
		 </Segment>
		)
	}
}

export default landingPageSection1;