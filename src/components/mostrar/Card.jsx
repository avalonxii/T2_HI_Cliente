
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function Carta({u}) {
  return (
    <Grid.Container gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>{u.nombre}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              {u.dudas}
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="space-between">
              <Button size="sm" light>
                {u.numero}
              </Button>
              <Button size="sm">{u.email}</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
