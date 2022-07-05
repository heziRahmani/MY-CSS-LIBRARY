import React from "react";
import Boxes from "./Boxes";
import Text from "./Text";

export default function Utilities() {
  return (
    <section className='fs-md pt-9'>
      <header className=' pt-5'>
        <h2 className='fs-xxl'>UTILITIS</h2>
      </header>
      <div className='pt-5 '>
        <div>
          {/* margin &padding */}
          <h3 className='pb-3'>PADDING & MARGIN</h3>
          <p>
            The classes are named using the format {"{property}"}
            {"{sides}"}-{"{size}"}.
          </p>
          <p>
            {" "}
            The classes are built from a default Sass map ranging from 0rem to
            5rem.
          </p>
          <p className='text-color-Royal-Purple'>
            Exemple:{" "}
            <span className='text-color-info-dark-3'>
              className='pb-3 px-7'
            </span>
          </p>
          <ul className='li-s-square'>
            <li>
              m: <span className='text-color-info-dark-3'>margin</span>
            </li>
            <li>
              p: <span className='text-color-info-dark-3'>padding</span>
            </li>
            <li>
              t: margin | padding
              <span className='text-color-info-dark-3'> top</span>
            </li>
            <li>
              b: margin | padding
              <span className='text-color-info-dark-3'>bottom</span>
            </li>
            <li>
              l: margin | padding{" "}
              <span className='text-color-info-dark-3'>left</span>
            </li>
            <li>
              r: margin | padding
              <span className='text-color-info-dark-3'> right</span>
            </li>
            <li>
              x: margin | padding{" "}
              <span className='text-color-info-dark-3'>inline</span>
            </li>
            <li>
              y: margin | padding{" "}
              <span className='text-color-info-dark-3'>block</span>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className='py-7'>
          {/* box shedow */}
          <h3>BOX-SHADOW</h3>
          <Boxes />
        </div>
        <div className='py-7'>
          {/* border */}
          <h3>BORDER</h3>
          <ul className='li-s-square'>
            <li>
              <p>
                br:<span>border radius</span>
              </p>
            </li>
            <li>
              <p>
                bt:<span>border thickness</span>
              </p>
            </li>
            <li>
              <p>
                bs:<span>border style</span>
              </p>
            </li>
            <li>
              <p>
                bc:<span>border color</span>
              </p>
            </li>
            <li>
              <p>
                {"{border}"}-{"{color}"}-{"{color name}"}:
                <span> border-color</span>
              </p>
            </li>
          </ul>
          <div className=''>
            <div className='bt-default br-default bc-black bs-solid p-5 m-5'>
              bt-default br-default bc-black bs-solid p-5 m-5
            </div>
            <div className='bt-sm br-sm bc-black bs-dashed p-5 m-5'>
              bt-sm br-sm bc-black bs-dashed p-5 m-5
            </div>
            <div className='bt-lg br-lg bc-black bs-double p-5 m-5'>
              bt-lg br-lg bc-black bs-double p-5 m-5
            </div>
            <div className='bt-xl br-xl bc-black bs-ridge p-5 m-5'>
              bt-xl br-xl bc-black bs-ridge p-5 m-5
            </div>
          </div>
        </div>
        <Text />
        <div>
          <h4>LIST STYLE</h4>
          <p>
            NOTATION: {"{li-s}"}-{"{type}"}
          </p>
          <ul className='py-5'>
            <li>
              <p>c:circle</p>
            </li>
            <li>
              <p>d:decimal</p>
            </li>
            <li>
              <p>s:square</p>
            </li>
            <li>
              <p>ul:upper-latin</p>
            </li>
            <li>
              <p>un:upper-roman</p>
            </li>
          </ul>
        </div>
      </div>
      {/* overflow */}
      {/*visability hiden  */}
      {/* Typography */}
      {/* images */}
      {/* tables */}
      {/*  */}
    </section>
  );
}
