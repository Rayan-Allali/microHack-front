import { useState } from "react";
import Data from "./Data";
import questions from "./faqs";
const FAQ = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full grid place-items-center my-[50px]" id="faq">
      <div className="flex flex-col items-end">
        <h4>FAQ</h4>
        <h1 className="text-[28px] lg:text-5xl font-bold align-center 2xl:text-[72px]">
          Frequently asked Questions
        </h1>
      </div>

      <div className="mt-[50px] mb-[75px] container">
        {questions.map((question, idx) => (
          <Data
            key={idx}
            question={question.qst}
            answer={question.answer}
            selected={selected}
            setSelected={setSelected}
            i={idx + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
