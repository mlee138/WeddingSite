import React from 'react';
import './stylesheets/RSVP.css'

class RSVP extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            name: '',
            error: 'no-error',
            submitMessage: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleChange = (type, event) => {
        if(type === 'name'){
            this.setState({ name: event.target.value});
        } else if(type === 'message') {
            this.setState({ message: event.target.value});
        }
    }

    handleSubmit = () => {
        if(this.state.name && this.state.message){
            const templateId = 'wedding_email';
            this.sendMessage(templateId, {message_html: this.state.message, from_name:this.state.name});
        } else {
            console.log ("Not every input filled");
            this.setState({ error: 'error-found' });
            this.setState({ submitMessage: "Please enter a name and a message." })
        }
        
    }

    sendMessage = (templateId, variables) => {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfuly sent!');
            this.setState({ name: ''});
            this.setState({ message: ''});
            this.setState({ error: 'email-sent' });
            this.setState({ submitMessage: 'RSVP sent successfully!' });
        }).catch(err => console.error('Error sending email:', err));
        
    }

    render(){
        return(
            <div id="rsvp">
                <p>To RSVP, Send an email to Mindy, by filling out the form below, before <span>January 1st 11:59pm</span>. If you don't RSVP, you're stupid and cordially <span>uninvited</span>.</p>
                <p className={this.state.error}>{this.state.submitMessage}</p>
                <form id="rsvp_form">
                    <input type="hidden" name="contact_number"/>
                    <fieldset>
                        <label htmlFor="name-input">Your Name</label>
                        <input 
                            name="name-input"
                            type='text'  
                            onChange={(e) => this.handleChange('name', e)} 
                            value={this.state.name}
                            placeholder="Enter your name here"
                            required/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="text-input">Message</label>
                        <textarea
                            id="email-text"
                            name="text-input"
                            onChange={(e) => this.handleChange('message', e)}
                            placeholder="Enter a message here"
                            required
                            value={this.state.message}/>
                    </fieldset>
                    
                    <input type="button" value="Submit" className="btn-submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

export default RSVP;