"use strict";
class Person {
    firstName;
    lastName;
    age;
    address;
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
}
class Patient extends Person {
    patientId;
    phoneNumber;
    emergencyContact;
    medicalHistory;
    constructor(firstName, lastName, patientId, age, address, phoneNumber, emergencyContact, medicalHistory) {
        super(firstName, lastName, age, address);
        this.patientId = patientId;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    }
    showMyDetails() {
        console.log(`Dear patient, here are your details:`, this);
    }
    showDetails() {
        this.showMyDetails();
    }
    updateMedicalHistory(turn) {
        this.medicalHistory.push(turn);
    }
}
class Doctor extends Person {
    doctorId;
    specialization;
    constructor(firstName, lastName, doctorId, specialization, age, address) {
        super(firstName, lastName, age, address);
        this.firstName = firstName;
        this.lastName = lastName;
        this.doctorId = doctorId;
        this.specialization = specialization;
    }
    showMyDetails() {
        console.log(`Dear doctor, here are your details:`, this);
    }
    showDetails() {
        this.showMyDetails;
    }
}
class Appointment {
    patient;
    doctor;
    date;
    time;
    constructor(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }
    showTurnDetails() {
        console.log(`Dear Department manager, here are your details:`, this);
    }
}
class Hospital {
    name;
    patientsArray;
    doctorsArray;
    turnsArray;
    constructor(name, patientsArray, doctorsArray, turnsArray) {
        this.name = name;
        this.patientsArray = patientsArray;
        this.doctorsArray = doctorsArray;
        this.turnsArray = turnsArray;
    }
    addingPatient(arg) {
        this.patientsArray.push();
    }
    addingDoctor(arg) {
        this.patientsArray.push();
    }
    addingturn(arg) {
        this.turnsArray.push();
    }
    showTurnsDetails() {
        console.log(this.turnsArray);
    }
    showByDRID(id) {
        for (let i = 0; i < this.turnsArray.length; i++) {
            if (this.turnsArray[i].doctor.doctorId == id) {
                console.log(this.turnsArray[i].date, this.turnsArray[i].time);
                break;
            }
        }
    }
    showByPatientID(id) {
        for (let i = 0; i < this.turnsArray.length; i++) {
            if (this.turnsArray[i].patient.patientId == id) {
                console.log(this.turnsArray[i].date, this.turnsArray[i].time);
                break;
            }
        }
    }
    addDR(doc) {
        this.doctorsArray.push(doc);
        console.log(this.doctorsArray);
    }
    addPatient(pat) {
        this.patientsArray.push(pat);
        console.log(this.patientsArray);
    }
    addTurns(turn) {
        this.turnsArray.push(turn);
        console.log(this.turnsArray);
    }
}
const patient1 = new Patient("ari", "dvi", "P12345", "21", "hilel 3", "050212541", "dad: 03-9098765", [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
]);
const patient2 = new Patient("mosh", "rot", "P67890", "22", "hilel 3", "050212541", "dad: 03-9098765", [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
]);
const patient3 = new Patient("or", "dev", "P24870", "23", "hilel 3", "050212541", "dad: 03-9098765", [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
]);
const doctor1 = new Doctor("doc_avi", "tdi", "D98765", "surgical", "31", "hilel 3");
const doctor2 = new Doctor("doc_ben", "yos", "D54321", "orthopedics", "32", "hilel 3");
const doctor3 = new Doctor("doc_david", "git", "D98321", "parturient", "33", "hilel 3");
const appointment1 = new Appointment(patient1, doctor1, "2023-09-01", "10:00");
const appointment2 = new Appointment(patient2, doctor2, "2023-27-08", "15:30");
const patientRecords = [patient1, patient2];
const doctors = [doctor1, doctor2];
const appointments = [appointment1, appointment2];
const hospital = new Hospital("Hadassah", patientRecords, doctors, appointments);
hospital.addingPatient(patient3);
hospital.addingDoctor(doctor3);
const newAppointments = new Appointment(patient3, doctor3, "2023-27-08", "12:30");
hospital.addingturn(newAppointments);
hospital.showTurnsDetails();
hospital.showByDRID("D54321");
hospital.showByPatientID("P12345");
const patient11 = new Patient("Zion", "Baruch", "315179", "21", "hilel 3", "050212541", "dad: 03-9098765", [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
]);
const patient12 = new Patient("Asi", "Israelof", "315168", "21", "hilel 3", "050212541", "dad: 03-9098765", [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
]);
const patient13 = new Patient("Shalom", "Michaelshvilly", "315100", "21", "hilel 3", "050212541", "dad: 03-9098765", [
    { date: "2023-09-01", time: "10:00" },
    { date: "2023-27-08", time: "15:30" },
]);
const doctor11 = new Doctor("Tomer", "kapoon", "20678", "orthopedics", "21", "hilel 3");
const doctor12 = new Doctor("Daniel", "Gal", "20694", "geriatrics", "21", "hilel 3");
const doctor13 = new Doctor("Oz", "Zehavy", "20631", "psychiatry", "21", "hilel 3");
const appo11 = new Appointment(patient11, doctor11, "11-08-2024", "11:00");
const appo12 = new Appointment(patient12, doctor12, "12-09-2024", "12:15");
const appo13 = new Appointment(patient13, doctor13, "13-10-2024", "13:45");
const patientArr = [patient11, patient12, patient13];
const doctorArr = [doctor11, doctor12, doctor13];
const AppointmentArr = [appo11, appo12, appo13];
const hospital2 = new Hospital("Shibba", patientArr, doctorArr, AppointmentArr);
hospital2.showByPatientID("315100");
hospital2.addDR(doctor11);
hospital2.addPatient(patient11);
hospital2.addTurns(appo11);
patient1.showDetails();
doctor1.showDetails();
patient11.updateMedicalHistory({ date: "2025-01-04", time: "18:00" });
patient11.showDetails();
