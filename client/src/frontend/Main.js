import React, {Component} from 'react';
import {connect} from 'react-redux'
import {decodeFile, getFile} from "./actions/action";
class Main extends Component {
    state = {
        encodeMessage:'',
        password:'',
        decodeMessage: this.props.decode.message
    };

    encodeChangeHandler = event => {
        this.setState({encodeMessage:event.target.value})

    };
    passwordChangeHandler = event => {
        this.setState({password:event.target.value})

    };
    decodeChangeHandler = event => {
        this.setState({decodeMessage:event.target.value})
    };


    render() {
        const s = {
            "message":this.state.encodeMessage,
            "password":this.state.password
        };
        const decode = {
            "message":this.state.decodeMessage,
            "password":this.state.password
        };
        return (
            <div>
                <textarea onChange={this.encodeChangeHandler} name="" id="" cols="30" rows="10" value={this.props.decode.message}></textarea>
                <input onChange={this.passwordChangeHandler} type="text"/>
                <textarea onChange={this.decodeChangeHandler} name="" id="" cols="30" rows="10" value={this.props.files}></textarea>
                <button onClick={() => this.props.getFile(s)}>encode</button>
                <button onClick={() => this.props.decodeFile(decode)}>decode</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    files:state.files,
    decode:state.decode
});
const mapDispatchToProps = dispatch => ({
    getFile: file => dispatch(getFile(file)),
    decodeFile:file => dispatch(decodeFile(file))
});
export default connect(mapStateToProps,mapDispatchToProps) (Main);