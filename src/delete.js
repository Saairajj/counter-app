<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

{this.state.count !==0 &&  <table>
  <tr>
    <th>Title</th>
    <th>Genre</th>
    <th>Stock</th>
    <th>Rate</th>
  </tr>
</table>}


{ this.state.movies.map((movie) => {
  return (
  <tr>
    <td>{movie.title}</td>
    <td>{movie.genre}</td>
    <td>{movie.numberInStock}</td>
    <td>{movie.dailyRentalRate}</td>
  </tr>
  ) 
})}