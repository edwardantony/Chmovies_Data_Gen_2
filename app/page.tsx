// "use client";

// import { useState, useEffect } from "react";
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";
// import "./../app/app.css";
// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
// //import "@aws-amplify/ui-react/styles.css";

// Amplify.configure(outputs);

// const client = generateClient<Schema>();

// export default function App() {
//   const [genres, setGenres] = useState<Array<Schema["Genre"]["type"]>>([]);

//   function listTodos() {
//     client.models.Genre.observeQuery().subscribe({
//       next: (data) => setGenres([...data.items]),
//     });
//   }

//   useEffect(() => {
//     listTodos();
//   }, []);

//   function createTodo() {
//     client.models.Genre.create({
//       name: window.prompt("Genre Name"),
//     });
//   }

//   return (
//     <main>
//       <h1>My todos</h1>
//       <button onClick={createTodo}>+ new</button>
//       <ul>
//         {genres.map((genre) => (
//           <li key={genre.id}>{genre?.name}</li>
//         ))}
//       </ul>
//       <div>
//         🥳 App successfully hosted. Try creating a new todo.
//         <br />
//         <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
//           Review next steps of this tutorial.
//         </a>
//       </div>
//     </main>
//   );
// }


// app/page.tsx
import { redirect } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';

export default async function HomePage() {
  // Server-side authentication check
  try {
    await getCurrentUser();
    // If authenticated, redirect to dashboard
    redirect('/dashboard');
  } catch {
    // If not authenticated, redirect to login
    redirect('/login');
  }
}