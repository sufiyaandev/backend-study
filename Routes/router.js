const express = require('express')

const router = express.Router();

//get request
router.get(('/'),(req,res)=>{
    res.json({mssg:'get request done'})
})
//get request by id
router.get(('/:id'),(req,res)=>{
    res.json({mssg:'get request by id done'})
})
//post request
router.post(('/'),(req,res)=>{
    res.json({mssg:'post request done'})
})
//delete request
router.delete(('/:id'),(req,res)=>{
    res.json({mssg:'delete request done'})
})
//update request
router.patch(('/:id'),(req,res)=>{
    res.json({mssg:'update request done'})
})

module.exports=router