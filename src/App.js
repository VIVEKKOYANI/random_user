import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // state 
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  // get data from api
  const getData = async () => {
    const res = await axios.get('https://randomuser.me/api');
    setUserData(res.data.results);
    localStorage.setItem("userData", JSON.stringify(res.data.results));
  }

  return (
    <div className="App">
      <h1 class="title"> Random User Generator</h1>
      {userData.map((item, i) => {
        return (
          <div class="user-profile" key={i}>
            <img id="avatar" src={item.picture.large} />
            <div id="fullname">{item.name.first}{" "}{item.name.last}</div>
            {/* <div id="username">
              goldendog885
            </div> */}
            <div class="description">
              <div>Email: <span id="email">{item.email}</span></div>
              <div>City: <span id="city">nr åby</span></div>
            </div>
            <div class="footer">
              <button id="btn" onClick={() => getData()}>Refresh and Get New User</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
