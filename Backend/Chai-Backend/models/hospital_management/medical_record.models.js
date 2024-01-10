import mongoose from 'mongoose';

const medicalReportSchema = new mongoose.Schema(
    {
        
    }, {timestamps: true}
);

export const MedicalRecord = mongoose.model("MedicaRecord", medicalReportSchema);