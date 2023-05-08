import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users:[],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { 
   addNewUser:(state,action)=>{
      if(state.users.find((item,index)=>index===action.payload.ind)){
       state.users.splice(action.payload.ind,1,action.payload.values)
      }else{
        state.users = [ ...state.users , ...[action.payload.values]]
        console.log(state.users)
        console.log(action.payload)
      }
    },
    deleteUser:(state,action)=>{
      state.users.splice(action.payload,1)
    }
  },
})

export const {addNewUser,deleteUser} = userSlice.actions

export default userSlice.reducer



function AddUser(payload){
  return {
    type:'AddUser',
    payload:payload
  }
}
