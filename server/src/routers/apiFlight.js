const express = require('express')
const router = express.Router()
const db = require('../models/index')

router.get('/', async (req, res) => {
    const flights = await db.FLIGHT.findAll()
    return res.json({success: true, flights})
})

router.post('/create', async (req, res) => {
    const {FLI_CODE, PLANE_CODE, FLI_S_PLACE, FLI_E_PLACE, FLI_S_DATE, FLI_E_DATE} = req.body
    if(!FLI_CODE || !PLANE_CODE || !FLI_S_PLACE || !FLI_E_PLACE || !FLI_S_DATE || !FLI_E_DATE){
        return res.json({success: false, message: 'Vui lòng nhập đủ các trường thông tin'})
    }

    const isChecked = await db.FLIGHT.findOne({where: {FLI_CODE}}) 
    if(isChecked){
        return res.json({success:false, message: 'Mã chuyến bay này đã tồn tại'})
    }

    const isPlaneExist = await db.PLANE.findOne({where: {PLANE_CODE}})
    if(!isPlaneExist){
        return res.json({success: false, message: 'Mã máy bay này không tồn tại'})
    }

    const newFlight = await db.FLIGHT.create({FLI_CODE, PLANE_CODE, FLI_S_PLACE, FLI_E_PLACE, FLI_S_DATE, FLI_E_DATE})
    if(!newFlight){
        return res.json({success: false, message:'Lỗi không thể tạo'})
    }
    return res.json({success: true, message: 'Bạn đã khởi tạo thành công một chuyến bay'})
})

router.put('/:id', async (req, res) => {
    const {FLI_CODE, PLANE_CODE, FLI_S_PLACE, FLI_E_PLACE, FLI_S_DATE, FLI_E_DATE} = req.body
    if(!FLI_CODE || !PLANE_CODE || !FLI_S_PLACE || !FLI_E_PLACE || !FLI_S_DATE || !FLI_E_DATE){
        return res.json({success: false, message: 'Vui lòng nhập đủ các trường thông tin'})
    }

    let flight = await db.CUSTOMER.findOne({where: {CUS_ID: req.params.id}})
    const plane = await db.PLANE.findOne({where: {PLANE_CODE}})
    if(flight) {
        if(!plane){
            return res.json({success: false, message: 'Mã máy bay không tồn tại'})
        }
        flight.FLI_CODE = FLI_CODE
        flight.PLANE_CODE = PLANE_CODE
        flight.FLI_S_PLACE = FLI_S_PLACE
        flight.FLI_E_PLACE = FLI_E_PLACE
        flight.FLI_S_DATE = FLI_S_DATE
        flight.FLI_E_DATE = FLI_E_DATE
        const updated = await flight.save()
        return res.json({success: true, message: 'Bạn đã cập nhật thông tin thành công'})
    }
    return res.json({success: false, message:'Thông tin chuyến bay này không còn tồn tại'})
})

router.delete('/:id', async (req, res) => {
    const flight = await db.FLIGHT.findOne({where: {FLI_CODE: req.params.id}})
    if(flight){
        const isDelete = await flight.destroy()
        if(isDelete){
            return res.json({success: true, message:'Xóa thông tin chuyến bay thành công'})
        }
        return res.json({success: false, message:'Xóa thông tin chuyến bay không thành công'})
    }
    return res.json({success: false, message:'Thông tin chuyến bay này không còn tồn tại'})
})

module.exports = router