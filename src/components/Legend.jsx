import { Card, Badge } from "react-bootstrap";

var Legend = function () {
    return (
        <Card className="mt-3 mb-3">
            <Card.Body>
                <Card.Title>Приоритеты элементов ToDo</Card.Title>
                <Card.Text className="col-12 me-auto">
                    <Badge bg="light" text="dark" className="p-2 text-uppercase border border-secondary ">Обычный</Badge>
                    <Badge bg="warning" text="dark" className="mx-2 p-2 text-uppercase border border-secondary ">Важный</Badge>
                    <Badge bg="danger" text="light" className="p-2 text-uppercase border border-secondary ">Критичный</Badge>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Legend