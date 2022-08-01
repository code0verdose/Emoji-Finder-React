import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {useState} from "react";


const res = fetch('https://emoji.ymatuhin.workers.dev/', {});
const promise = res.then(res => res.json())


function App() {

    const [newData, setData] = useState([])

    if (newData.length === 0) promise.then(data => setData(data))


    return (
        <>
            <Header/>
            <Main newData={newData}/>
            <Footer/>
        </>
    )
}

export default App;
