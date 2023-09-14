const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')

router.get('/', async(req, res) => {        // GET all data
    try{
        const emp = await Employee.find()
        res.json(emp)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/:id', async(req, res) => {     // GET specific data by id
    try{
        const emp = await Employee.findById(req.params.id)
        res.json(emp)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.post('/', async(req, res) => {       // POST data
    const emp = new Employee(req.body);

    try{
    const e = await emp.save()
    res.json(e)
    }
    catch(err){
        res.send('Error')
    } 
})

router.put('/:id',async(req,res)=> {        // PUT i.e Edit data by Id
    try{
        const emp = await Employee.findById(req.params.id) 
        emp.name = req.body.name
        emp.tech = req.body.tech
        emp.sub = req.body.sub
        const e = await emp.save()
        res.json(e)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {     // DELETE data by Id
    try{
        await Employee.findByIdAndDelete(req.params.id) 
        res.json({message: 'Record delete successfully'})   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router