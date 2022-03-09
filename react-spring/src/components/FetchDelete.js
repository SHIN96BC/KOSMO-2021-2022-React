import { Component } from "react";
import axios from "axios";

class FetchDelete extends Component {
    componentDidMount() {
        fetch("http://127.0.0.1:8080/rest_addr/delete/12", {
            method: 'DELETE', // update 는 PUT 방식으로
        })
        /*
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
        */
    }
    render() {
        return(
            <h1>FetchDelete</h1>
        );
    }
}

export default FetchDelete;