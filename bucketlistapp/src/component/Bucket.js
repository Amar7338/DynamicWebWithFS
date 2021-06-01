import React,{useState} from 'react';
import '../App.css';

const Bucket=()=>{
  const [dataName,setdataName]=useState("");
  const [allData,setAllData]=useState([]);

  const  ClickAddButton=(e)=>{
    e.preventDefault();
    if(allData.length<10)
    {
      if(dataName){
        setAllData([...allData,dataName]);
      }
      else{
        alert("Item Name not be null");
      }
    }
    else{
      alert("Delete Item To Store More");
    }
  }

  const  ClickResetButton=()=>{
    setAllData([]);
  }

  const  ClickCancelButton=(deleteItem)=>{
    const updateArray=allData.filter((item)=>{
     return item!==deleteItem;
    })
    setAllData(updateArray);
  }

  return(
    <>
    <div className="Container">
    <h1>Welcome To Bucket List</h1>
    <input type="text" name="additem" value={dataName} onChange={(e)=>setdataName(e.target.value)}></input>
    <button onClick={ClickAddButton}>Add</button>
    <button onClick={ClickResetButton}>Reset</button>

    <div>
      {
        allData.map((item)=>{
        return(
          <div className="BucketContainer">
              <p>{item} <button className="CancelButton" onClick={()=>ClickCancelButton(item)}>X</button></p>
          </div>  
        )     
        })
      }
    </div>
    </div>
    </>
  )
}

export default Bucket;