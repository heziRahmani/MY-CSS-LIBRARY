import React from "react";

export default function Buttons() {
  return (
    <section className='py-9 fs-md' id='btn-section'>
      <header>
        <h2 className='fs-xxl'>BUTTONS</h2>
      </header>
      <div className='row gap-5 mt-3'>
        <a href='#btn-section' className='btn'>
          default button
        </a>
        <a href='#btn-section' className='btn-primery'>
          click me
        </a>
        <a href='#btn-section' className='btn-secondery'>
          click me
        </a>
        <a href='#btn-section' className='btn-error'>
          click me
        </a>
        <a href='#btn-section' className='btn-info'>
          click me
        </a>
        <a
          href='#btn-section'
          className='btn-outline-Living-Coral btn-outline-Living-Coral-hover text-color-black text-hover-color-white'>
          click me
        </a>
        <a
          href='#btn-section'
          className='btn-outline-raspberry btn-outline-raspberry-hover'>
          click me
        </a>
      </div>
    </section>
  );
}
