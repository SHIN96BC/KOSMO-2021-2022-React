import { Component } from 'react';

class NavC extends Component {
    shouldComponentUpdate(newProps) {
        if(this.props.data === newProps.data) {
            return false;
        }
        return true;
    }

    render() {
        let data = this.props.data;
        let lists = [];
        for(let i=0; i<data.length; i++) {
            lists.push(<li key={data[i].id}>
                <a href={"/content/"+data[i].id} onClick={function(id, e) {
                        e.preventDefault();
                        this.props.onChangePage(id);
                    }.bind(this, data[i].id)}>
                    {data[i].title}
                </a>
            </li> );
        }
        return (
            <nav>
            <ul>
                {lists}
            </ul>
            </nav>
        );
    }
  }

export default NavC;