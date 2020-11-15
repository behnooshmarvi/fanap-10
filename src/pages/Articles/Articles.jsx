import React, { useState,useEffect} from 'react';
import  * as firebase from "services";
import { TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const Articles =(props) => {
const [articleList , setArticleList] = useState([])

  


    useEffect(() => {

     
       
     firebase.db.ref("/articles").on("value", snapshot => {
          let articlelist = [];
          snapshot.forEach(snap => {
              articlelist.push(snap.val());
          });
          setArticleList( articlelist );
          

        });
        

      
      
   })

  const history = useHistory();
  function handleShowDetail(id) {
    history.push("/showdetail");

  }

    return (
      <div className="MainDiv">
      
      
        <div className="container">
            <table>
              <thead >
                  <tr>
                      <th>Title</th>
                      <th>Content</th>

                  </tr>
              </thead>
              <tbody>

             { articleList.map(data=> {
                  return (
                      <tr>     
                      <TextField value={data.title} variant="outlined"  style={{width:"200px"}}/>
                      <TextField value={data.body} variant="outlined"  style={{width:"300px"}}/>
                      <button onClick={handleShowDetail}>show detail</button>
                      </tr>
                      
                  );
                 
                  })}
          
                 
              </tbody>
              
           </table>
            
       </div>
      
      
      </div>

      
    );
  }
  export default Articles;