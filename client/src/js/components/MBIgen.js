import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const MBIgen = () => {

    const [generated, setGenerated] = useState('');

    function fetchData() {
        // Generate MBI
        axios.get("generate_mbi/")
        .then(response => {
            const {data} = response;
            setGenerated(data);
            console.log(generated);
        })
        .catch(e => console.log(e))
    }
    
  return (

        <div className="d-grid py-1">
            <Button variant="success" onClick={fetchData}>Generate Valid MBI</Button>
            <Form.Text className='text-muted'>Generated MBI will display below.</Form.Text>
            <h1><b>{generated}</b></h1>
        </div>

  )
}

export default MBIgen

