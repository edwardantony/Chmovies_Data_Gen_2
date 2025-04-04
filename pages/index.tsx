import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";




const client = generateClient<Schema>();

export default function App() {
  const [AudioTracks, setAudioTracks] = useState<Array<Schema["AudioTrack"]["type"]>>([]);

  function listAudioTracks() {
    client.models.AudioTrack.observeQuery().subscribe({
      next: (data) => setAudioTracks([...data.items]),
    });
  }



  useEffect(() => {
    listAudioTracks();
  }, []);

  // function createTodo() {
  //   client.models.AudioTrack.create({
  //     language: window.prompt("Todo content"),
  //   });
  // }

  return (
    <main>
      <h1>My Content</h1>
      {/* <button onClick={createTodo}>+ new</button> */}
      <ul>
        {AudioTracks.map((AudioTrack) => (
          <li key={AudioTrack.id}>{AudioTrack.language}</li>
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
