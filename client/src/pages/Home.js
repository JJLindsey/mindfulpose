import { Form, Container, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return (
        
        <Container className="mindful-home fluid p-3 mx-auto" id='background-home'>
            <Form className="home-card bg-white">
                <Form.Group className="mb-3" id="home-form" controlId="formBasicPassword">
                <Form.Text className="text-center">
                Do one mindful thing today. 
                </Form.Text>
                    <Form.Label> Type the word Mindfulness in message box. </Form.Label>
                    <Form.Control type="text" placeholder="type word to clear the fog" />
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form.Group>
                
            </Form>
        </Container>
    
    )
}

export default Home