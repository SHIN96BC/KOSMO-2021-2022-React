import { Component } from "react";
import axios from "axios";

class AxiosGet extends Component {
    componentDidMount() {
        //axios.get("http://127.0.0.1:8080/rest_addr/read/12.json")//seq검색
        //axios.get("http://127.0.0.1:8080/rest_addr/read.json?na=홍길동") //name검색
        axios.get("http://127.0.0.1:8080/rest_addr/read.json") //모두검색
        .then(function(response) {
            console.log('1', response.data);
        })
        .catch(function(error) {
            console.log('2', error);
        })
        .then(function() {
            console.log('3');
        });
    }
    render() {
        return(
            <h1>AxiosGet</h1>
        );
    }
}

export default AxiosGet;