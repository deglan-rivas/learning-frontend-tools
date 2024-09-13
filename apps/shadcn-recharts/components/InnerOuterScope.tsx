"use client"
import { useState } from "react";

const outsideVariable = 0; // Se define una sola vez al cargar la app
// let outsideVariable = 0; // Se define una sola vez al cargar la app

export default function InnerOuterScope() {
  const [counter, setCounter] = useState(0); // El estado cambia en cada render
  let insideVariable = 0; // Se define en cada render

  // outsideVariable += 1; // Aumenta una vez cuando se carga la app
  insideVariable += 1; // Se reinicia y aumenta en cada render

  return (
    <div>
      <p>Outside variable: {outsideVariable}</p>
      <p>Inside variable: {insideVariable}</p>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}
