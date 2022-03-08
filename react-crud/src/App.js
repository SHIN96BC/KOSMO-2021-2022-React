import './App.css';
import Subject from './components/Subject';
import NavC from './components/NavC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
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
    this.max_navc_id = 3;
    this.state = {
      mode: "welcome",
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
  
  getReadContent() {
    for (let i = 0; i<this.state.navc.length; i++) {
      let data = this.state.navc[i];
      if (data.id === this.state.selected_navc_id) {
        //_title = data.title;
        //_desc = data.desc;
        //break;
        return data;
      }
    }
  }

  getContent() {
    let _title, _desc = null;
    let _article = null;
  
    if (this.state.mode === "welcome") {
      _title = this.state.welcom.title;
      _desc = this.state.welcom.desc;
      _article = <ReadContent title={_title} desc={_desc}/>;
    
    } else if (this.state.mode === "read") {
      // _title = this.state.navc[0].title;
      // _desc = this.state.navc[0].desc;
  
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}/>;
    
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_navc_id = this.max_navc_id + 1;
        /*this.state.navc.push(
          {id:this.max_navc_id, title: _title, desc: _desc}
        );*/
  
        /* 복제 방법(1)
        let _navc = this.state.navc.concat(
          {id: this.max_navc_id, title: _title, desc: _desc}
        );
        this.setState({
          navc: _navc,
        });
        */
        // 복제 방법(2) 결과는 (1)과 같다
        let copy_navc = Array.from(this.state.navc);
        copy_navc.push(
          {id: this.max_navc_id, title: _title, desc: _desc}
        );
        this.setState({
          navc: copy_navc,
          mode: 'read',
          selected_navc_id: this.max_navc_id,
        });
      }.bind(this)}/>;

    } else if(this.state.mode === 'update') {
      let _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc) {
        let copy_navc = Array.from(this.state.navc);
        for(let i=0; i<copy_navc.length; i++) {
          if(copy_navc[i].id === _id) {
            copy_navc[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
        }
        this.setState({
          navc: copy_navc,
          mode: 'read',
        });
      }.bind(this)}/>;
    } 
    return _article;
  }

  render() {
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
          onChangePage={function(id) {
            this.setState(
              {
                mode: "read", 
                selected_navc_id: Number(id)
              }
            );
          }.bind(this)}
        />
        <Control onChangeMode={function(_mode) {
          if(_mode === 'delete') {
            if(window.confirm('정말 삭제할까요?')) {
              let copy_navc = Array.from(this.state.navc);
              for(let i=0; i<copy_navc.length; i++) {
                if(copy_navc[i].id === this.state.selected_navc_id) {
                  copy_navc.splice(i, 1); // i 번째부터 1개를 없애라 라는 의미
                  break;
                }
              }
              this.setState({
                navc: copy_navc,
                mode: 'welcome',
              });
              alert('삭제 성공');
            }
          } else {
            this.setState(
              {
              mode: _mode,
              }
            );
          }
        }.bind(this)}/>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
