/**
 * The GenericController class where other controller inherits or
 * overrides pre defined and existing properties
 */
class GenericController {
    /**
     * @param {Model} model The default model object
     * for the controller. This is required to create
     * an instance of the controller
     */
    constructor(model) {
        this._model = model
        this.store = this.store.bind(this);
        this.index = this.index.bind(this)
    }

    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @return {Object} res The response object
     */

    async store(req, res) {
        try {
            const data = await this._model.create(req.body)
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.json({error: "error"});
        }
    }

    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @return {Object} res The response object
     */
    async index(req, res) {
        try {
            const data = await this._model.find({});
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.json({error: "error"});
        }
    }
}
module.exports = GenericController;
