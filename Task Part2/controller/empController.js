const user= require("../model/empModel")
// const city= require("../model/empModel")

const insertUser= async(req, res)=>{
    try{
        const userData= new user({
            name:req.body.name,
            gender:req.body.gender,
            address: req.body.address,
            email: req.body.email,
            cnic: req.body.cnic,
            contactNo: req.body.contactNo,
            matricInstit: req.body.matricInstit,
            matricMarks: req.body.matricMarks,
            matricPercentage: req.body.matricPercentage,
            matricBoard: req.body.matricBoard,
            matricYear: req.body.matricYear,
            interInstit: req.body.interInstit,
            interMarks: req.body.interMarks,
            interPercentage: req.body.interPercentage,
            interYear: req.body.interYear,
            interBoard: req.body.interBoard,
            skills: req.body.skills,
            dob:req.body.dob
            
        })
        const ressult= await userData.save()
        res.send("User data inserted..."+ressult)
    }
    catch(error){
        res.send(error.message)
    }
}

const getByName = async (req,res) => {
    try {
      const item = await user.find({name: req.body.name});
      res.json(item);
    // console.log(item)
    } catch (err) {
      res.send(err.message)
    }
  }
module.exports={insertUser,getByName}