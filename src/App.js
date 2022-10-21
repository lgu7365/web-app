import React, { useState } from 'react';
import './App.css';


function App() {
  let [id, setId] = useState([1,2,3,4]);
  let [con, setCon] = useState(['제목1', '제목2', '제목3', '제목4']);
  let [date, setDate] = useState(['2월 5일 발행', '2월 22일 발행', '2월 18일 발행', '2월 2일 발행']);
  let [content, setContent] = useState(['1번째 이야기', '2번째 이야기', '3번째 이야기', '4번째 이야기'])
  let [selectid, setSelectid] = useState(1);
  return (
    <div className="App">
      <div className="header">
        <h3>개발 Blog</h3>
      </div>
      <Toc onSelect={function(id){setSelectid(id)}} con={con} date={date} id={id}/>
      <Contain con={con[selectid-1]} date={date[selectid-1]} content={content[selectid-1]}/>
    </div>
  );
}

function Toc(props) {
  return (
    <section className="contents">
      <div>
        {[0, 1, 2, 3].map((i) => {
          return (
            <div>
              <h3><a href="#a" onClick={function (e) {
                e.preventDefault();
                props.onSelect(e.target.id);
              }} id={props.id[i]}>{props.con[i]}</a></h3>
              <p>{props.date[i]}</p>
              <hr />
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Contain(props) {
  return (
    <div className='contain'>
      <h3>{props.con}</h3>
      <p>{props.date}</p>
      <p>{props.content}</p>
    </div>
  )
}

export default App;
