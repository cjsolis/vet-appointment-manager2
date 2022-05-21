import { useState } from "react";
import { IPatientInfo } from "../types/PatientInfo.interface";
import "../styles/styles.css";

function Form() {
  const [patient, setPatient] = useState<Partial<IPatientInfo>>({
    petName: "",
    ownerName: "",
    email: "",
    dischargeDate: "",
    symptoms: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();

    if (
      [
        patient?.petName,
        patient?.ownerName,
        patient?.email,
        patient?.dischargeDate,
        patient?.symptoms,
      ].includes("")
    ) {
      setError(true);
    } else {
      setError(false);
    }

    console.log(patient);
  };

  const handleChange = (value: {}) => {
    setPatient({ ...patient, ...value });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center mb-10">
        Patient Follow-up
      </h2>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
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
            onChange={(e) => {
              handleChange({ petName: e.target.value });
            }}
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
            onChange={(e) => {
              handleChange({ ownerName: e.target.value });
            }}
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
            onChange={(e) => {
              handleChange({ email: e.target.value });
            }}
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
            onChange={(e) => {
              handleChange({ dischargeDate: e.target.value });
            }}
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
            onChange={(e) => {
              handleChange({ symptoms: e.target.value });
            }}
          />
        </div>
        {error ? (
          <div className="mb-5 font-bold color-red">All fields are required</div>
        ) : (
          ""
        )}
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Add Patient"
        />
      </form>
    </div>
  );
}

export default Form;
