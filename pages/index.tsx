import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";




const client = generateClient<Schema>();

export default function App() {
  const [genres, setGenres] = useState<Array<Schema["Genres"]["type"]>>([]);

  function listGenres() {
    client.models.Genres.observeQuery().subscribe({
      next: (data) => setGenres([...data.items]),
    });
  }



  useEffect(() => {
    listGenres();
  }, []);

  function createTodo() {
    client.models.Genres.create({
      name: window.prompt("Todo content"),
    });
  }

  return (
    <main>
      <h1>My Genes</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
