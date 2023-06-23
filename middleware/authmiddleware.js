    import encrypt from 'encryptjs';
    import Users from '../modals/user.js';


    export const checksregister=async(req,res,next)=>{
        try{
        const {name,email,password,pin,role} =req.body;
        if(!name) return res.send("Name is required");
        if(!email) return res.send("email is required");
        if(!password) return res.send("password is required");
        if(!pin) return res.send("pin is required");
        if(!role) return res.send("role is required");
        
        next();
            }
            catch(error){
                return res.send(error);
            }
        }



        export const checkgetuser=async(req,re,next)=>{
            try{
            const {email} =req.body;

                if(!email) return res.send("email is required in middleware");
                const response=await Users.find({email}).exec();
                console.log(response,"find email")
                if(!response.length)
                    return res.send("user not found");
                    if(response[0].role=="buyer"){
                        next();
                        }
                        else{
                        return res.send("only  buyer can get product")
                    }
        }
        catch(error){
            return res.send(error);
                    }
                    }




       export const addproductcheck=async(req,res,next)=>{
         try{
             const {email,pin} =req.body;
                
               if(!email) return res.send("email is required in middleware");
                 if(!pin) return res.send("pin is required in middleware");

                    const response=await Users.find({email}).exec();
                 console.log(response,"find email")
                    if(!response.length)
                          return res.send("user not found");


                          var secretkeypin ="pin";
                                var decipher =encrypt.decrypt(response[0].pin,secretkeypin,256);
                                    if(decipher==pin){    
                                if(response[0].role=="seller"){
                                    next();
                                    }
                                    else{
                                    return res.send(" only seller can  added product")
                                }
                                }
                                else{
                                    return res.send("incorrect pin")
                                }
                    }
                    catch(error){
                        return res.send(error);
                                }
                                } 
                    
                                

                    
                                export const upadtecheck=async(req,res,next)=>{
                                    try{
                                    const {email,pin} =req.body;
                            
                                        if(!email) return res.send("email is required in middleware");
                                        if(!pin) return res.send("pin is required in middleware");
                        
                                        const response=await Users.find({email}).exec();
                                        console.log(response,"find email")
                                        if(!response.length)
                                            return res.send("user not found");
                        
                        
                                            var secretkeypin ="pin";
                                            var decipher =encrypt.decrypt(response[0].pin,secretkeypin,256);
                                                if(decipher==pin){    
                                            if(response[0].role=="buyer"){
                                                next();
                                                }
                                                else{
                                                return res.send(" buyer in not allowed for updates data")
                                            }
                                            }
                                            else{
                                                return res.send("incorrect pin")
                                            }
                                }
                                catch(error){
                                    return res.send(error);
                                            }
                                            } 
                            
                        
                                            export const deletecheck=async(req,res,next)=>{
                                                try{
                                                const {email,pin} =req.body;
                                        
                                                    if(!email) return res.send("email is required in middleware");
                                                    if(!pin) return res.send("pin is required in middleware");
                                    
                                                    const response=await Users.find({email}).exec();
                                                    console.log(response,"find email")
                                                    if(!response.length)
                                                        return res.send("user not found");
                                    
                                    
                                                        var secretkeypin ="pin";
                                                        var decipher =encrypt.decrypt(response[0].pin,secretkeypin,256);
                                                            if(decipher==pin){    
                                                        if(response[0].role=="admin"){
                                                            next();
                                                            }
                                                            else{
                                                            return res.send(" admin can delete data")
                                                        }
                                                        }
                                                        else{
                                                            return res.send("incorrect pin")
                                                        }
                                            }
                                            catch(error){
                                                return res.send(error);
                                                        }
                                                        } 
                                    
                                

            







    

