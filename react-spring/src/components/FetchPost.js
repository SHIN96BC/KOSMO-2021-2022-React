import { Component } from "react";
import axios from "axios";

class FetchPost extends Component {
    componentDidMount() {
        fetch('http://127.0.0.1:8080/rest_addr/create.json', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({seq:-1, name:'연개2', addr:'고구려2'})  // 자바스크립트 객체를 Json 객체로 바꿔줌
        })
        /*.then(function(response) {
            let tmp = response.json();
            console.log('1', tmp);
            return tmp;
        })
        .catch(function(error) {
            console.log('2', error);
        })
        .then(function(js) {
            console.log('3', js);
        });
        */
    }
    render() {
        return(
            <h1>FetchPost</h1>
        );
    }
}

export default FetchPost;