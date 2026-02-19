// we need to do auth -> user model-> create end point for sign up and log in
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required for creating user"],
        trim: true,
        lowercase: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'
        ],
        unique: true
    },
    name:{
        type: String,
        required: [true, "Name if required to create account"]
    },
    password:{
        type:String,
        required: [true, "password is required to create account"],
        minlength: [6, "password should contain more than 6 characters"],
        select: false // password will not be fetched while fetching user data (until specifically asked for )
    }
},{
    timestamps: true  //  tells dwhen user was created / updated
})


/*
bcryptjs (Password hashing library) => Purpose: Securely hash the user’s password before saving it to the database.

A pre-save middleware hook in Mongoose. (userSchema.pre("save", ...)) => Runs before a document is saved to the database.
Execution Trigger:
	•	user.save()
	•	User.create()
It does not run on:
	•	updateOne()
	•	findByIdAndUpdate()
	•	updateMany()
    
	•	Middleware function is asynchronous.
	•	next() signals Mongoose to proceed to the next middleware or save operation.
	•	If next() is not called, the save process will hang.

    Checks whether the Password field has been modified. (this.isModified("Password"))
    
bcrypt.hash(password, saltRounds)
    •	password → Plain-text password
	•	10 → Salt rounds (cost factor)

Salt Rounds Meaning:
	•	Higher number → more secure
	•	Higher number → slower
	•	10 is standard for most applications


ADDITIONAL INFO
MODEL (User)
│
├── Static Methods  → User.find()
│
└── Document Instance
      │
      ├── this.isModified()
      ├── this.save()
      ├── this.comparePassword()

 */
// will run before saving user data
userSchema.pre("save", async function(next)  {

    if(!this.isModified("password")){
        return ;
    }
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash

    return 

})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
    
}

module.exports = mongoose.model("user", userSchema)

