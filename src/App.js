import { useState } from "react";
import { myComponent } from "./component/myComponent";
const 
function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Chayanin Suatap 61063110",
      gender: "male",
      age: "50"
    }
  ];
  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>620610793</p>
        <button>-</button>
        <button>reset</button>
        <button>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Chayanin Suatap 61063110</td>
            <td>male</td>
            <td>25</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Alice</td>
            <td>male</td>
            <td>20</td>
          </tr>
          {myCourses.map(item => {
          return <myComponent name ={item.name} grd = {item.gender} crd ={item.age}  />
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
