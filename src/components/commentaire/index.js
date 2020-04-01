import React, { Component } from 'react';
import styled from "styled-components";

const Commentaire = (key,
comment,
date) => {
return (
  <div key={key}>
    {comment} {date}
  </div>
);
};

export default Commentaire;