import Container from "@/component/Container/Container";
import Footer from "@/component/shared/Footer";
import Header from "@/component/shared/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default layout;
