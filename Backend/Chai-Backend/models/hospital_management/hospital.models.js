import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        addresLine1: {
            type: String,
            required: true,
        },
        addresLine2: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: true,
        },
        pincode: {
            type: String,
            required: true,
        },
        specializedIn: {
            type: String,
        },
    }, {timestamps: true}
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);