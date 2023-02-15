import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function Carta({ usuario }) {
  return (
    <Grid sm={12} md={3}>
      <Card css={{ mw: "330px" }}>
        <Card.Header>
          <Text b>{usuario.nombre}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>{usuario.dudas}</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="space-between">
            <Button size="sm">
              {usuario.tlf}
            </Button>
            <Button size="sm">{usuario.email}</Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
