import React, { useEffect } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { menu, dropDownMenu } from "@/config";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/topbar.module.css";
import Image from "next/image";

const Topbar = () => {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  const router = useRouter();
  function activeClass(path) {
    if (router.pathname === path) {
      return styles.active;
    } else {
      return styles.navLinks;
    }
  }

  function activeMenuClass(path) {
    if (router.pathname === path) {
      return styles.active;
    } else {
      return styles.menuLinks;
    }
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">ItsIndianGuy</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={styles.toggleButton}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg bg-dark"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            {menu.map((item, key) => {
              return (
                <Link
                  key={key}
                  href={item.path}
                  className={activeClass(item.path)}
                  style={{
                    display: "flex",
                    padding: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}>
                  {item.title}
                </Link>
              );
            })}
            {dropDownMenu.map((item, key) => {
              return (
                <Link
                  key={key}
                  className={styles.menuLinkItems}
                  href={item.path}>
                  {item.title}
                </Link>
              );
            })}

            <NavDropdown
              className={styles.dropdown}
              title={<span>Menu</span>}
              id="navbarScrollingDropdown">
              {dropDownMenu.map((item, key) => {
                return (
                  <Link
                    key={key}
                    className={activeMenuClass(item.path)}
                    href={item.path}
                    style={{
                      display: "flex",
                      padding: "5px",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                    }}>
                    {item.title}
                  </Link>
                );
              })}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            />
          </Form>

          <Image
            src="/assets/person/1.jpeg"
            width={35}
            height={35}
            className={styles.logo}
            alt=""
            onClick={() => router.push("/about")}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
