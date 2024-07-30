import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async(req, res)=>{
    const {id} = req.params;

    try {
        
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true});
        res.status(200).json({success: true, message: "Successfully updated", data:updatedUser});

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to update", data:null});
    }
};

export const deleteUser = async(req, res)=>{
    const {id} = req.params;

    try {
        
        const deletedUser = await User.findByIdAndDelete(id, {$set:req.body}, {new:true});
        res.status(200).json({success: true, message: "Successfully deleted", data:deletedUser});

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to delete", data:null});
    }
};
export const getSingleUser = async(req, res)=>{
    const {id} = req.params;

    try {
        
        const user = await User.findById(id).select("-password");
        res.status(200).json({success: true, message: "User found", data:user});

    } catch (error) {
        res.status(404).json({success: false, message: "User does not exist", data:null});
    }
};

export const getAllUser = async(req, res)=>{
    const {id} = req.params;

    try {
        
        const users = await User.find({}).select("-password");
        res.status(200).json({success: true, message: "Users found", data:users});

    } catch (error) {
        res.status(404).json({success: false, message: "Users do not exist", data:null});
    }
};

export const getUserProfile = async(req, res)=>{
    const userId = req.userId;

    try{
        const user = await User.findById(userId);
        if (!user){
        return res
            .status(404)
            .json({success:false, message:'User not found'});
        }

        const {password, ...rest} = user._doc
        res
            .status(200)
            .json({
                success:true, 
                message:'Profile info is getting', 
                data:{...rest},
            });
     }catch(err){
        res
            .status(500)
            .json({
                success:false, 
                message:'Something went wrong, cannot get'});
    }
}

export const getMyAppointments = async(req,res)=>{
    try {
        //step 1 : retrieve appointments from booking for a specific user
        const bookings = await Booking.find({user:req.userId})

        //step 2 : extract doctor id from the appointment
        const doctorIds = bookings.map(el=>el.doctor.id)

        //step 3 : retrieve doctors using doctor ids
        const doctors = await Doctor.find({id: {$in:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:'Appointments are getting', data:doctors})

    } catch (err) {
        res
        .status(500)
        .json({
            success:false, 
            message:'Something went wrong, cannot get'});
        }
}