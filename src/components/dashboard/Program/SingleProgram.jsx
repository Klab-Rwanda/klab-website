import React from "react";

const SingleProgram = () => {
  return (
    <div className="program-detail">
      <div>
        <h4 className="program-title">Program Title</h4>
        <p className="program-date">Date</p>
        <p className="program-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          architecto accusamus asperiores libero ducimus eos perspiciatis quo
          voluptate accusantium tenetur dolorem, facere perferendis deleniti
          amet porro quos quas dignissimos aperiam?
        </p>
        <div className="program-icon">
          <div className="inner-icon">
            <svg
              style={{ width: "28px", padding: "3px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>

            <svg
              style={{ width: "28px", padding: "3px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              id="toggle-password"
              class="feather feather-eye"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <svg
            style={{ width: "28px", padding: "3px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x-circle table-cancel"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SingleProgram;
