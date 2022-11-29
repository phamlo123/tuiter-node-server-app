import * as tuitsDao from './tuits-dao.js'

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
   }
const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
  }
  
const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const updates = req.body;
    const status = await tuitsDao.updateTuit(req.params.tid, updates);
    res.json(status);
  }
  
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = parseInt(req.params.tid);
    const status = await tuitsDao.deleteTuit(req.params.tid);
    res.json(status);
}
  