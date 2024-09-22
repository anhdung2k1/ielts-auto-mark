import { TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const WritingSection = () => {
    const [writingText, setWritingText] = useState('');

    const handleInputChange = (event) => {
        setWritingText(event.target.value);
    };

    const handleSubmit = () => {
        // Handle the submission logic here
        console.log('Submitted writing:', writingText);
    };

    return (
        <div className="w-full h-full p-6 bg-gray-100 flex justify-center items-center">
            <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col h-full">
                <Typography variant="h5" gutterBottom>
                    IELTS Writing Assistant
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Please enter your writing section below:
                </Typography>
                <div className="flex flex-1 space-x-6 mt-4">
                    {/* Writing Input Section */}
                    <div className="flex-1 flex flex-col">
                        <TextField
                            label="Your writing..."
                            multiline
                            variant="outlined"
                            fullWidth
                            value={writingText}
                            onChange={handleInputChange}
                            className="flex-grow"
                            InputProps={{
                                style: {
                                    height: '100%',
                                    textAlign: 'left',        // Ensures text aligns left
                                    padding: 0,               // Removes padding
                                    display: 'flex',
                                    alignItems: 'flex-start',  // Ensures text starts at the top
                                },
                            }}
                            inputProps={{
                                style: {
                                    padding: '10px',          // Add necessary padding for text
                                    textAlign: 'left',         // Align text to the left
                                }
                            }}
                        />
                    </div>
                    {/* Writing Criteria Section */}
                    <div className="w-1/3 flex flex-col bg-gray-50 p-4 rounded-lg border border-gray-300">
                        <Typography variant="h6">
                            Writing Criteria
                        </Typography>
                        <Typography variant="body2">
                            {/* Add your criteria content here */}
                            - Task Response
                            <br />
                            - Coherence and Cohesion
                            <br />
                            - Lexical Resource
                            <br />
                            - Grammatical Range and Accuracy
                        </Typography>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-700 transition-colors"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WritingSection;
