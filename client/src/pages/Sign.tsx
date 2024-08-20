import React from "react";

const Sign: React.FC = () => {
  return (
    <form>
      <p>
        <label htmlFor="username">email</label>
        <input type="email" name="username" />
      </p>
    </form>
  );
};

export default Sign;
