const validation =(value) =>{
    let errors={};
    if(!value.Name){
        errors.Name="name is required."
    }
    if(!value.Email){
        errors.Email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(value.Email)){
        errors.Email="Email is invalid."
    }


    if (!value.Password){
        errors.Password="password is required."
    }else if(value.Password.length <5){
        errors.Password="password must bemore than five character."
    }
    if (!value.Mobile){
        errors.Mobile="Mobile num is required."
    }else if(value.Mobile.length < 10){
        errors.Mobile="Mobile num must be more than 10 digit."
    }
    if(!value.log){
        errors.log="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(value.log)){
        errors.log="Email is invalid."
    }
    // if (!value.paslog){
    //     errors.paslog="password is required."
    // }else if(value.paslog.length <5){
    //     errors.paslog="password must bemore than five character."
    // }   return errors;
};
export default validation;