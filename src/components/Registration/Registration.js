import React from 'react';
import {documentTitle} from '../DocumentTitle';
import LoadingSpinner from '../LoadingSpinner';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  
  componentWillMount() {
    documentTitle();
  }
  
  handleChange(event) {
    console.log(event);
  }
  
  handleRegistration() {
  
  }
  
  render() {
    const containerClass = 'col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3';
    return (
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div
              className={containerClass + ' lead'}>Sign up to Steepshot
            </div>
          </div>
        </div>
  
        <div className="container-fluid">
          <div className="row position--relative">
            {
              this.state.needsLoader
                ?
                <LoadingSpinner />
                :
                null
            }
            <div className={containerClass + ' ???'}>
              <form className="form-login form-horizontal">
                <div className={this.state.userNameError ? "has-error" : null}>
                  <div className="form-group">
                    <div className="input-container col-xs-12">
                      <input type="text"
                             name="userName"
                             id="formNAME"
                             className="form-control autofil--gray"
                             value={this.state.userName}
                             onChange={this.handleChange.bind(this)}
                      />
                      <label htmlFor="formNAME" className="name">Name</label>
                      <div className="help-block">
                        {
                          this.state.userNameError
                            ?
                            <div className="help-block__notice">Username is required</div>
                            :
                            null
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="buttons-container col-xs-12">
                    <button onClick={this.handleRegistration.bind(this)} type="submit" className="btn btn-default">Registration</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default Registration;
