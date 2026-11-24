import { useState } from "react";
import "./App.css";

const patients = [
  {
    id: "PT-1001",
    name: "Arjun Reddy",
    doctor: "Dr. Priya Reddy",
    time: "09:00 AM",
    department: "Cardiology",
    status: "Checked in",
  },
  {
    id: "PT-1002",
    name: "Sai Lakshmi",
    doctor: "Dr. Rahul Varma",
    time: "09:30 AM",
    department: "Dermatology",
    status: "Confirmed",
  },
  {
    id: "PT-1003",
    name: "Venkat Krishna",
    doctor: "Dr. Priya Reddy",
    time: "10:00 AM",
    department: "Cardiology",
    status: "Confirmed",
  },
  {
    id: "PT-1004",
    name: "Deepti Naidu",
    doctor: "Dr. Arjun Rao",
    time: "10:30 AM",
    department: "Neurology",
    status: "In consultation",
  },
  {
    id: "PT-1005",
    name: "Nikhil Kumar",
    doctor: "Dr. Sneha Devi",
    time: "11:00 AM",
    department: "Pediatrics",
    status: "Confirmed",
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((patient) => {
    const searchText = search.toLowerCase();

    return (
      patient.name.toLowerCase().includes(searchText) ||
      patient.id.toLowerCase().includes(searchText) ||
      patient.doctor.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-icon">✚</span>
          Meridian Health
        </a>
        <span className="admin-name">Clinic administrator</span>
      </header>

      <section className="content">
        <div className="heading">
          <div>
            <p className="eyebrow">HOSPITAL WORKSPACE</p>
            <h1>Patient appointments</h1>
            <p className="subtitle">
              View patient details, assigned doctors, and appointment times.
            </p>
          </div>
          <span className="today-label">Today's schedule</span>
        </div>

        <section className="summary">
          <article className="summary-card">
            <span>Total patients</span>
            <strong>1,284</strong>
            <small>Registered in the hospital</small>
          </article>

          <article className="summary-card">
            <span>Appointments today</span>
            <strong>{patients.length}</strong>
            <small>Scheduled for today</small>
          </article>

          <article className="summary-card">
            <span>Departments</span>
            <strong>4</strong>
            <small>Doctors across departments</small>
          </article>
        </section>

        <section className="patient-section">
          <div className="section-heading">
            <div>
              <h2>Patient information</h2>
              <p>Today's appointments and assigned doctors</p>
            </div>

            <input
              className="search"
              type="search"
              placeholder="Search patient or doctor..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient name</th>
                  <th>Doctor assigned</th>
                  <th>Department</th>
                  <th>Appointment time</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="patient-id">{patient.id}</td>
                    <td className="patient-name">{patient.name}</td>
                    <td>{patient.doctor}</td>
                    <td>{patient.department}</td>
                    <td className="time">{patient.time}</td>
                    <td>
                      <span
                        className={`status ${patient.status
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                      >
                        {patient.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPatients.length === 0 && (
              <p className="empty-message">No matching patients found.</p>
            )}
          </div>
        </section>

        <footer>Meridian Health · Patient information system</footer>
      </section>
    </main>
  );
}

export default App;