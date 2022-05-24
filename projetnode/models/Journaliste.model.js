import mongoose from "mongoose"
var journalisteSchema = mongoose.Schema({
    nomJournaliste: String,
    email: String,
    numtel: String
});
const Journaliste = mongoose.model('Journaliste', journalisteSchema);
export default Journaliste
