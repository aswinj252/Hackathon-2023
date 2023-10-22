import mongoose from "mongoose";

const shippingScheduleSchema = new mongoose.Schema({
  schedule_number: {type:Number,
    required:true
},
  proposed_date: {
    type:Date,
  required:true
}
});

const orderSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
     required: true 
    },

  date_of_shipping: {
     type: String, 
     required: true 
    },
  shipping_schedule: [shippingScheduleSchema],

  pdf_document: { 
    type: String, required: true
 },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
