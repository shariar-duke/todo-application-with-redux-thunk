import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

// ekhne filter hbe so ekta option jode age theke select thake seta k abar select korle unselect hye jabe . 
export const colorChanged =(color, changeType)=> 
{
   return{ 
    type:COLORCHANGED, 
    payload: {
        color, 
        changeType,
    }
   }
}


export const statusChanged =(status)=> 
{
    return {
        type : STATUSCHANGED, 
        payload:status,
    }

}