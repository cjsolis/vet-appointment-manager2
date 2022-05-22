import { IPatientInfo } from "../types/PatientInfo.interface";

export const getDefaultPatientInfo = (): IPatientInfo => {
  return {
    id: "",
    petName: "",
    ownerName: "",
    email: "",
    dischargeDate: "",
    symptoms: "",
  };
};

export const formContainsEmptyValues = (patient: IPatientInfo): boolean => {
  return [
    patient?.petName,
    patient?.ownerName,
    patient?.email,
    patient?.dischargeDate,
    patient?.symptoms,
  ].includes("");
};

export const initializePatients = (): Array<IPatientInfo> => {
  return JSON.parse(localStorage.getItem("patients") ?? '[]') ?? []
}