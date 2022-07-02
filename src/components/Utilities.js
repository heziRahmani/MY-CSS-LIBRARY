import React from "react";

export default function Utilities() {
  return (
    <section className='fs-md pt-9'>
      <header className=' pt-5'>
        <h2 className='fs-xxl'>UTILITIS</h2>
      </header>
      <div className='pt-5 '>
        <div>
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
          <h3>BOX-SHADOW</h3>
          <ul>
            <li></li>
          </ul>
        </div>
        {/*  */}
        <div className='py-7'>
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
        <div>
          <h3>TEXT</h3>
          <h4>FONT SIZE</h4>
          <h5>
            NOTATION: {"{fs}"}-{"{size}"}
          </h5>
          <h5>SIZES:</h5>
          <ul className='row justify-space-between'>
            <li className='fs-xs'>
              xs: <span>0.75rem</span>
            </li>
            <li className='fs-base'>
              base: <span>1rem</span>
            </li>
            <li className='fs-sm'>
              sm: <span>1.2rem</span>
            </li>
            <li className='fs-md'>
              md: <span>1.5</span>
            </li>
            <li className='fs-lg'>
              lg:<span>1.75</span>
            </li>
            <li className='fs-xl'>
              xl:<span>2rem</span>
            </li>
            <li className='fs-xxl'>
              xxl:<span>3rem</span>
            </li>
            <li className='fs-xxxl'>
              xxxl:<span>4rem</span>
            </li>
          </ul>
          <div className='py-5'>
            <h4>TEXT ALIGNMENT</h4>
            <ul>
              <li className='bt-default br-default bc-Black-v2'>
                <p>Easily realign text wiehte text alignment classes.</p>
              </li>
              <li>
                noteation: {"{ta}"}-{"{c / l / r}"}
              </li>
              {/* <li>
                <p>
                  ta:<span>text-align</span>
                </p>
              </li> */}
              <li className=' bt-default br-xs bc-black bs-solid pt-3 pb-3'>
                <p className='text-color-info-dark-3 p-2'>
                  ta: <span>text-align</span>
                </p>
              </li>
              <li className='ta-c  pt-3 pb-3  bt-default br-xs bc-black bs-solid'>
                <p className='text-color-info-dark-3 p-2'>
                  c: <span>text-align center</span>
                </p>
              </li>
              <li className='ta-l pt-3 pb-3 bt-default br-xs bc-black bs-solid'>
                <p className='text-color-info-dark-3 p-2'>
                  l: <span>text-align left</span>
                </p>
              </li>
              <li className='ta-r pt-3 pb-3 bt-default br-xs bc-black bs-solid'>
                <p className='text-color-info-dark-3 p-2'>
                  r: <span>text-align right</span>
                </p>
              </li>
              <li>
                <p className='text-color-Royal-Purple'>
                  Exemple: <span>className='ta-c'</span>
                </p>
              </li>
            </ul>
          </div>
          <div className='py-5'>
            <h4>LINE HIGHT</h4>
            <p>
              NOTATION:{" "}
              <span>
                {"{lh}"}-{"{1-3}"}
              </span>
            </p>
            <ul>
              <li>1: 1.75rem</li>
              <li>2: 2rem</li>
              <li>3: 3.5rem</li>
            </ul>
          </div>
          <div className='py-5'>
            <h4>LETTER SPACING</h4>
            <p>
              NOTATION:{" "}
              <span>
                {"{ls}"}-{"{1-5}"}
              </span>
            </p>
            <ul>
              <li>1: 0.1rem</li>
              <li>2: 0.2rem</li>
              <li>3: 0.3rem</li>
              <li>4: 0.4rem</li>
              <li>5: 0.5rem</li>
            </ul>
          </div>
          <div className='py-5'>
            <h4>TEXT WRAPPING & OVERFLOW</h4>
            <ul></ul>
          </div>
        </div>
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
    </section>
  );
}
