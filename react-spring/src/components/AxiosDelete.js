import { Component } from "react";
import axios from "axios";

class AxiosDelete extends Component {
    componentDidMount() {
        axios.delete("http://127.0.0.1:8080/rest_addr/delete/8")
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
            <h1>AxiosDelete</h1>
        );
    }
}

export default AxiosDelete;