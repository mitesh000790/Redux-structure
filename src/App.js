import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersList} from "./store/actions/action";


function App() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.user?.userData?.message);
  useEffect(() => {
    dispatch(getUsersList({
      sortBy: {
        "updatedAt": -1
      }, limit: 10
    }))
  }, []);


  return (
    <div className="App1">
      {userData?.map((item, key) => (
          <div key={key} style={{display:"flex"}}>
            <h1>{item.name}</h1>
            <h1>{item.username}</h1>
          </div>
      ))}
    </div>
  );
}

export default App;
