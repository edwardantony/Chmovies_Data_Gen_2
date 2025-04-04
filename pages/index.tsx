import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

export default function GenreManager() {
  const [genres, setGenres] = useState<Schema["Genre"]["type"][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const subscription = client.models.Genre.observeQuery().subscribe({
      next: (data) => {
        setGenres([...data.items]);
        setIsLoading(false);
      },
      error: (err) => {
        setError("Failed to fetch genres");
        console.error("Subscription error:", err);
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const createGenre = async () => {
    try {
      const name = window.prompt("Enter Genre Name:");
      if (!name) return; // User cancelled

      const sortOrderInput = window.prompt("Enter Sort Order (default: 0):");
      const sortOrder = sortOrderInput ? parseInt(sortOrderInput) : 0;

      await client.models.Genre.create({
        name,
        sortOrder: isNaN(sortOrder) ? 0 : sortOrder
      });
    } catch (err) {
      setError("Failed to create genre");
      console.error("Create error:", err);
    }
  };

  const deleteGenre = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this genre?")) return;
    
    try {
      await client.models.Genre.delete({ id });
    } catch (err) {
      setError("Failed to delete genre");
      console.error("Delete error:", err);
    }
  };

  if (isLoading) return <div>Loading genres...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main className="genre-manager">
      <h1>Genre Manager</h1>
      <button onClick={createGenre} className="add-button">
        + Add New Genre
      </button>
      
      {genres.length === 0 ? (
        <p>No genres found. Create one!</p>
      ) : (
        <ul className="genre-list">
          {genres
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
            .map((genre) => (
              <li key={genre.id} className="genre-item">
                <span>{genre.name}</span>
                <span className="sort-order">Order: {genre.sortOrder || 0}</span>
                <button 
                  onClick={() => deleteGenre(genre.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      )}
    </main>
  );
}