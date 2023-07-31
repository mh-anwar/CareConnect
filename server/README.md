# Server

## Patient
- Create `/Patient/create` **Post**
  - Body: `healthCard, firstName, lastName, sex, dob, phoneNumber, email`
  - Returns `userId`
- Read `/Patient/get` **Get**
  - Request parameters: `userId`
  - Returns: `All fields`
- Update `/Patient/update` **Put**
  - Body: `userId, fieldsToUpdate`
  - Returns: Statuscode
- Delete `/Patient/delete` **Delete**
  - Body: `userId`
  - Returns: Statuscode


## Appointments
- Create Appointment `/appt/create`
  - Body: 
- Get Appointment `/appt/get`
- Update Appointment `/appt/update`
- Delete Appointment `/appt/delete`

## HealthCare Provider
- Create `/hpc/create` **Post**
  - Body: `healthProviderName, address, city, postalCode, phoneNumber, email, website, doctors`
  - Returns `hpcId`
- Read `/hpc/get` **Get**
  - Request parameters: `hpcId`
  - Returns: `All fields`
- Update `/hpc/update` **Put**
  - Body: `hpcId, fieldsToUpdate`
  - Returns: Statuscode
- Delete `/hpc/delete` **Delete**
  - Body: `hpcId`
  - Returns: Statuscode
  
## Complex Actions
- Get Patient appointments - with option to sort by date `/appt/get/sorted`
- Get Patient 