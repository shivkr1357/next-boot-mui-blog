import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

const PostCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
      className={styles.postCards}>
      <Card
        style={{
          width: "18rem",
          margin: "10px",
        }}>
        <Card.Img variant="top" src="/assets/post/1.jpeg" />
        <Card.Body>
          <Card.Title>First Post</Card.Title>
          <Card.Text>Lorem ipsum dolor, sit amet ...</Card.Text>
          <Button variant="secondary">Read More</Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default PostCards;
