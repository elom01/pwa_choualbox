import React, { Component } from "react";
import styled from "styled-components";
import Article from "../article";
import Quickbar from "../quick-bar";

const data = [
  {
    id:"1",
    username: `Adrian`,
    title: `Titre A`,
    content: `Le livre que nous proposons nous apparaît utile et original. Utile :
              si les textes qui analysent des œuvres ou d’autres phénomènes littéraires (genres, figures, thèmes, mouvements, événements, etc.) ou qui
              présentent des théories littéraires abondent, nous manquons sans doute
              d’ouvrages de méthodologie en analyse littéraire. Original : il occupe
    `,
    date: new Date("1/1/2020 11:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"2",
    username: `Hazel`,
    title: `Titre B`,
    content: `un créneau, semble-t-il, vide.
              En effet, il n’existe à notre connaissance aucun livre qui à la fois présente : (1) la manière de produire une analyse, des principes jusqu’aux
              aspects formels (définitions de l’analyse, sortes d’analyses, parties et
              phases du texte d’analyse, plan, argumentation, opinion, citations,
              références, etc.); (2) la plupart des aspects qui peuvent être analysés`,
    date: new Date("2/3/2020 11:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"3",
    username: `Landon`,
    title: `Titre C`,
    content: `dans un texte littéraire (nous en distinguons une trentaine : thèmes,
              actions, personnages, rythme, etc.); (3) la plupart des approches qui
              peuvent être utilisées pour analyser ces aspects (nous en distinguons une
              quarantaine : histoire littéraire, thématique, psychanalyse, sémiotique,
              etc.). Malgré leurs indéniables qualités, les livres comparables couvrent`,
    date: new Date("5/1/2020 11:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"4",
    username: `Olivia`,
    title: `Titre D`,
    content: `seulement, en tout ou en partie, l’une ou l’autre de ces trois dimensions.
              Par exemple, Méthodologie littéraire (Labre et Soler, 1995) approfondit
              une partie des principes de l’analyse (les types d’analyses); Poétique des`,
    date: new Date("1/4/2020 11:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"5",
    username: `Oliver`,
    title: `Titre E`,
    content: `textes (Milly, 2001) s’intéresse principalement aux aspects du texte; pendant que Introduction aux études littéraires (Delcroix et Hallyn, 1987) ou
              Introduction à la théorie littéraire (Barsky, 1997) abordent essentiellement
              la question des approches.`,
    date: new Date("3/5/2020 11:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"6",
    username: `Scarlett`,
    title: `Titre F`,
    content: `Le livre constitue certes une synthèse sur le sujet, mais il propose de
              très nombreux nouveaux savoirs et savoir-faire en analyse littéraire; c’est
              en quoi il s’adresse aux étudiants et professeurs des cycles universitaires`,
    date: new Date("3/12/2020 11:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"7",
    username: `Benjamin`,
    title: `Titre G`,
    content: `et pré-universitaires. Le livre porte principalement sur l’analyse des
              textes littéraires, mais son propos vaut également généralement pour
              les autres analyses littéraires (par exemple, des analyses de genres, de`,
    date: new Date("2/1/2020 11:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"8",
    username: `Naomi`,
    title: `Titre H`,
    content: `thèmes, de contextes, d’événements littéraires).
              Des approfondissements touchant les chapitres sur les aspects et les
              approches du texte littéraire peuvent être trouvés dans le livre Internet `,
    date: new Date("3/14/2020 14:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"9",
    username: `Liam`,
    title: `Titre I`,
    content: `pas nécessairement destinée directement à l’application et en ce que toute
              analyse n’est pas nécessairement la mise en œuvre consciente, explicite et
              soutenue d’une théorie. Cependant, toute analyse présuppose une approche
              et toute approche présuppose une théorie littéraire, fût-elle rudimentaire`,
    date: new Date("3/14/2020 09:10:00"),
    group: `fun`,
    point: 0,
    comments: 0
  },
  {
    id:"10",
    username: `Nora`,
    title: `Titre J`,
    content: `et non conscientisée. Par exemple, en littérature, une analyse thématique
              traditionnelle ne repose pas à proprement parler sur une théorie explicitée;
              la micro-lecture est plus une méthode d’analyse qu’une théorie.
              L’approche est donc le « comment». L’approche comporte des concepts,`,
    date: new Date("3/14/2020 11:24:00"),
    group: `fun`,
    point: 0,
    comments: 0
  }
];

const Container = () => {
  return (
    <DivContainer>
      <Quickbar></Quickbar>
      {data.map(value => (
        <Article
          key={value.id}
          username={value.username}
          title={value.title}
          content={value.content}
          date={value.date}
          group={value.group}
          points={value.point}
          countcoms={value.comments}
        ></Article>
      ))}
    </DivContainer>
  );
};

const DivContainer = styled.div`
  height: calc(100vh - 6em - 2px);
  overflow-y: scroll;
`;

export default Container;
