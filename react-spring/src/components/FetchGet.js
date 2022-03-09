import { Component } from "react";
import axios from "axios";

class FetchGet extends Component {
    componentDidMount() {
        //fetch("http://127.0.0.1:8080/rest_addr/read/12.json")//seq검색
        //fetch("http://127.0.0.1:8080/rest_addr/read.json?na=홍길동") //name검색
        fetch("http://127.0.0.1:8080/rest_addr/read.json") //모두검색
        .then(function(response) {
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
    }
    render() {
        return(
            <h1>FetchGet</h1>
        );
    }
}

export default FetchGet;