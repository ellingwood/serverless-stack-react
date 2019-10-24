import React from "react";
import { Grid, Row, Col, Jumbotron } from "react-bootstrap";
import "./About.css";

export default function About() {
    return (
        <div>
            <Jumbotron fluid>
                <h1>About</h1>
                <p>This is the about page</p>
            </Jumbotron>
            <div>
            <Grid bsClass="grid" fluid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <h4>Test h4 Header</h4>
                    </Col>
                </Row>
            </Grid>
            </div>
        </div>
    )
}