const Tourists = require("../model/tourist")

const touristsCtrl = {
    postTourist: async (req, res) =>{

        try {
            const {name, email, phoneNumber, address, state, nextOfKins, NextOfKincontacts} = req.body
        
            const tourist = await Tourists.findOne({email})
        
            if(tourist)
                return res.status(404).json({msg: "Tourist already exist!"})
        
            const newTourist = new Tourists({name, email, phoneNumber, state, address, nextOfKins, NextOfKincontacts} )
         
            await newTourist.save() 
        
        
            return res.status(200).json({msg: "Tourist added succefully."})
        } catch (error) {
            return res.status(500).json({msg: error.message})
             
        }
        // res.status(200).json({msg: "These are all the tourists"})
    },

    getAllTourist: async (req, res) =>{
       
        try {
            const allTourist = await Tourists.find()
   
            if(!allTourist)
            return res.status(404).json({msg: "No tourist on the database"})
   
       res.status(200).json(allTourist)
       } catch (error) {
           return res.status(500).json({msg: error.message})
           
       }
    },

    getOneTourist:  async (req, res) =>{
     try { 
        const {id} = req.params

        const tourist = await Tourists.findById(id)

        if(!tourist)
        return res.status(200).json({msg: "this tourist does not exist!"})

        return res.status(200).json(tourist)

        // const id = req.params.id
        
    } catch (error) { 
        
        return res.status(500).json({msg: error.message})
    }
},

updateOneTourist: async (req, res) => {
        try {
            const {id} = req.params
    
            const {name, email, phoneNumber, address, state, nextOfKins, NextOfKincontacts}= req.body
    
            const tourist = await Tourists.findByIdAndUpdate(id, {name, email, phoneNumber, address, state, nextOfKins, NextOfKincontacts})
    
            return res.status(200).json({msg: "tourist updated successfully"})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
            
        
    }
    },

    deleteOneTourist: async (req, res) => {
        
            try {
                const {id} = req.params
        
                const touristToDelete = await Tourists.findById(id)
        
                if(!touristToDelete)
                return res.status(404).json({msg: "this tourist doesn't exist"})
        
                const deletedtourist = await Tourists.findByIdAndDelete(id)
                return res.status(200).json({msg: "tourist deleted successfuly"})
                
            } catch (error) {
                return res.status(500).json({msg: error.message})
                
            }
    },
}




module.exports = touristsCtrl