import React, { Component } from 'react';
 import Popup from '../components/popup/Popup';
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
          showPopup: false,
          popupText: ''
        };
      }

      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data });
          console.log('data123-----', this.state.contacts);
        })
        .catch(console.log)
      }

      handleClick() {
        console.log('Click on Li');
      }

      togglePopup(index) {
        this.setState({
          showPopup: !this.state.showPopup
        });
        console.log('event---------',index, this.state.showPopup);
        if(this.state.contacts[index] && this.state.contacts[index].name && this.state.contacts[index].email && !this.state.showPopup) {
          this.setState({
            popupText: this.state.contacts[index].name+'---------------'+ this.state.contacts[index].email
          })
        }
        
      }

    render() {
      return (
        <div>
        <center><h1>Contact List</h1></center>
        {this.state.contacts.map((contact, index) => 
          (
            <li onClick={this.togglePopup.bind(this, index)} key={contact.id}>
                {contact.name}
                {contact.email}
            </li>
          ))}
        {this.state.showPopup ? 
            <Popup
              text= {this.state.popupText}
              closePopup={this.togglePopup.bind(this)}
            />
            : null
        }
        </div>
      );
    }
  }
  
  export default UserList;