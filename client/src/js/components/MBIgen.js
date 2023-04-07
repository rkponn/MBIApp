import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const MBIgen = () => {

    const [generated, setGenerated] = useState('');

    const fetchData = async () => {
        // Generate MBI
        try {
            const response = await axios.get("https://gen-val-mbi-api.herokuapp.com/mbi/");
            const {data} = response;
            setGenerated(data);
        } catch (error) {
            throw error;
        }
    }
    
  return (

        <div className="d-grid py-1">
            <Button variant="success" onClick={fetchData}>Generate MBI</Button>
            <Form.Text className='text-muted'>Generated MBI will display below.</Form.Text>
            <h1><b>{generated}</b></h1>
        </div>

  )
}

export default MBIgen
