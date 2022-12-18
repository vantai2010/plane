const express = require('express')
const router = express.Router()
const db = require('../models/index')

router.get('/', async (req, res) => {
    const tickets = await db.TICKET.findAll()
    return res.json({success: true, tickets})
})

router.post('/create', async (req, res) => {
    const {TIK_CODE, CUS_ID, PLANE_CODE, CHAIR_CODE, TIK_RANK} = req.body
    if(!TIK_CODE || !CUS_ID || !PLANE_CODE || !CHAIR_CODE || !TIK_RANK){
        return res.json({success: false, message: 'Vui lòng nhập đủ các trường thông tin'})
    }

    const isChecked = await db.TICKET.findOne({where: {TIK_CODE}})
    if(isChecked){
        return res.json({success: false, message:'Mã Vé này đã tồn tại'})
    }

    const isCusExist = await db.CUSTOMER.findOne({where: {CUS_ID}})
    if(!isCusExist){
        return res.json({success: false, message: 'Mã khách hàng này không tồn tại'})
    }
    const isPlaneExist = await db.PLANE.findOne({where: {PLANE_CODE}})
    if(!isPlaneExist){
        return res.json({success: false, message: 'Mã máy bay này không tồn tại'})
    }

    const newTicket = await db.TICKET.create({TIK_CODE, CUS_ID, PLANE_CODE, CHAIR_CODE, TIK_RANK})
    if(!newTicket){
        return res.json({success: false, message:'Lỗi không thể tạo'})
    }
    return res.json({success: true, message: 'Bạn đã tạo vé thành công'})
})

router.put('/:id', async (req, res) => {
    const {TIK_CODE, CUS_ID, PLANE_CODE, CHAIR_CODE, TIK_RANK} = req.body
    if(!TIK_CODE || !CUS_ID || !PLANE_CODE || !CHAIR_CODE || !TIK_RANK){
        return res.json({success: false, message: 'Vui lòng nhập đủ các trường thông tin'})
    }

    let ticket = await db.CUSTOMER.findOne({where: {TIK_CODE: req.params.id}})
    const customer = await db.CUSTOMER.findOne({where: {CUS_ID}})
    const plane = await db.CUSTOMER.findOne({where: {PLANE_CODE}})
    if(ticket) {
        if(!customer){
            return res.json({success: false, message: 'Mã khách hàng này không tồn tại'})
        }
        if(!plane){
            return res.json({success: false, message: 'Mã máy bay này không tồn tại'})
        }
        ticket.TIK_CODE = TIK_CODE
        ticket.CUS_ID = CUS_ID
        ticket.PLANE_CODE  = PLANE_CODE  
        ticket.CHAIR_CODE  = CHAIR_CODE  
        ticket.TIK_RANK  = TIK_RANK  
        const updated = await ticket.save()
        return res.json({success: true, message: 'Bạn đã cập nhật thông tin thành công'})
    }
    return res.json({success: false, message:'Thông tin máy bay này không còn tồn tại'})
})

router.delete('/:id', async (req, res) => {
    const ticket = await db.TICKET.findOne({where: {TIK_CODE: req.params.id}})
    if(ticket){
        const isDelete = await ticket.destroy()
        if(isDelete){
            return res.json({success: true, message:'Xóa thông tin vé thành công'})
        }
        return res.json({success: false, message:'Xóa thông tin vé không thành công'})
    }
    return res.json({success: false, message:'Thông tin vé này không còn tồn tại'})
})

module.exports = router