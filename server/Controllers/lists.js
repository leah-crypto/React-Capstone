// const { Model } = require('sequelize')
const { list } = require('../models/list')
const { user } = require('../models/user')
const { sequleize } = require('../utli/database')

module.exports = {
    getCurrentUserLists: async (req, res) => {
        try{
            const {userId} = req.params
            console.log(req.params)
            const lists = await list.findAll({
                where: {userUserId: +userId}
                
            })
            res.status(200).send(lists)
        }catch (error){
            console.log(error)
            console.log("There was an error in getCurrentUserLists")
            res.sendStatus(400)
        }
    },

    addList: async(req, res) => {
        try{
            console.log("add list")
            const {name, mass, radius, temperature, distance_light_year, userId } = req.body //can use : or AS
            console.log(userId, req.body)
            await list.create({name, mass, radius, temperature, distanceLightYear: distance_light_year, userUserId: userId})
            console.log(typeof mass)
            res.sendStatus(200)

        }catch(error){
            console.log("error in getCurrentUserLists")
            console.log(error)
            console.log(400)
        }
    },

    deleteList: async (req, res) => {
        try{
            const {id} = req.params
            await list.destroy({where: {id: +id}})
            res.sendStatus(200)
        }catch(error){
            console.log('error has occured in getCurrentUserLists')
            console.log(error)
            res.status(400)
        }
    }
}