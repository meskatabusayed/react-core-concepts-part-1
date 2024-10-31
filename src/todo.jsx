/* eslint-disable react/prop-types */
/* export default function Todo({task , isDone}){
    if(isDone){
        return <h1>Done :  {task}</h1>
    }
    return <h1>Not Done this :  {task}</h1>
} */

//tarnary
/* export default function Todo({task , isDone}){
  
        return <h1>{task} : {isDone  ? "DONE" : "Work On"}</h1>
    
    
} */
//&& operator

/* export default function Todo({task , isDone}){
    return isDone && <h1>Done :  {task}</h1>
}  */

//OR Operator 
/* export default function Todo({task , isDone}){
    return isDone || <h1>Work on :  {task}</h1>
}  */

//using html

/* export default function Todo({task , isDone}){
    let listItem ;
    if(isDone){
        listItem = <h1>{task} : This is done</h1>
    }else{
        listItem = <h1>{task} : This is Not done</h1>
    }
    return listItem;
}  */