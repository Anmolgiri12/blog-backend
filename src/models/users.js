import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enumerable:['user','admin'],
        default:"user"
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    upadatedAt:{
        type:Date,
    default:Date.now
    },
    image:{
        type:String
    }
},{
    versionKey:false
});

Userschema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

Userschema.methods.matchpassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}
Userschema.methods.toJSON =function(){
    let obj = this.toObject();
    delete obj.password;
    return obj;
}
export default mongoose.model('User', Userschema)