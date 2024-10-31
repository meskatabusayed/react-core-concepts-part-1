/* eslint-disable react/prop-types */
export default function Todo({task , isDone}){
    if(isDone){
        return <h1>Done :  {task}</h1>
    }
    return <h1>Not Done this :  {task}</h1>
}