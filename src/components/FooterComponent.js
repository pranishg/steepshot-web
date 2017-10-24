import React from 'react';

class FooterComponent extends React.Component {

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <footer className="g-footer">
                            <div className="g-footer_i">
                                <div className="container">
                                    <div className="copyright">Steepshot 2017. All rights reserved</div>
                                    <div className="menu-foot">
                                        <ul className="list_level_1 list-reset">
                                            <li className="item_1"><a href="https://www.facebook.com/steepshot/" target="_blank">Facebook</a></li>
                                            <li className="item_1"><a href="https://twitter.com/steepshot" target="_blank">Twitter</a></li>
                                            <li className="item_1"><a href="https://t.me/steepshot_en" target="_blank">Telegram</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;