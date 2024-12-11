<script>
    let {form} = $props();
</script>

<a href="/movies">Back</a>

<h1>Add a new Movie</h1>

<form action="?/create" method="post">
    <div class="mb-3">
        <label for="title" class="form-label">Name</label>
        <input type="text" class="form-control" id="title" name="title" required>
    </div>
    <div class="mb-3">
        <label for="year" class="form-label">Year</label>
        <input type="number" class="form-control" id="year" name="year" required>
    </div>
    <div class="mb-3">
        <label for="length" class="form-label">Length</label>
        <input type="number" class="form-control" id="length" name="length" required>
    </div>
    <button type="submit" class="btn btn-primary">Add Movie</button>
</form>

{#if form?.success}
<p>Movie added successfully</p>
{/if}
