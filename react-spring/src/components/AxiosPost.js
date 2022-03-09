import { Component } from "react";
import axios from "axios";

class AxiosPost extends Component {
    componentDidMount() {
        axios.post("http://127.0.0.1:8080/rest_addr/create.json", 
        {"seq": -1, "name":"양만춘", "addr":"고구려"})
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
            <h1>AxiosPost</h1>
        );
    }
}

export default AxiosPost;