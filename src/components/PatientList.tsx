import { IPatientInfo } from "../types/PatientInfo.interface";
import Patient from "./Patient";
import { FC } from "react";
import { ISharedProps } from "../types/SharedProps.interface";

export interface IPatientListProps extends Omit<ISharedProps, "patient"> {
  patients: IPatientInfo[];
}

const PatientList: FC<IPatientListProps> = ({
  patients,
  setPatient,
  setPatients,
}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      <h2 className="font-black text-3xl text-center mb-10">
        {patients?.length ? "Patient List" : "There are no patients"}
      </h2>

      {patients?.map((patient) => (
        <Patient
          key={patient.id}
          patient={patient}
          setPatient={setPatient}
          setPatients={setPatients}
        />
      ))}
    </div>
  );
};

export default PatientList;
