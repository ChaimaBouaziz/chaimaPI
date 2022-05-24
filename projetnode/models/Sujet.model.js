import mongoose from "mongoose"
var sujetSchema = mongoose.Schema({
nomsujet: String
})
const Sujet = mongoose.model('Sujet', sujetSchema);
export default Sujet
