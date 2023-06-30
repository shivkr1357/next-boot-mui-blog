import React from "react";
import { Container, Dropdown, Nav, Navbar, SplitButton } from "react-bootstrap";
import { menu, dropDownMenu } from "@/config";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/topbar.module.css";

const Topbar = () => {
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
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      collapseOnSelect
      className={styles.topbar}
    >
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
            navbarScroll
          >
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
                    marginRight: "10px",
                  }}
                >
                  {item.title}
                </Link>
              );
            })}
            {dropDownMenu.map((item, key) => {
              return (
                <Link
                  key={key}
                  className={styles.menuLinkItems}
                  href={item.path}
                >
                  {item.title}
                </Link>
              );
            })}

            <SplitButton
              className={styles.dropdownMenu}
              title={<span>Interview QA</span>}
              id="navbarScrollingDropdown"
              variant="secondary"
              style={{ backgroundColor: "bisque" }}
            >
              {dropDownMenu.map((item, key) => (
                <Dropdown.Item
                  key={key}
                  className={activeMenuClass(item.path)}
                  style={{
                    display: "flex",
                    width: "200px",
                    padding: "10px",
                    margin: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <Link
                    style={{
                      justifyContent: "center",
                      textDecoration: "none",
                      backgroundColor: "gray",
                      color: "white",
                    }}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </Dropdown.Item>
              ))}
            </SplitButton>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
          </Form> */}

          {/* <Image
            src="/assets/person/1.jpeg"
            width={35}
            height={35}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            className={styles.logo}
            alt=""
            onClick={() => router.push("/about")}
          /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
