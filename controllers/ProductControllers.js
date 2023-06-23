import Users from '../modals/user.js';
import encrypt from 'encryptjs';

export const addproduct = async(req, res) =>{
    try{
        const{title,price,image,category,description}=req.body;
        const response = await axios.post(`${fakestoreApiUrl}products`, {
            title,
            price,
            description,
            category,
            image,
        });
       return  res.send(response.data);
    } catch (error) {
        return res.send(error);
    }
}