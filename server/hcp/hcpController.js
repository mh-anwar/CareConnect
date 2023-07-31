import HCPModel from './hcpModel.js';

async function createHCP(req, res) {
    let hcpData = req.body;

    try {
        // Create a HealthCare Provider
        const newHCP = await HCPModel.create({
            // instantiates a model and populates w/ request
            ...hcpData,
        });

        res.send({ HCPId: newHCP.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message || 'Some error occurred while creating the HCP.',
        });
    }
}

async function getHCP(req, res) {
    let HCPId = req.query.id;
    try {
        const user = await HCPModel.findByPk(HCPId);
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        console.error('Error while fetching user:', error);
        res.status(500).send(error);
    }
}

async function updateHCP(req, res) {
    let newHCPData = req.body;
    let HCPId = req.body.id;
    console.log(newHCPData);
    HCPModel.update(newHCPData, {
        where: { id: HCPId },
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

async function deleteHCP(req, res) {
    let HCPId = req.query.id;

    HCPModel.destroy({
        where: { id: HCPId },
    })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

export { createHCP, getHCP, updateHCP, deleteHCP };
