import React from 'react';
import {documentTitle} from '../DocumentTitle';
import {isExistAccount} from '../../actions/auth';
import {prepareRegistration} from '../../actions/registration';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      showInfoMessage: false,
      infoMessage: ''
    };
  }
  
  componentWillMount() {
    documentTitle();
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      showInfoMessage: false,
    });
  }
  
  handleRegistration() {
    const callback = function(result) {
      if (result) {
        this.setState({
          userNameExist: result,
          showInfoMessage: true,
          infoMessage: 'Username is exist.'
        });
      } else {
        prepareRegistration(this.state.userName).then((response) => {
          if (response.id) {
            this.props.history.push('/registration/' + response.id);
          } else {
            this.setState({
              showInfoMessage: true,
              infoMessage: 'Something went wrong'
            });
          }
        });
      }
    };
    isExistAccount(this.state.userName, callback.bind(this));
  }
  
  onBlur() {
    const callback = function(result) {
      let infoMessage = result ? 'Username is exist.' : 'Username is free';
      this.setState({
        userNameExist: result,
        showInfoMessage: true,
        infoMessage: infoMessage
      });
    };
    isExistAccount(this.state.userName, callback.bind(this));
  }
  
  render() {
    return (
      <div>
        <form className="">
          <label htmlFor="formNAME" className="">@</label>
          <input type="text"
                 name="userName"
                 id="formNAME"
                 className=""
                 value={this.state.userName}
                 onChange={this.handleChange.bind(this)}
                 onBlur={this.onBlur.bind(this)}
          />
          <button onClick={this.handleRegistration.bind(this)}
                  type="button" className="">Log In with Steem
          </button>
        </form>
        <div className={this.state.showInfoMessage ? '' : 'hide'}>
          {this.state.infoMessage}
        </div>
      </div>
    );
  }
}

export default Registration;
