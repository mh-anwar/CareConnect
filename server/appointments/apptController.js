import ApptModel from './apptModel.js';

async function createAppt(req, res) {
    console.log('createAppt');
    let appt = req.body;
    // appt cont. fname, lname, healthcard, dob, phone, email
    console.log(appt);

    try {
        // Create a Appt
        const newAppt = await ApptModel.create({
            // instantiates a model and populates w/ request
            ...appt,
            referralCode: null,
        });

        res.send({ apptId: newAppt.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message || 'Some error occurred while creating the Appt.',
        });
    }
}

async function getAppt(req, res) {
    let apptId = req.query.id;
    console.log(apptId);
    try {
        const user = await ApptModel.findByPk(apptId);
        res.status(200).send(user);
    } catch (error) {
        console.error('Error while fetching user:', error);
        res.status(500).send(error);
    }
}

async function updateAppt(req, res) {
    let newApptData = req.body;
    let apptId = req.body.id;

    ApptModel.update(newApptData, {
        where: { id: apptId },
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

async function deleteAppt(req, res) {
    let apptId = req.query.id;
    console.log(apptId);
    ApptModel.destroy({
        where: { id: apptId },
    })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

async function getApptByUser(req, res) {
    let userId = req.query.id;
    console.log(userId);
    try {
        const user = await ApptModel.findAll({
            where: { userId: userId },
        });

        const pastAppts = [];
        const futureAppts = [];
        const today = new Date();
        for (let i = 0; i < user.length; i++) {
            if (user[i].date < today) {
                pastAppts.push(user[i]);
            } else {
                futureAppts.push(user[i]);
            }
        }

        res.status(200).send({ pastAppts, futureAppts });
    } catch (error) {
        console.error('Error while fetching user:', error);
        res.status(500).send(error);
    }
}
export { createAppt, getAppt, updateAppt, deleteAppt, getApptByUser };
