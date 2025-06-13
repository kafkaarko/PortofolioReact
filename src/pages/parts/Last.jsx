import React from "react";

const Last = () => (
    <>
  <div className="flex flex-col items-center justify-center py-16 text-center text-white" id="kontak">
    
    <h2 className="text-3xl font-bold mb-4">Thank You for Visiting!</h2>
    <p className="text-lg mb-6 max-w-xl">
      I appreciate your time exploring my portfolio. If you have any questions, collaboration ideas, or just want to connect, feel free to reach out!
    </p>
    <div className="flex gap-6 mt-4">
      <a href="mailto:kafkaarko@gmail.com" className="btn btn-primary">Email Me</a>
      <a href="https://www.linkedin.com/in/kafka-arko-ardissya-141a33304/" className="btn btn-outline">LinkedIn</a>
      <a href="https://github.com/kafkaarko" className="btn btn-outline">GitHub</a>
    </div>
  </div>
    </>
);

export default Last;