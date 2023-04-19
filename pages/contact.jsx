import React from "react";
import { MapPin, PhoneCall, EnvelopeSimpleOpen } from "@phosphor-icons/react";
import Button from "../components/layout/Button";
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <section className="py-6">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin size={48} color="#ff66b3" weight="duotone" />
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <PhoneCall size={48} color="#ff66b3" weight="duotone" />
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <EnvelopeSimpleOpen
                  size={48}
                  color="#ff66b3"
                  weight="duotone"
                />
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary-light bg-white"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email addr</span>

              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary-light"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                name="message"
                rows="3"
                value={message}
                onChange={this.handleChange}
                className="block w-full rounded-md focus:ring
                focus:ring-opacity-75 focus:ring-primary-light dark:bg-white"
              />
            </label>
            <Button type="button" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
