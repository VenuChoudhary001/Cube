import React, { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../sections/contact/hero";

const Contact = () => {
  const createFreshsalesLead = async (data) => {
    const url = "https://api.freshsales.io/api/leads";
    const headers = {
      Authorization: `Token token=MqfVr4521O375vGyEQLYfQ`,
      "Content-Type": "application/json",
    };
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        first_name: "Jazzzz",
        last_name: "Sampleton",
        mobile_number: "1-926-555-9503",
        email: "hello@test.com",
      }),
    });
    const res = await response.json();
    console.log(res);
  };
  const test = async () => {
    let res = await fetch(
      "https://cubedatingllc.myfreshworks.com/crm/sales/api/contacts",
      {
        method: "POST",
        headers: {
          Authorization: "Token token=MqfVr4521O375vGyEQLYfQ",
          "Content-Type": "application/json",
        },
        // body: '{"contact":{"first_name":"James", "last_name":"Sampleton (sample)", "mobile_number":"1-926-555-9503"}}',
        body: JSON.stringify({
          contact: {
            first_name: "Jazzzz",
            last_name: "Sampleton",
            mobile_number: "1-926-555-9503",
            email: "hello@test.com",
          },
        }),
      }
    );

    let response = await res.json();
    console.log(response);
  };
  useEffect(() => {
    // createFreshsalesLead();
    test();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Contact;
