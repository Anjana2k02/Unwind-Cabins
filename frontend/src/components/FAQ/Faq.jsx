import { useState } from "react";
import { ChevronRight } from "lucide-react";
import "./Faq.css";

export default function Faq() {
  const faqData = [
    {
      id: 1,
      title: "About Unwind Cabins",
      questions: [
        "How long have you been in business?",
        "Why did you start this journey?",
      ],
      buttonText: "About our cabins",
    },
    {
      id: 2,
      title: "Tell me more about the cabin",
      questions: ["What do I need to bring?", "How do I get to the cabin?"],
      buttonText: "Tell me more about the cabin",
    },
    {
      id: 3,
      title: "Pets, family & friends",
      questions: [
        "Please tell me I can bring my dog",
        "How many people do your cabins sleep?",
      ],
      buttonText: "Pets, family & friends",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently asked questions</h2>

      {faqData.map((section) => (
        <div key={section.id} className="faq-section">
          <div className="faq-content">
            <h3 className="faq-title">{section.id}. {section.title}</h3>
            <ul className="faq-list">
              {section.questions.map((question, index) => (
                <li key={index} className="faq-item">{question}</li>
              ))}
            </ul>
          </div>
          <button className="faq-button">
            {section.buttonText}
            <ChevronRight className="faq-chevron" />
          </button>
        </div>
      ))}

      <div className="faq-footer">
        <h3 className="faq-footer-heading">Still have a question?</h3>
        <p className="faq-footer-text">
          If you still have questions, contact a member of the team on{" "}
          <a href="#" className="faq-link">live chat</a> and we'd be more than happy to help.
        </p>
      </div>
    </div>
  );
}
