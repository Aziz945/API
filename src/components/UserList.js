import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import './style.css'
import Card from 'react-bootstrap/Card';





function  GetData () {
    const [data, setData] = useState("");

    
    const request = ( ) => {
        axios.get(
            "https://jsonplaceholder.typicode.com/users").then((response) => {console.log(response.data);
            setData(response.data);}).catch((error) => {
            console.log(error);
            });
            };

            useEffect (()=>{request();},[]);
    return (
        
        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',marginLeft:'70px'}}>
            
        {data ? ( 
        data.map(
        (data) => {return (
        <div className="data" key={data.id}>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/91-Db4L6xjL.png" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.username}</Card.Text>
        <Card.Text>{data.email}</Card.Text>
        
      </Card.Body>
    </Card>
        </div>);
        })) : (<h3>No data yet</h3>)}
        </div>
    )
}

export default GetData