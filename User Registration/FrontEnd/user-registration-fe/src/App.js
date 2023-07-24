import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div class="container">
  <hr/>
  <h1>User Registration</h1>
  <hr/>

  <form action="http://localhost:3000/book" method="POST">
      <div class="form-group">
          <label for="userId">userId</label>
          <input class="form-control" name="isbn"/>
      </div>

      <div class="form-group">
          <label for="userName">UserName</label>
          <input class="form-control" name="title"/>
      </div>
      <div class="form-group">
          <label for="password">password</label>
          <input class="form-control" name="title"/>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
  );
}

export default App;
