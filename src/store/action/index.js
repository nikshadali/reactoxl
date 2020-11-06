
import firebase from '../../config/firebase';
const set_data = () =>{
    return(dispatch)=>{
        console.log("chal raha hey")
    }
}

const facebook_login = () =>{
    return(dispatch) => { 
        
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            let create_user ={
                name: user.displayName,
                email :user.email,
                pics :user.photoURL,
                uid : user.uid
            }
           firebase.database().ref().child(`user/${create_user.uid}`).set(create_user)
           .then(() => {
               dispatch({type:"setuser", payload:create_user})
               alert("User Login Successfully")
           })
          }).catch(function(error) {
           
            var errorCode = error.code;
            var errorMessage = error.message;
           
            console.log(errorMessage)
            // ...
          });
        }
   
}

export{
    set_data,
    facebook_login
}

