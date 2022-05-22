import { IPatientInfo } from "../types/PatientInfo.interface";
import Patient from "./Patient";
import { FC } from "react";
export interface IPatientListProps {
  patients: IPatientInfo[] | undefined;
}

const PatientList: FC<IPatientListProps> = ({ patients }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      <h2 className="font-black text-3xl text-center mb-10">Patient List</h2>

      {patients?.map((patient) => (
        <Patient
          petName={patient.petName}
          ownerName={patient.ownerName}
          email={patient.email}
          dischargeDate={patient.dischargeDate}
          symptoms={patient.symptoms}
        />
      ))}
    </div>
  );
};

export default PatientList;
