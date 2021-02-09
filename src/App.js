import { useState } from "react";
function App() {
  const persons = [
    {
      name: "Theeramet Metha 620610793",
      gender: "male",
      age: "20"
    },
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  const [id, setID] = useState(620610793);
  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{id}</p>
        <button
          onClick={() => {
            setID(id - 1);
          }}
        >
          -
        </button>
        <button onClick={() => setID(620610793)}>reset</button>
        <button
          onClick={() => {
            setID(id + 1);
          }}
        >
          +
        </button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      {persons.map((person) => {
        return (
          <table class="table is-bordered mb-3">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>{person.name}</td>
                <td>{person.gender}</td>
                <td>{person.age}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
