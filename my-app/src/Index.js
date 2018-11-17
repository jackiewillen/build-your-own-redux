import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            color: 'red',
        }
    }
    switchColor(color) {
        this.setState({
            color
        });
    }
    render () {
        return (
            <div>
                <Header 
                    color={this.state.color}>
                </Header>
                <Content 
                    color={this.state.color}
                    switchColor= {this.switchColor.bind(this)}>
                </Content>
            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));
