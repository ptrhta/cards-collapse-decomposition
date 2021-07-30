import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';

function App() {
  return (
    <>
    <Card img='http://placehold.it/150'>        
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
    </Card>
    <Card>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </Card>
    </>
  );
}

export default App;