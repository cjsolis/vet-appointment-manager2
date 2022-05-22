import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import { useState, useEffect } from "react";
import { IPatientInfo } from "./types/PatientInfo.interface";
import { getDefaultPatientInfo, initializePatients } from "./utils/helper";

function App() {
  const [patients, setPatients] = useState<Array<IPatientInfo>>(initializePatients);
  const [patient, setPatient] = useState<IPatientInfo>(getDefaultPatientInfo);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPatients={setPatients}
          setPatient={setPatient}
          patient={patient}
        />
        <PatientList
          setPatients={setPatients}
          setPatient={setPatient}
          patients={patients}
        />
      </div>
    </div>
  );
}

export default App;
