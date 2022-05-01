import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function EmailVerification(){   

    return(
        <div>
            <Form>
                <FormGroup>
                    <Label for="EmailId">
                        Email
                    </Label>
                    <Input
                        id="EmailId"
                        name="email"
                        placeholder="john@gmail.com"
                        type="email"
                    />
                </FormGroup>
                <Button>
                    Verify Email
                </Button>
            </Form>
        </div>
    );


}

export default EmailVerification;