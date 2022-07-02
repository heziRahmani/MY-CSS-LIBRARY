import React from "react";

export default function Cards() {
  return (
    <section className='fs-md py-9'>
      <header className='cards_container'>
        <h2 className='fs-xxl'>CARDS</h2>
      </header>
      <div className='cards_section_body'>
        {/* card type 1 */}
        <div className='card_type_1'>
          <h3 className='card-title'>type 1</h3>
          <p className='card-body'>this is a pregraph </p>
          <a href='#'>CLICK</a>
        </div>
        {/* card type 2 */}

        <div className='card_type_1'></div>
      </div>
    </section>
  );
}
