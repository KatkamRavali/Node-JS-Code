const http = require("http");

const port = 8081;

const toDoList = ["Learn" , "Apply" , "Get Success"];

http
.createServer((req , res) => {
    //  -------- Basic Server creation --------
    // res.writeHead(200 , { "Content-Type": "text/html" });
    // res.write("<h2> Hey finally server has been started </h2>");
    // res.end();

    // --------- Display method [find the method] ---------
    // const {method , url} = req ;
    // console.log(method , url);
    // res.end(); 

    // ---------- to get the array on the screen using get ------------
    // const {method , url} = req ;
    // if(url === "/toDos"){
    //     if(method === "GET"){
    //         // get response on ui
    //         res.writeHead(200);
    //         res.write(toDoList.toString());
    //     }
    // }
    // res.end();

    // ---------- to get the array on the screen using get if and else condition ------------
    // const {method , url} = req ;
    // if(url === "/toDos"){
    //     if(method === "GET"){
    //         // get response on ui
    //         res.writeHead(200);
    //         res.write(toDoList.toString());
    //     } else {
    //         res.writeHead(501);
    //     }
    // } else {
    //     res.writeHead(404);
    // }
    // res.end();

    // --------- To get the array on the screen using methods ----------
    // const {method , url} = req ;
    // if(url === "/toDos"){
    //     if(method === "GET"){
    //         // get response on ui
    //         res.writeHead(200);
    //         res.write(toDoList.toString());
    //     } else if (method === "POST" ) {
    //         let body = "";
    //         req.on('error', (err) => { // error request
    //             console.log(err);
    //         }).on('data' , (chunk) => { // data request
    //             body += chunk;
    //             console.log(chunk); // buffer in the terminal is due to this statement
    //         }).on('end' , () => { // end 
    //             body = JSON.parse(body);
    //             console.log(" Data :", body); // Data in the terminal is due to this statement
    //         })
    //     } else {
    //         res.writeHead(501);
    //     }
    // } else {
    //     res.writeHead(404);
    // }
    // res.end();

    // -------------- adding new item to the array list ---------------
    // const {method , url} = req ;
    // if(url === "/toDos"){
    //     if(method === "GET"){
    //         // get response on ui
    //         res.writeHead(200);
    //         res.write(toDoList.toString());
    //     } else if (method === "POST" ) {
    //         let body = "";
    //         req.on('error', (err) => { // error request
    //             console.log(err);
    //         }).on('data' , (chunk) => { // data request
    //             body += chunk;
    //             console.log(chunk); // buffer in the terminal is due to this statement
    //         }).on('end' , () => { // end 
    //             body = JSON.parse(body);
    //             let newToDoes = toDoList;
    //             newToDoes.push(body.Items);
    //             console.log(newToDoes);
    //         })
    //     } else {
    //         res.writeHead(501);
    //     }
    // } else {
    //     res.writeHead(404);
    // }
    // res.end();

    // -------------- To delete the element in an array [Method - 1] -------------
    // const {method , url} = req ;
    // if(url === "/toDos"){
    //     if(method === "GET"){
    //         // get response on ui
    //         res.writeHead(200);
    //         res.write(toDoList.toString());
    //     } else if (method === "POST" ) {
    //         let body = "";
    //         req.on('error', (err) => { // error request
    //             console.log(err);
    //         }).on('data' , (chunk) => { // data request
    //             body += chunk;
    //             console.log(chunk); // buffer in the terminal is due to this statement
    //         }).on('end' , () => { // end 
    //             body = JSON.parse(body);
    //             let newToDoes = toDoList;
    //             newToDoes.push(body.Items);
    //             console.log(newToDoes);
    //         })
    //     } else if (method === "DELETE"){
    //         let body = "";
    //         req.on('error', (err) => { // error request
    //             console.error(err);
    //             // console.log(err);
    //         }).on('data' , (chunk) => { // data request
    //             body += chunk;
    //             console.log(chunk); // buffer in the terminal is due to this statement
    //         }).on('end' , () => { // end 
    //             body = JSON.parse(body);
    //             let deleteThisItem = body.Item;
    //             for(let i = 0 ; i < toDoList.length ; i++){
    //                 if(toDoList[i] === deleteThisItem){
    //                 toDoList.splice(i , 1);
    //                     break;
    //                 }
    //             }
    //         });
    //     } else {
    //         res.writeHead(501);
    //     }
    // } else {
    //     res.writeHead(404);
    // }
    // res.end();

     // -------------- To delete the element in an array [Method - 2] -------------
    //  const {method , url} = req ;
    //  if(url === "/toDos"){
    //      if(method === "GET"){
    //          // get response on ui
    //          res.writeHead(200);
    //          res.write(toDoList.toString());
    //      } else if (method === "POST" ) {
    //          let body = "";
    //          req.on('error', (err) => { // error request
    //              console.log(err);
    //          }).on('data' , (chunk) => { // data request
    //              body += chunk;
    //              console.log(chunk); // buffer in the terminal is due to this statement
    //          }).on('end' , () => { // end 
    //              body = JSON.parse(body);
    //              let newToDoes = toDoList;
    //              newToDoes.push(body.Items);
    //              console.log(newToDoes);
    //          })
    //      } else if (method === "DELETE"){
    //          let body = "";
    //          req.on('error', (err) => { // error request
    //              console.error(err);
    //              // console.log(err);
    //          }).on('data' , (chunk) => { // data request
    //              body += chunk;
    //              console.log(chunk); // buffer in the terminal is due to this statement
    //          }).on('end' , () => { // end 
    //              body = JSON.parse(body);
    //              let deleteThisItem = body.Item;
    //             //  This content deffers
    //              toDoList.find((element , index) => {
    //                 if(element === deleteThisItem){
    //                     toDoList.splice(index , 1);
    //                 }
    //              })
    //          });
    //      } else {
    //          res.writeHead(501);
    //      }
    //  } else {
    //      res.writeHead(404);
    //  }
    //  res.end();

    // ---------- When the called elements for delete doent exist [Method - 1]------------
    // const {method , url} = req ;
    // if(url === "/toDos"){
    //     if(method === "GET"){
    //         // get response on ui
    //         res.writeHead(200);
    //         res.write(toDoList.toString());
    //     } else if (method === "POST" ) {
    //         let body = "";
    //         req.on('error', (err) => { // error request
    //             console.log(err);
    //         }).on('data' , (chunk) => { // data request
    //             body += chunk;
    //             console.log(chunk); // buffer in the terminal is due to this statement
    //         }).on('end' , () => { // end 
    //             body = JSON.parse(body);
    //             let newToDoes = toDoList;
    //             newToDoes.push(body.Items);
    //             console.log(newToDoes);
    //         })
    //     } else if (method === "DELETE"){
    //         let body = "";
    //         req.on('error', (err) => { // error request
    //             console.error(err);
    //             // console.log(err);
    //         }).on('data' , (chunk) => { // data request
    //             body += chunk;
    //             console.log(chunk); // buffer in the terminal is due to this statement
    //         }).on('end' , () => { // end 
    //             body = JSON.parse(body);
    //             let deleteThisItem = body.Item;
    //             // Output occurs only once
    //                 for(let i = 0 ; i < toDoList.length ; i++){
    //                     if(toDoList[i] === deleteThisItem){
    //                     toDoList.splice(i , 1);
    //                         break;
    //                     } else {
    //                         console.log("Error : Match Not Found ..........!");
    //                         break;
    //                     }
    //                 }
    //         });
    //     } else {
    //         res.writeHead(501);
    //     }
    // } else {
    //     res.writeHead(404);
    // }
    // res.end();
    

    // ---------- When the called elements for delete doent exist [Method - 2]------------
    const {method , url} = req ;
    if(url === "/toDos"){
        if(method === "GET"){
            // get response on ui
            res.writeHead(200);
            res.write(toDoList.toString());
        } else if (method === "POST" ) {
            let body = "";
            req.on('error', (err) => { // error request
                console.log(err);
            }).on('data' , (chunk) => { // data request
                body += chunk;
                console.log(chunk); // buffer in the terminal is due to this statement
            }).on('end' , () => { // end 
                body = JSON.parse(body);
                let newToDoes = toDoList;
                newToDoes.push(body.Items);
                console.log(newToDoes);
            })
        } else if (method === "DELETE"){
            let body = "";
            req.on('error', (err) => { // error request
                console.error(err);
                // console.log(err);
            }).on('data' , (chunk) => { // data request
                body += chunk;
                console.log(chunk); // buffer in the terminal is due to this statement
            }).on('end' , () => { // end 
                body = JSON.parse(body);
                let deleteThisItem = body.Item;
                    //   Output occurs only once
                toDoList.find((element , index) => {
                   if(element === deleteThisItem){
                       toDoList.splice(index , 1);
                   } else {
                        console.log("Error : Match Not Found ..........!");
                   }
                })
            });
        } else {
            res.writeHead(501);
        }
    } else {
        res.writeHead(404);
    }
    res.end(); 
    
})
.listen(port , () => {
    console.log(`NodeJS server started running on Port ${port}`);
    // console.log(`NodeJS server started running on Port http://localhost:${port}/`);
});

// http://localhost:8081/


