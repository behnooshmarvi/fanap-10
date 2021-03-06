import React, { useState,useEffect} from 'react';
import  * as firebase from "services";
import { TextField } from '@material-ui/core';
//import { useHistory } from "react-router-dom";


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

             { articleList.map((data,id)=> {
                  return (
                      <tr>     
                      <TextField value={data.title} variant="outlined"  style={{width:"200px"}}/>
                      <TextField value={data.body} variant="outlined"  style={{width:"300px"}}/>
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

// import React, { Component } from 'react'
// import  * as firebase from "services";

//  class ShowDetail extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             articleId : '',
//             articleTitle : '',
//             articleImage : '',
//             articleBody : ''
//         }
//     }

//     componentDidMount() {



//         const rootRef = firebase.db.ref("articles");
//         const fooRef = rootRef.child("foo");
//         fooRef.on("value", snap => {
//           const foo = snap.val();
//           if (foo !== null) {
//             Object.keys(foo).forEach(key => {
// console.log(key);
//             this.setState({ articleId: foo.key,
//                 articleTitle : foo.title,
//                 articleBody : foo.body

//               // The ID is the key
//               //console.log(key);
//               // The Object is foo[key]
//               //console.log(foo[key]);
//             });
//         });
//     }
//         });
//     }
    



//     //     firebase.db.ref("/articles").on("value", snapshot => {
//     //       let articlelist = [];
//     //       snapshot.forEach(snap => {
//     //           articlelist.push(snap.val());
//     //      });
//     //      this.setState({ articleId: Object.keys(snapshot.val()[0]),
//     //                       articleTitle : Object.title,
//     //                       articleBody : Object.body

//     //     });
//     //    })
    
    

//     render()
//     { 
//         return (
//             <div>
//             <p>{this.state.articleId}</p>
//             <p>{this.state.articleBody}</p>
//             <h1>test</h1>
//             </div>
//         )
//     }
// }

//     export default ShowDetail;
        
    

