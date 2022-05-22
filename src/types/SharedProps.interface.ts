import { Dispatch, SetStateAction } from "react";
import { IPatientInfo } from "./PatientInfo.interface";

export interface ISharedProps {
  patient: IPatientInfo;
  setPatient: Dispatch<SetStateAction<IPatientInfo>>;
  setPatients: Dispatch<SetStateAction<IPatientInfo[]>>;
}