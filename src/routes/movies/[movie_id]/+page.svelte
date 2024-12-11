<script>
    import { movies } from '../data';

    let { data } = $props();
</script>

<a href="/movies" class="back-link">Back</a>

<h1>{data.movie.title}</h1>

<div class="movie-details">
    <img src={data.movie.poster} alt={data.movie.title} class="movie-poster" />
    <div>
        <p><strong>Jahr:{data.movie.year}</p>
        <p><strong>Dauer:{data.movie.length}</p>
        <h2>Cast:</h2>
        <ul>
            {#each data.movie.actors as actor}
                <li>{actor}</li>
            {/each}
        </ul>
        <form method="POST" action="?/delete">
            <input name="id" type="hidden" value={data.movie._id}>
            <button class="btn btn-danger">Delete Movie</button>
        </form>
    </div>
</div>

<style>
    .movie-details {
        display: flex;
        gap: 1.5rem;
    }

    .movie-poster {
        max-width: 200px;
    }
</style>