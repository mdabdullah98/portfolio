import React from "react";
import "./skills.css";
import stackContainer from "./index.js";

function Skills() {
  return (
    <>
      <h2 className="skills-heading">Skills</h2>
      <section className="skills-section" id="skills">
        {stackContainer &&
          stackContainer.map(
            ({ id, Stack_image, stack_name, stack_content, language }) => {
              return (
                <React.Fragment key={id}>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className={`flip-card-front ${language} `}>
                        <h6 className="text-white text-capitalize">
                          {stack_name}
                        </h6>
                        <figure>
                          <Stack_image className="card-figure" />
                        </figure>
                      </div>
                      <div className="flip-card-back">
                        <h2>{stack_name}</h2>
                        <p>{stack_content}</p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          )}
      </section>
    </>
  );
}

export default Skills;
