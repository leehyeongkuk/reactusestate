import React, {useState} from 'react';

function App(props) {
  const [myinfo , updatemyinfo] = useState ([{mystudy: "리액트", level : "기초상"}]);
  return (
    <div>
      <ul>
      {myinfo.map((item, index) => {
        return(
          <li>{item.mystudy}{item.level}을 배우고 있습니다</li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;