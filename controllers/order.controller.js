const orderModel = require('../models/order.model');
const productModel = require('../models/product.model')

// Create a new order
const createOrder = async (req , res) =>{
    const userId = req.user.id;
    const { items} = req.body;
    let totalAmount = 0;
    try{
        // Check if all products in the order exist
         for(const item of items) {
            const product = await productModel.findById(item.productId);
            console.log(product);
            if (!product) {
                return res.status(404).json({
                    message: `Product with ID ${item.productId} not found`
                });
            }
            totalAmount += product.price * item.quantity; // Calculate total amount

        };

        // Create the order
        const newOrder = await orderModel.create({
            userId: userId,
            items: items,
            totalAmount: totalAmount
        });

        res.status(201).json({
            message: "Order created successfully",
            order: newOrder
        });

    }
    catch (error){
        console.error("Error creating an order:" , error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


const getOrdersByUserId = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const orders = await orderModel.find({userId: userId}).populate('items.productId' , 'title price imageUrl').populate('userId', 'name email');
    if (!orders || orders.length === 0) {
        return res.status(404).json({
            message: "No orders found for this user"
        });
    }
    res.status(200).json(orders);

}


// update order status
 
const updateOrderStatus = async (req , res) =>{
    const { id } = req.params;
    console.log("orderId : " ,id)
    const { status } = req.body;
    const validStatuses = ['pending', 'shipped', 'delivered', 'cancelled'];
    if(!validStatuses.includes(status)){
        return res.status(400).json({
            message: "Invalid status"
        });
    }

    try {
           const updatedOrder = await orderModel.findByIdAndUpdate(
            id,
            { status: status },
            { new: true } // Return the updated document
           );
        if (!updatedOrder) {
            return res.status(404).json({
                message: "Order not found"
            });
}

        res.status(200).json({
            message: "Order status updated successfully",
            order: updatedOrder
        });
}
    catch(error){
        console.error("Error updating order status:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


module.exports = { createOrder , getOrdersByUserId  , updateOrderStatus};