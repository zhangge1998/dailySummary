/**
 * Created by ubuntu on 17/08/17.
 */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
class Logon extends React.Component {
    constructor() {
        super();
        this.state = {inputs: {}};
        this.handleChange=this.handleChange.bind(this);
        this.handlePass = this.handlePass.bind(this);
    }

    handleChange() {
        this.state.inputs.name = document.getElementById('name').value;
        this.state.inputs.tel = document.getElementById('tel').value;
        this.state.inputs.password = document.getElementById('password').value;
        this.state.inputs.confirm = document.getElementById('confirm').value;
        // this.setState({input: this.state.inputs});
        // alert(this.state.input);
        console.log(this.state.inputs);
    }


    handlePass() {
        let pass = document.getElementById('password').value;
        if (pass.length > 10) {
            document.getElementById('password').value='eirodskl';
        }
    }


    render() {
        let a = this.props.flag;
        if (a != 0) {
            return (
                <div className="log">
                    <button id='you'>X</button>
                    <form>
                        <label>
                            <p>&nbsp;&nbsp;昵&nbsp;&nbsp;&nbsp;称:&nbsp;&nbsp;<input type="text" id="name"/></p>
                            <p>手机号码:<input type="text" id="tel"/></p>
                            <p>&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;码:&nbsp;&nbsp;<input type="password" id="password"
                                                                                   placeholder="密码小于10位"
                                                                                   onBlur={this.handlePass}/></p>
                            <p>确认密码:<input type="password" id="confirm"/></p>
                            <button onClick={this.handleChange.bind(this)}>注册</button>
                        </label>
                    </form>
                </div>
            )
        }
        else return null;
    }
}
export default Logon