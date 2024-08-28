import React from "react";
import { Container, Title, Accordion, Text, List, Anchor } from "@mantine/core";

const Questions = [
  {
    title: "C'est quoi Positiv Action",
    content:
      "JSON Crack is a data visualization app capable of visualizing data formats such as JSON, YAML, XML, CSV and more, into interactive graphs. It helps you to understand, analyze and debug your data easily. JSON Crack is designed for developers, data analysts, and anyone who works with structured data formats. It's also helpful for creating documentation and presentations for your teams/customers.",
  },
  
  {
    title: "What are the advantages of the premium plan?",
    content: (
      <>
        The key features are:
        <List mt="lg">
          <List.Item>Expanded support for larger datasets</List.Item>
          <List.Item>Compare data on graphs</List.Item>
        </List>
        <Text mt="sm" inherit>
          You may visit the <Anchor href="#pricing">pricing page</Anchor> for more details.
        </Text>
      </>
    ),
  },
];

 const Faqs = () => {
  return (
    <Container id="faq" component="section">
      <Title
        c="black"
        order={2}
        fz={{
          sm: 32,
          md: 42,
        }}
        fw={600}
        mt={150}
        mb={60}
        style={{ textAlign: "center" }}
      >
        Question Fréquement Posées
      </Title>
      <Accordion
        variant="separated"
        styles={{
          panel: {
            background: "#f9f9f9",
            color: "#1d1d1d",
          },
          label: {
            color: "#1d1d1d",
            fontWeight: 500,
          },
          item: {
            background: "#f9f9f9",
            color: "#1d1d1d",
            overflow: "hidden",
            border: "1px solid #ededed",
            borderRadius: 12,
            fontWeight: 300,
          },
        }}
      >
        {Questions.map(({ title, content }) => (
          <Accordion.Item key={title} value={title}>
            <Accordion.Control>{title}</Accordion.Control>
            <Accordion.Panel>{content}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Faqs;