import React from "react";

export default function Text() {
  return (
    <div>
      <div>
        {/* text */}
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
    </div>
  );
}
