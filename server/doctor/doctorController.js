import DoctorModel from './doctorModel.js';

async function createDoc(req, res) {
    let doctorReq = req.body;
    // docttorReq cont. fname, lname, healthcard, dob, phone, email
    console.log(newDoctor);

    try {
        // Create a Appt
        const newDoctor = await DoctorModel.create({
            // instantiates a model and populates w/ request
            ...doctorReq,
            referralCode: null,
        });

        res.send({ doctorId: newDoctor.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message || 'Some error occurred while creating the Appt.',
        });
    }
}

async function getDoc(req, res) {
    let newDoctorId = req.query.id;
    console.log(newDoctorId);
    try {
        const user = await DoctorModel.findByPk(newDoctorId);
        res.status(200).send(user);
    } catch (error) {
        console.error('Error while fetching user:', error);
        res.status(500).send(error);
    }
}

async function updateDoc(req, res) {
    let newDocData = req.body;
    let newDoctorId = req.body.id;

    DoctorModel.update(newDocData, {
        where: { id: newDoctorId },
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

async function deleteDoc(req, res) {
    let doctorId = req.query.id;
    console.log(doctorId);
    DoctorModel.destroy({
        where: { id: doctorId },
    })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
}

async function getDocByHCP(req, res) {
    let hcpId = req.query.id;

    try {
        const user = await DoctorModel.findAll({
            where: { hcpId: hcpId },
        });

        res.status(200).send(user);
    } catch (error) {
        console.error('Error while fetching user:', error);
        res.status(500).send(error);
    }
}
export { createDoc, getDoc, updateDoc, deleteDoc, getDocByHCP };
