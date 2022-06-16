import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';

import axios from 'axios';

import MBIgen from './MBIgen';
import HeaderInfo from './Header_Info';

const MBIview = () => {

    const [text, setText] = useState('');
    const [valid, setValid] = useState('');

    function handleChange(event) {
        // on event change of input, setText to the value typed
        setText(event.target.value);
    }

    function validateVal(e) {
        // keep page from refreshing on submit
        e.preventDefault();
        const result = axios.get(`https://gen-val-mbi-api.herokuapp.com/validate_mbi/${text}`)
        .then(res => {
            setValid(res.data);
        })
        .catch(err => console.log(err));
        return result;
      }


  return (
    <div>
        <HeaderInfo />   
            <Form>
            <Form.Group className="mb-2" controlId="mbiValidator">
                <Form.Label>Check MBI Validity <b className={valid === 'True' ? 'mbi-valid' : 'mbi-invalid'}>{valid}</b> </Form.Label>
                    <Form.Control maxLength={11} minLength={11} onChange={handleChange} type="text" placeholder='Enter MBI...' />
                    <Form.Text className='text-muted'>To ensure input is correct, follow the MBI format above</Form.Text>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button  
                onClick={validateVal} 
                variant="primary" type="submit" 
                disabled={text.length < 11 ? true : false}>
                  Verify
             </Button>
            </div>
              <MBIgen />
        </Form>    
    </div>
  )
}

export default MBIview