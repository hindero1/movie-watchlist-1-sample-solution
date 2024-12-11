
<script>
  export let data; // Daten aus der `load`-Funktion
  import MovieCard from "$lib/components/MovieCard.svelte";
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>

<a href="/movies/create" class="btn btn-primary">Film hinzufügen</a>


<div class="row">
  {#each data.movies as movie} <!-- Verwende `data.movies` -->
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard movie={movie}></MovieCard>
    </div>
  {/each}
</div>

<style>
  a {
    margin-bottom: 1em;
  } 
</style>
