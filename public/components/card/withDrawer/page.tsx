import React, { useState } from 'react';
import { Card, CardContent } from "../../../../styles/components/ui/card";
import { Button } from "../../../../styles/components/ui/button";

export function CardWithDrawer() {
    const [isHovered, setIsHovered] = useState(false);

    const imageUrl = 'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg';

    // Function to navigate to Sydney University's website
    const navigateToSydneyUni = () => {
        window.open('https://www.sydney.edu.au/', '_blank');
    };

    return (
        <Card
            className="relative w-80 h-96 overflow-hidden shadow-lg rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={imageUrl} alt="Image Models" className="w-full h-2/3 object-cover rounded-lg" />
            <CardContent
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    transition: 'transform 0.3s',
                    transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '1rem'
                }}
            >
                <h3 className="font-bold">University of Sydney</h3>
                <div className="flex items-center mt-4">
                    <img
                        src="https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>Logged in as Mariana</span>
                </div>
                <Button variant="secondary" className="mt-4 w-full" onClick={navigateToSydneyUni}>
                    Explore More
                </Button>
            </CardContent>
        </Card>
    );
}

export default CardWithDrawer;