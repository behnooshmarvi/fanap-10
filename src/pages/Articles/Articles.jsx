import React from 'react';
import  * as firebase from "services";
import { TextField } from '@material-ui/core';




class Articles extends React.Component {
  constructor(props) {
      
      super(props);
     
      this.state = {articlelist : []}
      }
      
    componentDidMount() {
     
     
       
        firebase.db.ref("/articles").on("value", snapshot => {
          let articlelist = [];
          snapshot.forEach(snap => {
              // snap.val() is the dictionary with all your keys/values from the 'students-list' path
              articlelist.push(snap.val());
          });
          this.setState({ articlelist: articlelist });
        });
      
      
   }
    
    render(){
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
              {this.state.articlelist.map(data => {
                  
                  return (
                      <tr>     
                      <TextField value={data.title} variant="outlined"  style={{width:"200px"}}/>
                      <TextField value={data.body} variant="outlined"  style={{width:"300px"}}/>
                      <button style={{margin:"10px", width:"50px", height:"25px"}}>edit</button>

                      </tr>
                      
                  );
                 
                  })}
          
                 
              </tbody>
              
           </table>
            
       </div>
      
      
      </div>


    );
  }
  }
  export default Articles;