import Users from '../modals/user.js';
import encrypt from 'encryptjs';
import axios from 'axios';



export const register=async(req,res)=>{

    try{
const {name,email,password,pin,role} =req.body;
if(!name) return res.send("name is required");
if(!email) return res.send("email is required");
if(!password) return res.send("password is required");
if(!pin) return res.send("pin is required");
if(!role) return res.send("role is required");


const response =await Users.find({email}).exec();
if(response.length) return res.send("email already exits")

var secretkey ="pin";
var plaintext= password;
var ciphertext=encrypt.encrypt(plaintext,secretkey,256);

var secretkeypin="pin";
var plaintextpin=pin;
var ciphertextpin=encrypt.encrypt(plaintextpin,secretkeypin,256);

const user =new Users({

    name,
    email,
    password:plaintext,
    pin:ciphertextpin,
    role,
    
});

             await user.save();
            return res.send("registeration sucessfully");

    }
    catch (error){
       return  res.send(error);
    }
}

export const getProduct=async(req,res)=>{
    try{

        const response = await axios.get(`${fakestoreApiUrl}products`);
return res.send(response.data)
    }
    catch(error){
        return res.send(error)
    }
}


export const addproduct=async(req,res)=>{
    try{

        const { title, price, description, category, image } = req.body;
    
            const response = await axios.post(`${fakestoreApiUrl}products`, {
                title,
                price,
                description,
                category,
                image,
            });
            return res.send(response.data);
    }
    catch(error){
        return res.send(error);
    }
}



export const updateuser=async(req,res)=>{
    try{
        const { title, price, description, category, image } = req.body;
    
            const response = await axios.put(`${fakestoreApiUrl}products`, {
                title,
                price,
                description,
                category,
                image,
            });
         return res.send(response.data);

    }
    catch(error){
        return res.send(error);
    }
}


export const deleteproduct=async(req,res)=>{
    try{
        const { id } = req.params;
    
        await axios.delete(`${fakestoreApiUrl}products/${id}`);
        res.send("product deleteed ");
    } catch (error) {
        return res.send(error);
    }
}




