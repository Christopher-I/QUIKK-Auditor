import React from 'react';
import {Modal,Form,TextArea,Segment, Button,Input} from 'semantic-ui-react';


export default()=>{

	return(
		<Segment>
        <Modal trigger={<Button style={{marginTop:'775px'}} basic circular icon='comment alternate outline' size='huge'>Suggestion Box</Button>}>
		    <Modal.Header style={{color:'grey'}}>
		    Thank you for taking the time to leave some feedback, I am a solo enthusiast who created this auditor for fun and to contribute to our beautiful ecosystem,
		    I appreciate all suggestions, contributions and feedback to help improve this platform.
		    </Modal.Header>
		    <Modal.Content image>
		      <Modal.Description>
		        <Form>
		        <Input label='Name(optional)' placeholder='John Doe.....' />
		        <Input label='Contact Information' placeholder='Email, Telegram,Git..etc' />
		        <br/>
		        <br/>
		        <TextArea  style ={{width:'850px',height:'100px'}} placeholder="Please enter your message here..."/>
		      	<br/>
		      	<br/>
		      	<Button floated='right' secondary>Submit</Button>
		        </Form>
		        <h4>ETH Address: 0x001FabDCb503f618ceE9d79D949301EEBC170647</h4>
		      </Modal.Description>
		    </Modal.Content>
		  </Modal>
		  </Segment>

	)
 }

// class renderedModal extends React.Component{


// 	render(){

// 	return(
//         <Modal trigger={<Button style={{marginTop:'775px'}} basic circular icon='comment alternate outline' size='huge'>Suggestion Box</Button>}>
// 		    <Modal.Header style={{color:'grey'}}>
// 		    Thank you for taking the time to leave some feedback, I am a solo enthusiast who created this auditor for fun and to contribute to our beautiful ecosystem,
// 		    I appreciate all suggestions, contributions and feedback to help improve this platform.
// 		    </Modal.Header>
// 		    <Modal.Content image>
// 		      <Modal.Description>
// 		        <Form>
// 		        <Input label='Name(optional)' placeholder='John Doe.....' />
// 		        <Input label='Contact Information' placeholder='Email, Telegram,Git..etc' />
// 		        <br/>
// 		        <br/>
// 		        <TextArea  style ={{width:'850px',height:'100px'}} placeholder="Please enter your message here..."/>
// 		      	<br/>
// 		      	<br/>
// 		      	<Button floated='right' secondary>Submit</Button>
// 		        </Form>
// 		        <h4>ETH Address: 0x001FabDCb503f618ceE9d79D949301EEBC170647</h4>
// 		      </Modal.Description>
// 		    </Modal.Content>
// 		  </Modal>

// 	)

// 	}
// }
// export default renderedModal;




