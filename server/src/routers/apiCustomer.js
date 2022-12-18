const express = require('express')
const router = express.Router()
const db = require('../models/index')

router.get('/', async (req, res) => {
    const customers = await db.CUSTOMER.findAll()
    
    delete customers.id;
    delete customers.createdAt;
    delete customers.updatedAt;
    return res.json({success: true, customers})
})

router.get('/:id', async (req, res) => {
    const customer = await db.CUSTOMER.findOne({where: {CUS_ID: req.params.id}})
    if(customer){
        return res.json({success: true, customer})
    }else{
        return res.json({success: false, message: 'Mã người dùng này không tồn tại'})
    }
    
})

router.post('/create', async (req, res) => {
    const {CUS_ID, CUS_NAME, CUS_PHONE} = req.body
    if(!CUS_ID || !CUS_NAME || !CUS_PHONE){
        return res.json({success: false, message: 'Vui lòng nhập đủ các trường thông tin'})
    }
    const checkCustomer = await db.CUSTOMER.findOne({where: {CUS_ID}})
    if(checkCustomer){
        return res.json({success: false, message:'Mã CMND này đã tồn tại !!!'})
    }
    const newCustomer = await db.CUSTOMER.create({CUS_ID, CUS_NAME,CUS_PHONE})
    
    if(!newCustomer){
        return res.json({success: false, message: 'Đã có lỗi xảy ra'})
    }
    return res.json({success: true, message: 'Thông tin khách hàng đã được thêm'})
})

router.put('/:id', async (req, res) => {
    const {CUS_ID, CUS_NAME, CUS_PHONE} = req.body
    if(!CUS_ID || !CUS_NAME || !CUS_PHONE){
        return res.json({success: false, message: 'Vui lòng nhập đủ các trường thông tin'})
    }

    let customer = await db.CUSTOMER.findOne({where: {CUS_ID: req.params.id}})
    if(customer) {
        customer.CUS_ID = CUS_ID
        customer.CUS_NAME = CUS_NAME
        customer.CUS_PHONE = CUS_PHONE
        const updated = await customer.save()
        return res.json({success: true, message: 'Bạn đã cập nhật thông tin thành công'})
    }
    return res.json({success: false, message:'Thông tin khách hành này không còn tồn tại'})
})

router.delete('/:id', async (req, res) => {
    const customer = await db.CUSTOMER.findOne({where: {CUS_ID: req.params.id}})
    if(customer){

        const isDelete = await customer.destroy()
        if(isDelete){
            return res.json({success: true, message:'Xóa thông tin khác hàng thành công'})
        }
        return res.json({success: false, message:'Xóa thông tin khác hàng không thành công'})
    }
    return res.json({success: false, message:'Thông tin khách hàng này không còn tồn tại'})
})


module.exports = router