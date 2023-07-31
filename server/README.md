# Server

## Patient
- Create Patient `/Patient/create` **Post**
  - Body: `healthCard, firstName, lastName, sex, dob, phoneNumber, email`
  - Returns `userId`
- Read Patient `/Patient/get` **Get**
  - Request parameters: `userId`
  - Returns: `All fields`
- Update Patient `/Patient/update` **Put**
  - Body: `userId, fieldsToUpdate`
  - Returns: Statuscode
- Delete Patient `/Patient/delete` **Delete**
  - Body: `userId`
  - Returns: Statuscode


## Appointments
- Create Appointment `/appt/create`
  - Body: 
- Get Appointment `/appt/get`
- Update Appointment `/appt/update`
- Delete Appointment `/appt/delete`

## Complex Actions
- Get Patient appointments - with option to sort by date `/appt/get/sorted`
- Get Patient 