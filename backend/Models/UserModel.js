import mongoose from mongoose

const UserSchema=mongoose.Schema(
		{
			name:{
				type:String;
				required:true;
			},
			email:{
				type:String;
				required:true;
			},
			password:{
				type:String;
				required:true;
			},
			mobile:{
				type:String;
				required:true;
			},
			image:{
				 public_id:{
                	type:String,
                	required:true,
            	},
            	url:{
                	type:String,
                	required:true,
            	},
			},
			 isBlocked:{
                type:Boolean,
                required: true,
                default:false,
             },
            reffId:{
                type:String,
        },
        wallet: {
            type: Number,
            required: true,
            default: 0
        },
        ownership:{
            type: Number,
            required: true,
            default: 0
        },
		}
	)
