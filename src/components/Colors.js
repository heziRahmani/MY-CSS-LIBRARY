import React, { useEffect, useState } from "react";

export default function Colors() {
  const [color, setColor] = useState("purple");
  const [colorCode, setColorCode] = useState("");
  const colorArrey = [
    //red
    "error",
    "Cherry-Tomato",
    "Cherry-Tomato-v2",
    //orange
    "Raspberry",
    // "raspberry_secondery": $raspberry_secondery,
    "Living-Coral",
    "Blooming-Dahlia",
    "Peach",

    //yellow
    "info",
    "Cream-Gold",
    "Dusky-Citron",
    "Illuminating",
    "Hunter-Green",
    "Forest-Green",
    "secondery",
    "Moss-Green",
    "Teal",
    "ligte_teal",
    "Aged-Copper",
    "Mint",
    "Sagebrush-Green",
    "Turquoise",
    //blue
    "Sailor-Blue",
    "indigo",
    "primery",
    "Turkish-Sea",
    "Royal-Blue",
    "Electric-Blue-Lemonade",
    "Pacific-Coast",
    "Light-Blue",
    "Ice-Flow",
    "Aquamarine",

    //purpele
    "purple",
    "Ultra-Violet",
    "Royal-Purple",
    "raspberry",
    "Orchid",
    "Light-Purple",
    "Pink-Salt",
    //maron
    "maroon",
    "Windsor-Wine",
    "Marsala",
    "Copper-Coin",
    "Brown-Sugar",
    "Warm-Sand",
    "Beige",

    //white
    "white",
    //gray
    "Granite-Gray",
    "Silver",
    "Charcoal-Gray",
    "Cool-Gray",
    //black
    "black",
    "Black-v2",
    "Black-v3",
  ];
  //RENDER VARIANTS
  const renderVariant = [];
  for (let i = 0; i < 9; i++) {
    renderVariant.push(
      <div
        className={`bg-color-${color}-dark-${i} text-color-white colorBlock`}>{`bg-color-Living-Coral-dark-${i}`}</div>
    );
  }
  //VARIANT ON CLICK
  useEffect(() => {
    const colors = document.querySelectorAll(".colorBlock");
    const colorC = document.querySelector("#complimentColor-box");
    const compStayle = window.getComputedStyle(colorC);
    colors.forEach((color) => {
      color.addEventListener("click", () => {
        setColor(color.innerHTML);
        setColorCode(compStayle.getPropertyValue("background-Color"));
      });
    });
    console.log(colorCode);
  }, []);

  //render opacity
  const renderOpacity = [];
  for (let i = 1; i < 11; i++) {
    renderOpacity.push(
      <i className={`bg-color-${color} o-${i * 10} p-2`}>{i * 10}</i>
    );
  }

  return (
    <section className='fs-md py-9' id='color-section'>
      <header className='py-3'>
        <h2 className='py-3 fs-xxl'>COLOR PALETTE</h2>
        <div>
          <div>
            <p>
              All of the colors are available as Sass variables and as a Sass
              map in scss/_variables.scss.
            </p>
          </div>
          <p>
            Each color as a light and dark vrietion by adding dark / light and a
            number from 1-9.
          </p>
          <div>
            <p className=''>
              For Exemple:
              <span className='text-color-info-dark-3'>
                className="bg-color-Living-Coral-dark-7" |
                className="text-color-Living-Coral-light-3"
              </span>
            </p>
            <p>The classes are named using the format</p>
            <p>
              NOTATION:
              <span>
                {" "}
                {"{text | bg-color}"}
                {"{color name}"}-{"{size}"} | {"{text-color | bg-color}"}
                {"{color name}"}-{"{dark | light}"}-{"{1 -9}"}
              </span>
            </p>
          </div>
        </div>
      </header>
      <div className='row gap-2 ' id='color_section_body'>
        {colorArrey.map((color, i) => {
          if (color === "white" || color === "black") {
            return "";
          }

          return (
            <div
              key={i}
              className={`bg-color-${color} text-color-white p-1 colorBlock`}>
              {color}
            </div>
          );
        })}
      </div>
      <div className='color_varietion  py-5 '>
        <div>
          <h4 className='fs-xl'>COLOR VARIATION'S</h4>
          <p>Choose one of the colors above to see it's variants</p>
        </div>
        <div className='ta-center'>{renderVariant}</div>
      </div>
      <div
        className={`bg-color-${color} row text-color-compliment-${color}`}
        id='complimentColor-box'>
        <h4 className='pr-3 fs-xl'>COMPLIMENT COLOR</h4>
        <p className='pr-3 display-b'>Color cod: {colorCode}</p>
        <p>
          Exemple: <span>className=text-color-compliment-{color} </span>
        </p>
        <p></p>
      </div>
      <br></br>
      <div className='my-3'>
        <h4 className='fs-xl'>HOVER AFFECT</h4>
        <p className='mr-1'>
          NOTATION: {"{text | bg}"}-{"{hover}"}-{"{color}"}-{"{color name}"}
        </p>
        <p className='text-color-info-dark-3 '>
          Excemple: text-hover-color-info
        </p>{" "}
        <div className='row justify-center'>
          <a
            href='#color-section'
            className='text-color-Black-v2  text-hover-color-Teal-light-2 my-5 ml-3'>
            Hover me
          </a>
          <a
            href='#color-section'
            className='text-color-primery text-hover-color-info-light-2 my-5 ml-3'>
            Hover me
          </a>
          <a
            href='#color-section'
            className='text-color-raspberry text-hover-color-Cherry-Tomato-v2-dark-2 my-5 ml-3'>
            Hover me
          </a>
        </div>
      </div>
      <div className='py-5'>
        <h3 className='fs-xl'>OPACITY</h3>
        <p>
          NOTATION:
          <span className='mr-2 text-color-Royal-Purple'>
            {"{o}"}-{"{1-10}"}
          </span>
        </p>
        <p>className='o-3'</p>
        <p>The values are from 0.1- 1</p>
        <ul className='row gap-5 py-3'>{renderOpacity}</ul>
      </div>
    </section>
  );
}
