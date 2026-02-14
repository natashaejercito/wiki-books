import Card from "react-bootstrap/Card";
export default function PageHeader(props) {
  return (
    <>
      <Card className="bg-light mt-5">
        <Card.Body>{props.text}</Card.Body>
      </Card>
      <br />
    </>
  );
}
