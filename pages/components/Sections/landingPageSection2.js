import React from 'react';
import { Segment, Card, TextArea, Button,Dropdown,List,Grid} from 'semantic-ui-react';


class landingPageSection2 extends React.Component{

	selectCompiler=(event)=>{
		//set compiler in parent component
		this.props.selectCompiler(event.target.innerText);
		this.props.removeErrorMessage();
	}



	render(){
		return (

				<Segment style = {{height:'850px',overflow: 'scroll'}}>
				 	<Button primary style = {{width : '255px'}} onClick={this.props.onSubmit} loading = {this.props.loading}>Run Audit</Button>
				 	<br/>
				 	<br/>
				 	<Dropdown
					    placeholder='Select Compiler'
					    fluid
					    selection 
					    onChange = {()=>this.selectCompiler(event)}
					    options={listOfCompilers}
				  	/>


				  	<h4>General Stats</h4>
					<Segment>
					 	<label style = {{color:'grey'}}> Time of Audit: </label>
					 	<label > { this.props.timeOfAudit }  </label> 
					 	<br/>
					 	<label style = {{color:'grey'}}> Warnings:  </label> 
					 	<label > { this.props.warningsList }  </label> 
					 	<br/>
					 	<label style = {{color:'grey'}}> Estimated Gas Cost: </label>
					 	<label > { this.props.gasEstimate }  </label> 
					 	<br/>
					 	<label style = {{color:'grey'}}> Approx Lines of Code: </label>
					 	<label > { this.props.noOfLines }  </label> 

				 	</Segment>

				 	<h4 style={{color:'#FF9933'}}>Warnings</h4>
				 	<Segment>
				 	<List divided relaxed>
				 	{this.props.renderedList}
				 	</List>
				 	</Segment>
				 

			 </Segment>
			)
	}
}

//list of all compilers arranged in object form according to the imported semantic UI requirements for the dropw down menu
const listOfCompilers =  [
{text:"soljson-v0.8.26+commit.8a97fa7a.js", value:"soljson-v0.8.26+commit.8a97fa7a.js"},
{text:"soljson-v0.8.20+commit.a1b79de6.js", value:"soljson-v0.8.20+commit.a1b79de6.js"},
{text:"soljson-v0.5.9+commit.e560f70d.js", value:"soljson-v0.5.9+commit.e560f70d.js"},
{text:"soljson-v0.5.5+commit.47a71e8f.js", value:"soljson-v0.5.5+commit.47a71e8f.js"},
{text:"soljson-v0.5.0+commit.1d4f565a.js", value:"soljson-v0.5.0+commit.1d4f565a.js"},
{text:"soljson-v0.4.26+commit.4563c3fc.js", value:"soljson-v0.4.26+commit.4563c3fc.js"},
{text:"soljson-v0.4.24+commit.e67f0147.js", value:"soljson-v0.4.24+commit.e67f0147.js"}
];

export default landingPageSection2;



