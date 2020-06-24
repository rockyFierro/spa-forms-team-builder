import React from "react";
import Card from './components/Card';
import Form from './components/Form';

export default function App () {
    return (
        <>
            <div className="header">
                Team Lambda
            </div>
            <Form/>
            <div className="container">
                <Card/>
            </div>

        </>
 )
}