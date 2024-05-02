
"use client"

import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { ToastAction } from "../../../../../styles/components/ui/toast/toast"

export function ToastWithAction() {
    const { toast } = useToast()
    const FirstButtonText = "Bottom Right";
    const SecondButtonText = "Top Right";


    return (
        <>
            <Toaster />

            <Button
                variant="outline"
                onClick={() => {

                    // Add Interaction
                    console.log(FirstButtonText, "has clicked");

                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                        position: 'bottom-right'
                    })
                }}
            >
                {FirstButtonText}
            </Button>

            <div style={{ margin: '10px' }} /> 

            <Button
                variant="outline"
                onClick={() => {

                    // Add Interaction
                    console.log(SecondButtonText, "has clicked");

                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                        position: 'top-right'
                    })
                }}
            >
                {SecondButtonText}
            </Button>
        </>

    )
}

export default ToastWithAction;