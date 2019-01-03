import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';

const store = new createStore(reducer);
class Index extends Component {
    render () {
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>, 
    document.getElementById('root')
);
