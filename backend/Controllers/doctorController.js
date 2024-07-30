import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateDoctor = async(req, res)=>{
    const {id} = req.params

    try {
        
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body}, {new:true});
        res.status(200).json({success: true, message: "Successfully updated", data:updatedDoctor});

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to update", data:null});
    }
}

export const deleteDoctor = async(req, res)=>{
    const {id} = req.params

    try {
        
        const deletedDoctor = await Doctor.findByIdAndDelete(id, {$set:req.body}, {new:true});
        res.status(200).json({success: true, message: "Successfully deleted", data:deletedDoctor});

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to delete", data:null});
    }
}

export const getSingleDoctor = async(req, res)=>{
    const {id} = req.params;

    try {
        
        const doctor = await Doctor.findById(id).populate('reviews').select("-password");
        res.status(200).json({success: true, message: "Doctor found", data:doctor});

    } catch (error) {
        res.status(404).json({success: false, message: "Doctor does not exist", data:null});
    }
};

export const getAllDoctor = async(req, res)=>{
    const {id} = req.params;

    try {
        //frontend search functionality  to filter doctors by name and specialization
        // query parameter to filter data based on specific criteria
        const {query} = req.query;
        let doctors;
        //check if query params exists
        if(query){
            doctors = await Doctor.find({isApproved:'approved',
            $or:[
                {name: {$regex: query, $options: "i"}},
                {specialization: {$regex: query, $options: "i"}},
            ]
        }).select("-password") //exclude the password
        }else{
            doctors = await Doctor.find({isApproved:'approved'}).select("-password");
        }
        res.status(200).json({success: true, message: "Doctors found", data:doctors});

    } catch (error) {
        res.status(404).json({success: false, message: "Doctors do not exist", data:null});
    }
};

export const getDoctorProfile = async(req, res)=>{
    const doctorId = req.userId;

    try{
        const doctor = await Doctor.findById(userId);
        if (!doctor){
        return res
            .status(404)
            .json({success:false, message:'Doctor not found'});
        }

        const {password, ...rest} = doctor._doc
        const appointments = await Booking.find({doctor: doctorId})

        res
            .status(200)
            .json({
                success:true, 
                message:'Profile info is getting', 
                data:{...rest, appointments},
            });
     }catch(err){
        res
            .status(500)
            .json({
                success:false, 
                message:'Something went wrong, cannot get'});
    }
}