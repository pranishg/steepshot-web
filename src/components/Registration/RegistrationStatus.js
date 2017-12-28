import React from 'react';
import {documentTitle} from '../DocumentTitle';
import {
  getRegistrationData,
  getRegistrationStatus,
} from '../../actions/registration';
import QRCode from 'qrcode.react';

class RegistrationStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BTC: '',
      count: 0,
      convertBTC: 434,
      status: '',
      updateStatusTime: 1000
    };
    this.updateStatus.bind(this);
  }
  
  componentWillMount() {
    documentTitle();
  }
  
  componentDidMount() {
    getRegistrationData(this.props.match.params.id).then((result) => {
      this.setState({
        BTC: result.btc,
        count: result.count,
      });
      this.updateStatus();
    });
  }
  
  updateStatus() {
    setTimeout(()=>{
      getRegistrationStatus().then((result) => {
        if (result.status) {
          this.setState({
            status: result.status
          })
        }
        this.updateStatus();
      })
    }, this.state.updateStatusTime)
  }
  
  render() {
    return (
      <div>
        <span>{this.state.BTC}</span><br/>
        <QRCode value={this.state.BTC} />
        <p>Для регистрации аккаунта перечислите {this.state.convertBTC} BTC на указанный адрес.</p>
        <div>
          {this.state.status}
        </div>
      </div>
    );
  }
}

export default RegistrationStatus;
