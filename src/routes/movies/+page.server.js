import db from "$lib/db";

export async function load() {
    return {
        movies: await db.getMovies()
    }
}

