export default function Skills() {
  const bodyText =
    "m-2 text-pink-100 bg-violet-800 inline border-2 border-pink-200 hover:border-violet-900 rounded-full p-3 hover:bg-indigo-200 hover:text-violet-900 hover:scale-110 transition-all duration-100";
  const heading = "font-black text-xl mx-4 my-6 text-pink-100 text-center";
  const workBox =
    "w-full max-w-4xl my-4 border-indigo-100 border-2 p-3 mx-2 rounded-lg shadow-sm shadow-white md:odd:left-28 md:even:right-28 transition-all duration-200";

  return (
    <div id="skills" className="bg-violet-600 p-5">
      <h1 className="font-black text-4xl py-16 text-center text-pink-50">Technology Stack</h1>
      <div className=" flex justify-center items-center flex-col  ">
        <div className={workBox}>
          <h3 className={heading}>Web Development</h3>
          <div className="flex flex-wrap justify-center">
            <p className={bodyText}>React JS</p>
            <p className={bodyText}>Next JS</p>
            <p className={bodyText}>Material UI</p>
            <p className={bodyText}>Tailwind CSS</p>
            <p className={bodyText}>HTML5</p>
            <p className={bodyText}>CSS3</p>
            <p className={bodyText}>Javascript</p>
            <p className={bodyText}>Typescript</p>
            <p className={bodyText}>Node JS</p>
            <p className={bodyText}>Express JS</p>
            <p className={bodyText}>Python</p>
            <p className={bodyText}>Flask</p>
          </div>
        </div>
        <div className={workBox}>
          <h3 className={heading}>DevOps and Workflow</h3>
          <div className="flex flex-wrap justify-center">
            <p className={bodyText}>GIT</p>
            <p className={bodyText}>Github</p>
            <p className={bodyText}>Firebase</p>
            <p className={bodyText}>Heroku</p>
            <p className={bodyText}>Google Cloud Platform</p>
            <p className={bodyText}>Serverless Functions</p>
            <p className={bodyText}>Firestore</p>
          </div>
        </div>
        <div className={workBox}>
          <h3 className={heading}>Tools and Libraries</h3>
          <div className="flex flex-wrap justify-center">
            <p className={bodyText}>smtp</p>
            <p className={bodyText}>OpenCV</p>
            <p className={bodyText}>selenium</p>
            <p className={bodyText}>beautifulsoup</p>
            <p className={bodyText}>SheetJS</p>
            <p className={bodyText}>openpyxl</p>
            <p className={bodyText}>pandas</p>
            <p className={bodyText}>jupyter-notebook</p>
            <p className={bodyText}>jspdf</p>
            <p className={bodyText}>html2canvas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
