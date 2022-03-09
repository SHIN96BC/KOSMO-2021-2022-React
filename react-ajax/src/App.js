import Nav from './Nav';
import Article from './Article';
import { Component } from 'react';

class App extends Component {
  state = {
    article: {title:'환영', desc:'어서와 리액트.. 에이젝스도 환영해!'}
  }
  render() {
    return (
      <div className="App">
        <h1>Ajax홈</h1>
        <Nav onClick={function(id) {
          //console.log(id);
          fetch(id+".json")
          .then(function(result) {
            return result.json(); // json을 파싱 ( json -> js 객체를 포함하는 객체로 변경 )
          })
          .then(function(js) {
            this.setState({
              article: {title:js.title, desc:js.desc}
            });
          }.bind(this))
        }.bind(this)}/>
        <Article title={this.state.article.title} desc={this.state.article.desc}/>
      </div>
    );
  }
}

export default App;
