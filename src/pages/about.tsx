import { PageProps } from "gatsby";
import React, { useEffect, useState } from "react";

const AboutPage: React.FC<PageProps> = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 500);
  }, []);

  return (
    <main>
      <h1>About</h1>
      <div>
        <p>Using GitHub pages to deploy this Gatsby app</p>
        <div>Time now: {time}</div>
      </div>
    </main>
  );
};

export default AboutPage;
