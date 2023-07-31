import HPCModel from './hpcModel.js';

async function createHPC(req, res) {
    let hpcData = req.body;

    try {
        // Create a HealthCare Provider
        const newHPC = await HPCModel.create({
            // instantiates a model and populates w/ request
            ...hpcData,
        });

        res.send({ HPCId: newHPC.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message || 'Some error occurred while creating the HCP.',
        });
    }
}

async function getHPC(req, res) {
    let HPCId = req.query.id;
    try {
        const user = await HPCModel.findByPk(HPCId);
        res.status(200).send(user);
    } catch (error) {
        console.error('Error while fetching user:', error);
        res.status(500).send(error);
    }
}

async function updateHPC(req, res) {
    let newHPCData = req.body;
    let HPCId = req.body.id;

    HPCModel.update(newHPCData, {
        where: { id: HPCId },
    })
        .then((updatedRows) => {
            if (updatedRows[0] === 1) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

async function deleteHPC(req, res) {
    let HPCId = req.query.id;

    HPCModel.destroy({
        where: { id: HPCId },
    })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

export { createHPC, getHPC, updateHPC, deleteHPC };
