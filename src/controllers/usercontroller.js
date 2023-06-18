import User from "../models/users.js";

class Usercontroller{
    async index(req,res){
        const users= await User.find();
        return res.json(users);
    }
    

    async store(req,res){
       try{ const user = await User.create(req.body);
    return res.json(user)
} catch(e){
    return res.status(400).json({error:e.message})
}
    }


}

export default  Usercontroller;