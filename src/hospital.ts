class Person {
  firstName: string;
  lastName: string;
  age: string;
  address: string;

  constructor(
    firstName: string,
    lastName: string,
    age: string,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
  
}

class Patient extends Person {
  patientId: string;
  phoneNumber: string;
  emergencyContact: string;
  medicalHistory: object[];

  constructor(
    firstName: string,
    lastName: string,
    patientId: string,
    age: string,
    address: string,
    phoneNumber: string,
    emergencyContact: string,
    medicalHistory: object[]
  ) {
    super(firstName, lastName, age, address);
    this.patientId = patientId;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = medicalHistory;
  }
  private showMyDetails() {
    console.log(`Dear patient, here are your details:`, this);
  }
  showDetails() {
    this.showMyDetails();
  }
  updateMedicalHistory(turn: object) {
    this.medicalHistory.push(turn);
  }
}
class MedicalStaff extends Person {
  staffID: string;
  position: string;
  department: string;

  constructor(
    firstName: string,
    lastName: string,
    age: string,
    address: string,
    staffID: string,
    position: string,
    department: string,) {
      super(firstName, lastName, age, address)
      this.staffID = staffID;
      this.position = position;
      this.department = department;
    }
    showMyDetails() {
      console.log(`Dear patient, here are your details:`, this);
    }
    showDetails() {
      this.showMyDetails();} 
 }
class Doctor extends MedicalStaff {
  doctorId: string;
  specialization: string;
  availability: object[]

  constructor(
    firstName: string,
    lastName: string,
    doctorId: string,
    specialization: string,
    age: string,
    address: string,
    staffID: string,
    position: string,
    department: string,
    availability: object[]
  ) {
    super(firstName, lastName, age, address, staffID, position, department);
    this.firstName = firstName;
    this.lastName = lastName;
    this.doctorId = doctorId;
    this.specialization = specialization;
    this.availability = availability;

  }
  showMyDetails() {
    console.log(`Dear doctor, here are your details:`, this);
  }
  showDetails() {
    this.showMyDetails;
  }
}

class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  turnStatus: string;

  constructor(patient: Patient, doctor: Doctor, date: string, time: string, turnStatus: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
    this.turnStatus = turnStatus;
  }

  showTurnDetails() {
    console.log(`Dear Department manager, here are your details:`, this);}

  updateTurnStatus(mystatus: string) {
    this.turnStatus = mystatus
  }
  
}
class MedicalRecord {
  patient: Patient;
  doctor: Doctor;
  diagnosis: string;
  prescription: string;

  constructor(patient: Patient,
    doctor: Doctor,
    diagnosis: string,
    prescription: string,
  ) {
    this.patient = patient;
    this.doctor = doctor;
    this.diagnosis = diagnosis;
    this.prescription = prescription;
  }
}
class Hospital {
  name: string;
  patientsArray: Patient[];
  doctorsArray: Doctor[];
  turnsArray: Appointment[];
  medicalRecord: MedicalRecord[];

  constructor(
    name: string,
    patientsArray: Patient[],
    doctorsArray: Doctor[],
    turnsArray: Appointment[],
    medicalRecord: MedicalRecord[]

  ) {
    this.name = name;
    this.patientsArray = patientsArray;
    this.doctorsArray = doctorsArray;
    this.turnsArray = turnsArray;
    this.medicalRecord = medicalRecord;
  }

  addingPatient(arg: Patient) {
    this.patientsArray.push();
    console.log(this.patientsArray);
  }
  addingDoctor(arg: Doctor) {
    this.patientsArray.push();
    console.log(this.doctorsArray);
  }
  showTurnsDetails() {
    console.log(this.turnsArray);
  }
  showByDRID(id: string) {
    for (let i = 0; i < this.turnsArray.length; i++) {
      if (this.turnsArray[i].doctor.doctorId == id) {
        console.log(this.turnsArray[i].date, this.turnsArray[i].time);
        break;
      }
    }
  }
  showByPatientID(id: string) {
    for (let i = 0; i < this.turnsArray.length; i++) {
      if (this.turnsArray[i].patient.patientId == id) {
        console.log(this.turnsArray[i].date, this.turnsArray[i].time);
        break;
      }
    }
  }
  
  addTurns(turn: Appointment) {
    for (let i = 0; i < this.doctorsArray.length; i++) {
      if (this.doctorsArray[i].firstName == turn.doctor.firstName && this.doctorsArray[i].lastName == turn.doctor.lastName) {
        for (let j = 0; j < this.doctorsArray[i].availability.length; j++){
          if (this.turnsArray[j].date in this.doctorsArray[i].availability[j]) {
          if (this.turnsArray[j].time in this.doctorsArray[i].availability[j]) {
            this.turnsArray.push(turn)
          }}}
      }
    }
    this.turnsArray.push(turn);
    console.log(this.turnsArray);
  }
  getDRBypro(pro: string) {
    for (let i = 0; i < this.doctorsArray.length; i++){
      if (this.doctorsArray[i].specialization == pro) {
        console.log(this.doctorsArray[i].firstName, this.doctorsArray[i]. lastName);
        
      }
    }
  }
  createMedicalRecord(patient: Patient, doctor: Doctor, diagnosis: string, prescription: string) {
    const myMedicalRecord = new MedicalRecord (patient, doctor, diagnosis, prescription)
  }
  getMedicalRecords(patient: Patient) {
    for (let i = 0; i < this.medicalRecord.length; i++){
      if (this.medicalRecord[i].patient == patient) {
        console.log(this.medicalRecord[i]);
        
        
      }
    }
  }
  getDoctorSchedule(someFN: string, someLN: string, someDate: string) {
    for (let i = 0; i < this.doctorsArray.length; i++) {
      if (this.turnsArray[i].doctor.firstName == someFN && this.turnsArray[i].doctor.lastName == someLN && this.turnsArray[i].date == someDate && this.turnsArray[i].turnStatus == 'cancled'){console.log(this.turnsArray[i].time);
      }
      break
  }
  console.log("Sorry, but we did'nt found this doctor. Please try again...");
  
}
getDoctorAvailability(someFN: string, someLN: string, someDate: string) {
  const hi = someDate
  for (let i = 0; i < this.doctorsArray.length; i++){
    if (this.doctorsArray[i].firstName == someFN && this.doctorsArray[i].lastName == someLN){
      for (let j = 0; j < this.doctorsArray[i].availability.length; j++){
      if (someDate in this.doctorsArray[i].availability[j]) {
      console.log(this.doctorsArray[i].availability[j])}}}
  
}
}

}



//patients

const patient1 = new Patient(
  "ari",
  "dvi",
  "P12345",
  "21",
  "hilel 3",
  "050212541",
  "dad: 03-9098765",
  [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
  ]
);
const patient2 = new Patient(
  "mosh",
  "rot",
  "P67890",
  "22",
  "hilel 3",
  "050212541",
  "dad: 03-9098765",
  [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
  ]
);
const patient3 = new Patient(
  "or",
  "dev",
  "P24870",
  "23",
  "hilel 3",
  "050212541",
  "dad: 03-9098765",
  [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
  ]
);
patient1.updateMedicalHistory({date: '02-11-2024', time: '15:20'})
patient1.showDetails()

//doctors

const doctor1 = new Doctor(
  "doc_avi",
  "tdi",
  "D98765",
  "surgical",
  "31",
  "hilel 3",
  '32240', 
  'north', 
  'maternity ward', 
  [{"01-01-2025": ['12:00', '12:30', '13:00']}, {'02-02-2025': ['12:00', '12:30', '13:00']}]
);
const doctor2 = new Doctor(
  "doc_ben",
  "yos",
  "D54321",
  "orthopedics",
  "32",
  "hilel 3", 
  '32240', 
  'north', 
  'maternity ward',
  [{"01-01-2025": ['12:00', '12:30', '13:00']}, {'02-02-2025': ['12:00', '12:30', '13:00']}]
);
const doctor3 = new Doctor(
  "doc_david",
  "git",
  "D98321",
  "parturient",
  "33",
  "hilel 3", 
  '32240', 
  'north', 
  'maternity ward',
  [{"01-01-2025": ['12:00', '12:30', '13:00']}, {'02-02-2025': ['12:00', '12:30', '13:00']}]
);
doctor1.showDetails();

//appointments

const appointment1 = new Appointment(
  patient1, 
  doctor1, 
  "2023-09-01", 
  "10:00", 
  'planed')
const appointment2 = new Appointment(
  patient2, 
  doctor2, 
  "2023-27-08", 
  "15:30", 'planed');
  appointment1.updateTurnStatus('fixed')
  appointment1.showTurnDetails()

//hospital

const patientRecords = [patient1, patient2];
const doctors = [doctor1, doctor2];
const appointments = [appointment1, appointment2];
const medic1 = new MedicalRecord(
  patient1, 
  doctor1, 
  'ADHD', 
  'Vyvanse 30MG')
const medic2 = new MedicalRecord(
  patient2, 
  doctor2, 
  'ADD', 
  'attent 20MG')
  const mediArr = [medic1, medic2]
const hospital = new Hospital(
  "Hadassah",
  patientRecords,
  doctors,
  appointments, mediArr
);
hospital.addingPatient(patient3);
hospital.addingDoctor(doctor3);
const newAppointments = new Appointment(
  patient3,
  doctor3,
  "2023-27-08",
  "12:30",
  'planed'
);

hospital.addTurns(newAppointments);
hospital.showTurnsDetails();
hospital.showByDRID("D54321");
hospital.showByPatientID("P12345");
hospital.getDRBypro("orthopedics")
hospital.createMedicalRecord(patient3, doctor3, 'OCD', 'Conserta')
hospital.getMedicalRecords(patient3)
hospital.getDoctorSchedule("doc_david",
"git", '01-01-2025')
hospital.getDoctorAvailability("doc_david",
"git", '01-01-2025')


// const patient11 = new Patient(
//   "Zion",
//   "Baruch",
//   "315179",
//   "21",
//   "hilel 3",
//   "050212541",
//   "dad: 03-9098765",
//   [
//     { date: "2023-09-01", time: "10:00" },
//     { date: "2023-27-08", time: "15:30" },
//   ]
// );
// const patient12 = new Patient(
//   "Asi",
//   "Israelof",
//   "315168",
//   "21",
//   "hilel 3",
//   "050212541",
//   "dad: 03-9098765",
//   [
//     { date: "2023-09-01", time: "10:00" },
//     { date: "2023-27-08", time: "15:30" },
//   ]
// );
// const patient13 = new Patient(
//   "Shalom",
//   "Michaelshvilly",
//   "315100",
//   "21",
//   "hilel 3",
//   "050212541",
//   "dad: 03-9098765",
//   [
//     { date: "2023-09-01", time: "10:00" },
//     { date: "2023-27-08", time: "15:30" },
//   ]
// );
// const doctor11 = new Doctor(
//   "Tomer",
//   "kapoon",
//   "20678",
//   "orthopedics",
//   "21",
//   "hilel 3", '32240', 'north', 'maternity ward'
// );
// const doctor12 = new Doctor(
//   "Daniel",
//   "Gal",
//   "20694",
//   "geriatrics",
//   "21",
//   "hilel 3", '32240', 'north', 'maternity ward'
// );
// const doctor13 = new Doctor(
//   "Oz",
//   "Zehavy",
//   "20631",
//   "psychiatry",
//   "21",
//   "hilel 3", '32240', 'north', 'maternity ward'
// );
// const appo11 = new Appointment(patient11, doctor11, "11-08-2024", "11:00", 'cancled');
// const appo12 = new Appointment(patient12, doctor12, "12-09-2024", "12:15", 'fixed');
// const appo13 = new Appointment(patient13, doctor13, "13-10-2024", "13:45", 'planed');
// const patientArr = [patient11, patient12, patient13];
// const doctorArr = [doctor11, doctor12, doctor13];

// const AppointmentArr = [appo11, appo12, appo13];
// const hospital2 = new Hospital("Shibba", patientArr, doctorArr, AppointmentArr);
// hospital2.showByPatientID("315100");
// hospital2.addDR(doctor11);
// hospital2.addPatient(patient11);
// hospital2.addTurns(appo11);
// patient1.showDetails();
// doctor1.showDetails();
// patient11.updateMedicalHistory({ date: "2025-01-04", time: "18:00" });
// patient11.showDetails();

// const mar: object[] = [{"01-01-2025": {'12:00': 'canceled', '12:30': 'fixed', '13:00': 'planed'}}, {'02-02-2025': {'12:00': 'fixed', '12:30': 'planed', '13:00': 'cancled'}}];
// console.log(mar[0]."01-01-2025");

