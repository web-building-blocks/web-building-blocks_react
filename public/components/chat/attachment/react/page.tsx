import React, { useState } from 'react';
import { Input } from "../../../../../styles/components/ui/input";
import { Card, CardContent, CardHeader } from "../../../../../styles/components/ui/card";
import { Button } from "../../../../../styles/components/ui/button";
import { useToast } from "../../../../../styles/components/ui/toast/use-toast";
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { Upload, SendHorizontal } from "lucide-react";


export function AttachmentChat() {
    const [messages, setMessages] = useState([
        { text: "Hi, how can I help you today?", type: "received" },
        { text: "Hey, I'm having trouble with my account.", type: "sent" },
        { text: "What seems to be the problem?", type: "received" },
        { text: "I can't log in.", type: "sent" },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [fileNames, setFileNames] = useState<string[]>([]);
    const { toast } = useToast();

    const handleSent = () => {
        toast({
            description:
                <div className="w-[340px] rounded-md bg-slate-950 p-4 text-black">
                    The Message is: {newMessage}
                </div>
        });
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        setMessages([...messages, { text: newMessage, type: "sent" }]);
        handleSent();
        setNewMessage("");
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            const fileNames = files.map(file => file.name);
            setFileNames(fileNames);
        } else {
            setFileNames([]);
        }
    };

    const messageStyles = {
        sent: { backgroundColor: 'black', color: 'white', borderRadius: '10px', padding: '12px', margin: '5px 0', wordBreak: 'break-word', maxWidth: '300px' },
        received: { backgroundColor: 'lightgrey', color: 'black', borderRadius: '10px', padding: '12px', margin: '5px 0', wordBreak: 'break-word', maxWidth: '300px' }
    };

    // This function simulates a click on the file input element
    const triggerFileInput = () => {
        document.getElementById('file-upload4').click();
    };

    const fileNamesString = fileNames.join(", ") || "No files chosen";

    return (
        <>
            <Toaster />
            <Card className="w-full max-w-md bg-white rounded-lg shadow-sm overflow-hidden" style={{ width: '500px' }}>
                <CardHeader className="bg-gray-100 p-4 flex justify-between items-left">
                    <div>
                        <div style={{ fontWeight: 'bold' }}>Sofia Davis</div>
                        <div style={{ fontSize: '0.875rem', color: '#999999' }}>m@example.com</div>
                    </div>
                </CardHeader>

                <CardContent className="p-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}>
                            <span style={messageStyles[message.type]}>
                                {message.text}
                            </span>
                        </div>
                    ))}
                    <form className="flex mt-2">
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            id="file-upload4"
                        />
                        <Button variant="destructive" style={{ marginRight: '8px', padding: '4px 6px' }} onClick={triggerFileInput}>
                            <span className="flex items-center gap-2">
                                <Upload className="file-upload-icon" />
                            </span>
                        </Button>

                        <Input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-grow border-gray-300 rounded-full p-2 mr-2"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />

                        <Button variant="destructive" disabled={!newMessage.trim()} style={{ marginRight: '8px', padding: '4px 6px' }} onClick={sendMessage}  >
                            <span className="flex items-center gap-2">
                                <SendHorizontal className="sent-icon" />
                            </span>
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}



export default AttachmentChat;
