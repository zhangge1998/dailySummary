/**
 * Created by ubuntu on 17/08/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Logon from './Logon'
class App extends React.Component {
    constructor(){
        super();
        this.state={flag:0};
    }
    handleChange(){
        this.setState({flag:1});
    }
    render() {
        return (
            <div>
                <button onClick={this.handleChange.bind(this)}>注册</button>
                <Logon flag={this.state.flag}/>
            </div>
        )
    }
}
ReactDOM.render(<App/>,
    document.getElementById('app'));
