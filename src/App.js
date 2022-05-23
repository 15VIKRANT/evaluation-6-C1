import React, { useState,useEffect } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import axios from "axios"

export default function App() {
  const [data, setData] = useState([]);
  const [error, setErroe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pagination,setPagination] =useState(1)
  const [sort,setSort] =useState("asc")



  useEffect(() => {
    CanditeData({page,sort})
  },[pagination,sort])

   const CanditeData=async({pagination,sort}) => {
      setLoading(true)
    axios({
      method :"get",
      url:"https://json-server-mocker-masai.herokuapp.com/candidates",
      params:{
        _pagination:pagination,
        _limit:5,
        _sort:"salary",
        _order:sort
      }
    })
  .then(res=>{
    setData(res.data)
    setLoading(false)
  })
  .catch(err=>{
    setErroe(true)
    setLoading(false)
  })
  }



  return (
    <div className="App">
      <div>
        { loading && <div id="loading-container">...Loading</div>}
        <Button onClick={() => setSort(sort == "asc" ? "desc" : "asc")} id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button title="PREV" id="PREV" disabled={pagination===1}   onClick={()=>setPagination(pagination-1)}/>
        <Button id="NEXT" title="NEXT" onClick={()=>setPagination(pagination+1)}/>
      </div>
      <div>
      {data.map((item) => 
        <CandidateCard  key={item.id} {...item}/>
      )}
      </div>
    </div>
  );
}

