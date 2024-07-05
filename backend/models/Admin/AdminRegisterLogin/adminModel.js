const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminLoginRegisterSchema = new mongoose.Schema(
  {
        name:{
            type:String,
            required:[true,"please add a name"]
        },
        input:{
            type:String,
            required:[true,"please add a email/phone"],
            unique:true,
            trim:true,
        },
        role:{
            type:String,
            required:[true,"plase specify a role : Client or Admin"],
            default:"Admin",
        },

        password:{
            type:String,
            required:[true,"Please add apassword"],
            minLength:[6,"Password must be upto 6 characters"],
        },
        imageUrl:{
          type:String,
      },
       
    },
  { timestamps: true }
);

// Method to compare passwords
adminLoginRegisterSchema.methods.matchPasswords = async function (
  enteredPassword
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const AdminLoginRegister = mongoose.model(
  "AdminLoginRegister",
  adminLoginRegisterSchema
);

module.exports = AdminLoginRegister;
