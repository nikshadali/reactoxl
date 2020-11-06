
const  INITIAL_STATE = {
  user : [],
  currentuser:{}
}

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "setuser":
            return({
                ...state,
                currentuser:action.payload
            })
    }
    return state;
}