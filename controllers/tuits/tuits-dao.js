import tuitsModel from './tuits-model.js';
export const findTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => {
    tid.trim()
    tuitsModel.deleteOne({_id: tid});
}
export const updateTuit = (tid, tuit) => {
    tid.trim()
    tuitsModel.updateOne({_id: tid}, {$set: tuit})
}
