import { Component  } from "react";

class Nav extends Component {
    state = {
        list: [],
    }
    componentDidMount() { //컴포넌트 로딩완료 후, 호출되는 메소드
        fetch('list.json') // 원격 요철 할때는 http://127.0.0.1:808/address/list.json 이런식으로 요청한다.
        .then(function(result) {
            let temp = result.json(); // json을 파싱 ( json -> js 객체를 포함하는 객체로 변경 )
            console.log('temp', temp);
            return temp;
        })
        .then(function(js) {
            //console.log(js); // 변경된 js 객체가 출력
            this.setState({
                list:js,
            });
        }.bind(this))
    }
    render() {
        let listTag = [];
        for(let i=0; i<this.state.list.length; i++) {
            let li = this.state.list[i];
            listTag.push(
                <li key={li.id}>
                    <a href={li.id} data-id={li.id} onClick={function(e) {
                        e.preventDefault();
                        this.props.onClick(e.target.dataset.id);
                    }.bind(this)}>{li.title}</a>
                </li>
            );
        }

        return (
            <nav>
                <ul>
                    {listTag}
                </ul>
            </nav>
        );
    }
}

export default Nav;