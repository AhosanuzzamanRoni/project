import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'

const todoTitle = 'call familly';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();
const headingStyle = {
    backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '5px'
}

function Card() {
    return
    (<div className='cardStyle'>
        <div>



            <h1 style={{ backgroundColor: 'red', color: 'white', textAlign: 'center' }}>Todo App </h1>
            <h3 >{todoTitle}</h3>
            <p >{dateName + "/" + monthName + '/' + currentYear}</p>
            <p style={headingStyle}>i love bangladesh</p>
            <p className='headingStyle'>i love birds</p>
            <h5 className='heading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo saepe ad numquam dolore. Eveniet animi temporibus, id ut dolorem tempora fuga iure tenetur eum perferendis iusto dignissimos, est, aliquam ipsum!</h5>
        </div>
    </div>)
}



ReactDOM.render(
    <Card />,
    <Card />,
    <Card />,


    document.getElementById('root')
);

