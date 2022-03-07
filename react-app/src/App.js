import './App.css';
import Subject from './components/Subject';
import NavC from './components/NavC';
import Content from './components/Content';
import { Component } from 'react';

/*
function App() {
  return (
    <div className="App">
      <Subject title="홈!" sub="리액트 홈페이지!"/>
      <NavC/>
      <Content title="자바!" desc="자바는 엔터프라이즈 솔루션 구축에 최적화 된 언어!!"/>
    </div>
  );
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      welcom: {title: "환영", desc: "어서와"},
      subject: {title: "홈" , sub: "리액트 홈페이지!"},
      selected_navc_id: 2,
      navc: [
        {id:1, title: "자바", desc: "자바는 엔터프라이즈 솔루션 구축에 최적화 된 언어!!"},
        {id:2, title: "파이썬", desc: "파이썬은 데이터 과학에 최적화 된 언어!!"},
        {id:3, title: "오라클", desc: "오라클은 가장 안정적인 대용량 시스템 구축을 위한 DBMS!!"},
      ],
      content:{title: "자바", desc: "자바는 엔터프라이즈 솔루션 구축에 최적화 된 언어!!"},
    };
  }
  render() {
    let _title, _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcom.title;
      _desc = this.state.welcom.desc;
    } else if (this.state.mode === "read") {
      // _title = this.state.navc[0].title;
      // _desc = this.state.navc[0].desc;

      for (let i = 0; i<this.state.navc.length; i++) {
        let data = this.state.navc[i];
        if (data.id === this.state.selected_navc_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangPage={function() {
            this.setState(
              {mode: "welcome"}
            );
          }.bind(this)}
        />
        {/* <header>
          <h1><a href="/" onClick={function(e){
            console.log("e", e); // 이벤트 객체를 확인
            e.preventDefault(); // <a>태그가 가진 고유한 기능( 페이지 갱신 ) 을 막음
           // debugger;  // 실행 도중에 멈추는 기능
           this.setState(
             {mode: "welcome"}
           );
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <NavC 
          data={this.state.navc}
          onChangPage={function(id) {
            this.setState(
              {
                mode: "read", 
                selected_navc_id: Number(id)
              }
            );
          }.bind(this)}
        />
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
