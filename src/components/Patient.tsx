import { FC } from "react";
import { ISharedProps } from "../types/SharedProps.interface";

const Patient: FC<ISharedProps> = ({ patient, setPatient, setPatients }) => {
  const { id, petName, ownerName, email, dischargeDate, symptoms } = patient;

  const handleEditPatient = () => {
    setPatient(patient);
  };

  const handleDeletePatient = () => {
    const confirmDelete = confirm("Do you want to delete this patient?");
    if (confirmDelete) {
      setPatients((prev) => {
        if (prev) {
          return prev.filter((previous) => previous.id !== id);
        }

        return [];
      });
    }
  };

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
      <div className="w-full flex justify-between">
        <button
          type="button"
          className="bg-indigo-600 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          onClick={handleEditPatient}
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-600 p-3 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-colors rounded-lg"
          onClick={handleDeletePatient}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
