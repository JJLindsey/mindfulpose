import { Form,  InputGroup, FormControl} from "react-bootstrap"

function Home() {
    return (
        <div className="mindful-bg" id='mindful-bg'>
            <Form className="bg-white rounded p-10 text-center shadow-md">
            <InputGroup>
                <InputGroup.Text>With textarea</InputGroup.Text>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>  
            </Form>
        </div>
    )
}

export default Home