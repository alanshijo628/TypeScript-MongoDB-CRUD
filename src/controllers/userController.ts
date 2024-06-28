import { Request, Response } from "express";
import { createNewUser, deleteUserById, getUserById, getUsers, updateUserById } from "../services/userService"
import User, { UserSchema } from "../models/userModel";
import { error } from "console";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        return res.status(200).json({data: users});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error});
    }
}

export const createUser = async(req: Request, res: Response) => {
    try {
        const userData: UserSchema = req.body;
        if(await User.findOne({email: userData.email})){
            return res.status(400).json({
                message: 'This email address is already taken',
                data: userData
            });
        }
        const newUser = await createNewUser(userData);
        return res.status(201).json({
            message: 'User created successfully',
            data: newUser
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error});
    }
}

export const getUser = async(req: Request, res: Response) => {
    try {
        const {userId} = req.params;
        const user = await getUserById(userId);
        return res.status(200).json({
            data: user
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error});
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params;
        const deletedUser = await deleteUserById(userId);
        if(!deletedUser) return res.status(400).json({message: 'User not found'});
        res.status(200).json({  
            message: 'User deleted successfully',
            data: deletedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params;
        const userData = req.body;
        const updatedUser = await updateUserById(userId, userData);
        if(!updatedUser) return res.status(400).json({message: 'Invalid User'});
        res.status(200).json({
            message: 'User updated successfully',
            data: updatedUser
        })
    } catch (error) {
        console.error(error);
        
    }
}