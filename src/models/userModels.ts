import mongoose, { Schema, Document } from "mongoose";

interface User extends Document { // Extend Document for correct typing
    username: string;
    email: string;
    password: string;
    isVerified: boolean;
    isAdmin: boolean;
    forgotPasswordToken: string;
    forgotPasswordTokenExpiry: Date;
    verifyToken: string;
    verifyTokenExpiry: Date;
}

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: [true, "please enter a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "please enter an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please enter a password"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model<User>('users', userSchema);

export default User;