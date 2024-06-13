import React from "react";
import { Container } from "../";

function Footer() {
  return (
    <Container>
      <footer className="py flex flex-col gap-16">
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-1 flex-col gap-6">
            <div>
              <h3 className="pb-3 text-lg font-semibold leading-7 text-light-secondary-800">
                About
              </h3>

              <p className="leading-6 text-light-secondary-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <div>
              <div className="flex gap-1 leading-6">
                <h4 className="font-semibold">Email:</h4>

                <p>info@blog-template.net</p>
              </div>

              <div className="flex gap-1 leading-6">
                <h4 className="font-semibold">Phone:</h4>

                <p>9999999999</p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-between">
            <div>Quick Links</div>

            <div>Category</div>
          </div>

          <div className="flex-1">Weekly Newsletter</div>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
