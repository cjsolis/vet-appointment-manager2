import { FC } from "react";
import { IPatientInfo } from "../types/PatientInfo.interface";

const Patient: FC<IPatientInfo> = ({
  petName,
  ownerName,
  email,
  dischargeDate,
  symptoms,
}) => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet Name: <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner Name: <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Contact email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Discharge date:{" "}
        <span className="font-normal normal-case">{dischargeDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: <span className="font-normal normal-case">{symptoms}</span>
      </p>
    </div>
  );
};

export default Patient;
