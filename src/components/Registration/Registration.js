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
    console.log(event.target.name);
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
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">@</div>
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
            </div>
            <label class="sr-only" for="inlineFormInputGroup">Username</label>
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
