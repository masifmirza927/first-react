import logo from './logo.svg';
import './App.css'
// import FirstComp from "./FirstComp"
// import ThirdComp from './ThirdComp';
// import DrillImage from "./images/drill2.jpg";

function App() {

  const students = [
    {
      name: "John Doe",
      city: "New York",
      country: "USA",
      total: 90
    },
    {
      name: "Jane Smith",
      city: "London",
      country: "UK",
      total: 85
    },
    {
      name: "Rahul Patel",
      city: "Mumbai",
      country: "India",
      total: 92
    }
  ];



  return (
    <div className="App">
      <div className='container'>
        <h1 className='my-3'>Students</h1>
        <div className='row'>
          {
            students.map(function (elem) {
              return (
                <>
                  <div className='col-md-4'>
                    <div className="card">
                      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{elem.name}</h5>
                        <p className="card-text">City: {elem.city}</p>
                        <p className="card-text">Country: {elem.country}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>

                </>
              )
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
