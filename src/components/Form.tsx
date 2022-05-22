import { useState, FC, createRef, useEffect } from "react";
import { IPatientInfo } from "../types/PatientInfo.interface";
import "../styles/styles.css";
import {
  formContainsEmptyValues,
  getDefaultPatientInfo,
} from "../utils/helper";
import Error from "./Error";
import { ISharedProps } from "../types/SharedProps.interface";

const Form: FC<ISharedProps> = ({
  setPatients,
  setPatient: resetPatientToUpdate,
  patient: patientToUpdate,
}) => {
  const [patient, setPatient] = useState<IPatientInfo>(getDefaultPatientInfo);
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(false);

  const formRef = createRef<HTMLFormElement>();

  useEffect(() => {
    if (Object.values(patientToUpdate).toString() !== ",,,,,") {
      setEdit(true);
      setPatient(patientToUpdate);
    }
  }, [patientToUpdate]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formContainsEmptyValues(patient)) {
      setError(true);
      return;
    }

    setError(false);

    if (patient.id) {
      setPatients((prev) => {
        if (prev) {
          const filtered = prev.filter(
            (previous) => previous.id !== patient.id
          );
          return [...filtered, patient];
        } else {
          return [patient];
        }
      });
      resetPatientToUpdate(getDefaultPatientInfo);
    } else {
      setEdit(false);
      patient.id = generateRandomId();
      setPatients((prev) => (prev ? [...prev, patient] : [patient]));
    }

    handleClearForm();
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    const key: keyof IPatientInfo = e.target.id;
    const value: string = e.target.value;
    const updatedField = { [key]: value };
    setPatient({ ...patient, ...updatedField });
  };

  const handleClearForm = () => {
    setPatient(getDefaultPatientInfo);
    setEdit(false);
    formRef.current?.reset();
  };

  const generateRandomId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center mb-10">
        Patient Follow-up
      </h2>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="mb-5">
          <label
            htmlFor="petName"
            className="block text-gray-700 uppercase font-bold"
          >
            <span className="color-red">*</span> Pet name
          </label>
          <input
            id="petName"
            type="text"
            placeholder="Pet name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            defaultValue={patient.petName || ""}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="ownerName"
            className="block text-gray-700 uppercase font-bold"
          >
            <span className="color-red">*</span> Owner name
          </label>
          <input
            id="ownerName"
            type="text"
            placeholder="Owner name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            defaultValue={patient.ownerName || ""}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            <span className="color-red">*</span> Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Contact email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            defaultValue={patient.email || ""}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dischargeDate"
            className="block text-gray-700 uppercase font-bold"
          >
            <span className="color-red">*</span> Discharge date
          </label>
          <input
            id="dischargeDate"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            defaultValue={patient.dischargeDate || ""}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dischargeDate"
            className="block text-gray-700 uppercase font-bold"
          >
            <span className="color-red">*</span> Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={handleChange}
            defaultValue={patient.symptoms || ""}
          />
        </div>
        {error && <Error message="All fields are required" />}
        <div className="w-full flex justify-between">
          <input
            type="button"
            className="p-3 uppercase font-bold cursor-pointer"
            onClick={handleClearForm}
            value="Clear"
          />
          <input
            type="submit"
            className="bg-indigo-600 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
            value={edit ? "Edit Patient" : "Add Patient"}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
