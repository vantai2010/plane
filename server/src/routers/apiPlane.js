const express = require('express')
const router = express.Router()
const db = require('../models/index')

router.get('/', async (req, res) => {
    const planes = await db.PLANE.findAll()
    return res.json({success: true, planes})
})
router.get('/:id', async (req, res) => {
    const plane = await db.PLANE.findOne({where: {PLANE_CODE: req.params.id}})
    return res.json({success: true, plane})
})

router.post('/create', async (req, res) => {
    const {PLANE_CODE, CHAIR_FREE, CHAIR_BOOKED} = req.body
    if(!PLANE_CODE){
        return res.json({success: false, message: 'Vui lòng nhập đủ các trường thông tin'})
    }
    const isChecked = await db.PLANE.findOne({where: {PLANE_CODE}})
    if(isChecked){
        return res.json({success: false, message:'Mã máy bay này đã tồn tại'})
    }
    
    const newPlane = await db.PLANE.create({PLANE_CODE, CHAIR_FREE, CHAIR_BOOKED})
    if(!newPlane){
        return res.json({success: false, message:'Lỗi không thể tạo'})
    }
    return res.json({success: true, message:'Bạn đã tạo thông tin về máy bay thành công'})
})

router.put('/:id', async (req, res) => {
    const {PLANE_CODE, CHAIR_FREE, CHAIR_BOOKED} = req.body
    if(!PLANE_CODE || !CHAIR_FREE || !CHAIR_BOOKED){
        return res.json({success: false, message: 'Vui lòng nhập đủ các trường thông tin'})
    }

    let plane = await db.PLANE.findOne({where: {PLANE_CODE: req.params.id}})
    if(plane) {
        plane.PLANE_CODE = PLANE_CODE
        plane.CHAIR_FREE = CHAIR_FREE
        plane.CHAIR_BOOKED  = CHAIR_BOOKED  
        const updated = await plane.save()
        return res.json({success: true, message: 'Bạn đã cập nhật thông tin thành công'})
    }
    return res.json({success: false, message:'Thông tin máy bay này không còn tồn tại'})
})

router.delete('/:id', async (req, res) => {
    const plane = await db.PLANE.findOne({where: {PLANE_CODE: req.params.id}})
    if(plane){
        const isDelete = await plane.destroy()
        if(isDelete){
            return res.json({success: true, message:'Xóa thông tin máy bay thành công'})
        }
        return res.json({success: false, message:'Xóa thông tin máy bay không thành công'})
    }
    return res.json({success: false, message:'Thông tin máy bay này không còn tồn tại'})
})

module.exports = router