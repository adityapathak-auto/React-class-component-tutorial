  import logo from './logo.svg';
  import './App.css';
  import Counter from './components/counter';
  import Clock from './components/clock';
  import { useState } from 'react';
  import ErrorBoundaryNotes from './components/Error Boundary/notes';
import ErrorBoundary from './components/Error Boundary/errorBoundary';
import Hero from './components/Error Boundary/hero';
import { React18 } from './components/React18 new Features/react 18';
import Test from './components/test';
import Es6New from './components/JavaScript Advance/Es6NewFeatures';


  function App() {
    const [show,setShow] = useState(false);
    const [showErr,setShowErr] = useState(false);
    const [showReact18,setShowReact18] = useState(false);
    const [showCounter,setShowCounter] = useState(false);

    const [showEs6,setShowEs6]=useState(false);


    return (
      <div className="App">

        <button onClick={()=>{
          setShowEs6(!showEs6);
        }} className="btn btn-info">Es6 New Features</button>
        {showEs6?<Es6New/>:""}


        <button onClick={()=>{
          setShowCounter(!showCounter)
        }} className="btn btn-dark" style={{"margin":" 0 10px"}}>{showCounter? "Hide Counter":"Show Counter"}</button>
        {showCounter? <Counter/>:""}
        
        <button onClick={()=>{
          setShow(!show)
        }}  className="btn btn-danger" >{show?"Hide":"Show"} Clock</button>
          {show?<Clock show={show}/>:null}

          <button onClick={()=>{
            setShowErr(!showErr)
          }} className="btn btn-warning" style={{"margin":"0 10px"}}>Show Error Boundary Notes</button>
        {showErr? <ErrorBoundaryNotes/>:""}

        {/* <ErrorBoundary>
          <Hero heroName="Batman"/>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName="tiger"/>
        </ErrorBoundary> */}

        <button onClick={()=>{
         setShowReact18(!showReact18)
        }} className="btn btn-primary">Show React18 changes notes</button>

        {showReact18?<React18/>:""}

        {/* <Test/> */}



      </div>
    );
  }

  export default App;
