import mongoose from "mongoose"
var ArticleSchema = mongoose.Schema({
 titre: {type: String, required: true},
 contenu: String,
 prix: Number,
 qtestock: Number,
 couverture: String,
 sujet: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Sujet'
 },
 jounaliste: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Journaliste'
 }
})
const Article = mongoose.model('Article', ArticleSchema);
export default Article 