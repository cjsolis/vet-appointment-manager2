import Patient from "./Patient";

function PatientList() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      <h2 className="font-black text-3xl text-center mb-10">Patient List</h2>

      <Patient petName={"Test"} ownerName={"Test"} email={"Test"} dischargeDate={"Test"} symptoms={"Test"} />

      <Patient petName={"Test"} ownerName={"Test"} email={"Test"} dischargeDate={"Test"} symptoms={"Test"} />
      <Patient petName={"Test"} ownerName={"Test"} email={"Test"} dischargeDate={"Test"} symptoms={"Test"} />
      <Patient petName={"Test"} ownerName={"Test"} email={"Test"} dischargeDate={"Test"} symptoms={"Test"} />
      <Patient petName={"Test"} ownerName={"Test"} email={"Test"} dischargeDate={"Test"} symptoms={"Test"} />
      <Patient petName={"Test"} ownerName={"Test"} email={"Test"} dischargeDate={"Test"} symptoms={"Test"} />
      <Patient petName={"Test"} ownerName={"Test"} email={"Test"} dischargeDate={"Test"} symptoms={"Test"} />
      <Patient petName={"Test"} ownerName={"Test"} email={"Test"} dischargeDate={"Test"} symptoms={"Test"} />
    </div>
  );
}

export default PatientList;
