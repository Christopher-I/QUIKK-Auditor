import React from 'react';
import { Segment, Card, TextArea, Button} from 'semantic-ui-react';



class landingPageSection2 extends React.Component{

	state ={
		fileSize: '1',
		vunerabiltiesFound: '4',
		noOfLines: '200',
		contract: '',
		timeOfAudit:''
	}

	componentDidMount(){

		let today = new Date();
		let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		let dateTime = date+' '+time;

		this.setState({
			timeOfAudit: dateTime
		})
	}


	render(){
	return (
			<Segment style = {{height:'850px'}}>
			 	<Button primary style = {{width : '250px'}} >Run Audit</Button>
			 	<br/>

			 	<h4> Result</h4>
			 	<Segment>
			 	<label style = {{color:'grey'}}> Time of Audit: </label>
			 	<label > { this.state.timeOfAudit }  </label> 
			 	<br/>
			 	<label style = {{color:'grey'}}> Vunerabilties Found:  </label> 
			 	<label > { this.state.vunerabiltiesFound }  </label> 
			 	<br/>
			 	<label style = {{color:'grey'}}> File Size: </label>
			 	<label > { this.state.fileSize }  </label> 
			 	<br/>
			 	<label style = {{color:'grey'}}> Lines of Code: </label>
			 	<label > { this.state.noOfLines }  </label> 

			 	</Segment>
			 

		 </Segment>
		)
	}
}

export default landingPageSection2;



