import User, { UserSchema } from "../models/userModel"

export const getUsers = () => {
    return User.find();
}

export const createNewUser = async (userData: UserSchema) => {
    const user = await new User(userData).save();
    return user;
}

export const getUserById = (userId: string) => {
    return User.findById(userId);
}

export const deleteUserById = async(userId: string) => {
    return await User.findByIdAndDelete(userId);
}

export const updateUserById = async (userId: string, userData: UserSchema)=>{
    return await User.findByIdAndUpdate(userId, userData, {new: true});
}