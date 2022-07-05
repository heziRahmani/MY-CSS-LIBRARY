import Cards from "./components/Cards";
// import "./MY_CSS_LIBRARY/pages/App.scss";
import "./CSS/index.css";
import Colors from "./components/Colors";
import Buttons from "./components/Buttons";
import Utilities from "./components/Utilities";
function App() {
  return (
    <div className='container lh-2'>
      <header className='py-5 '>
        <h2 className='fs-xxxl'>MY CSS LIBRARY</h2>
        <p className='fs-xl pt-2'>
          A css library to simplify the prosses of web design
        </p>
      </header>
      <div className='fs-md'>
        <p>You can use the library in a few simple steps.</p>
        <ul className='li-s-square fs-md'>
          <li>
            <p>
              You will need to install node-sass to compile SCSS files to CSS.
            </p>
            <p className='text-color-info-dark-3'>
              Instaltion: npm install node-sass.
            </p>
          </li>
          <li>
            <p>Copy the SAAS folder to your project.</p>
          </li>
          <li>
            <p>
              Copy this line to the scripts in the packeg.json:
              <span className='text-color-info-dark-3'>
                "sass": "sass src/MY_CSS_LIBRARY:src/Css --watch
                --no-source-map"
              </span>
            </p>
          </li>
          <li>
            <p>In the console write npm start sass</p>
          </li>
          <li>
            <p>
              Now you will see an index.css file that contains all the css
              classes
            </p>
          </li>
          <li>
            <p>
              <span className='text-color-Cherry-Tomato'>IMPORTANT NOTE:</span>{" "}
              before deploying to production don't forget to purge all the
              unused css classes and the sass folder{" "}
            </p>
          </li>
        </ul>
      </div>
      {/* colors */}
      <Colors />
      {/* font sizes */}
      {/* buttons */}
      <Buttons />
      {/* cards */}
      {/* <Cards /> */}
      {/* grid system */}
      {/* utilities */}
      <Utilities />
    </div>
  );
}

export default App;
