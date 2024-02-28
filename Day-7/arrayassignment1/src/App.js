import './App.css';
import React, { useState } from 'react';

function App() {
    const [numbers, setNumbers] = useState([10,121,100]);
    const [choice, setChoice] = useState("");
    const [number, setNumber] = useState("");
    const [index, setIndex] = useState("");
    const [numberFlag, setNumberFlag] = useState(false); // Initialized with false

    const handleChoice = (e) => {
      setChoice(e.target.value); 
    }

    const handleNumber = (e) => {
      setNumber(e.target.value);
    }

    const handleIndex = (e) => {
        setIndex(e.target.value);
    }

    const handleSubmit = () => {
        if (!choice) {
            alert("Please Enter the Choice");
            return;
        }
        if (parseInt(choice) > 8 || parseInt(choice) < 1 ) {
            alert("Choice cannot be smaller than 1 or greater than 8");
            setChoice("")
            return;
        }
        if (choice === "1") {
            if (!number) {
                alert("Please Enter the Number");
                return;
            }
            setNumbers([...numbers, parseInt(number, 10)]);
            setChoice("");
            setNumber("");
        } else if (choice === "2") {
            if (!number) {
                alert("Please Enter the Number");
                return;
            }
            const newNumbers = numbers.filter((num) => num !== parseInt(number, 10));
            setNumbers(newNumbers);
         
        } else if (choice === "3") {
            if (!index || !number) {
                alert("Please Enter the Index and Number");
                return;
            }
            const newArray = [...numbers];
            newArray.splice(index - 1, 1, parseInt(number, 10)); // Decrement index by 1
            setNumbers(newArray);
            
        } else if (choice === "4") {
            if (!number) {
                alert("Please Enter the Number");
                return;
            }
            setNumberFlag(numbers.includes(parseInt(number, 10))); // Convert number to integer
            alert("Number is not there")
            return

        }else if (choice === "6") {
            const newArray = [...numbers]
            newArray.sort()
            setNumbers(newArray)
        }else if (choice === "7") {
            setNumbers([])
        }
        setChoice("");
        setNumber("");
        setIndex("");
    }

    return (
        <div>
            <h3>Choices:</h3>
            <ol type="1">
                <li>Add</li>
                <li>Delete</li>
                <li>Update</li>
                <li>Search</li>
                <li>FetchAll</li>
                <li>Sort</li>
                <li>Exit</li>
            </ol>
            <span>Enter the choice: </span> <input type="number" value={choice} onChange={handleChoice} max="8"/><br/><br />
            <span>Enter the Number:</span> <input type="number" value={number} onChange={handleNumber}/> <br/><br/>
            <span>Enter the Index:</span> <input type="number" value={index} onChange={handleIndex}/> <br/><br/>
            <button onClick={handleSubmit}>Submit</button><br/><br/>
            {numberFlag && <p>Number is present</p>}
            {/* {numbers.map((num, numindex) => <h4 key={numindex}>{num}</h4>)} */}
            {numbers.join("   ")}
        </div>
    );
}

export default App;
