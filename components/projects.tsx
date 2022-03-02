import Project from "./project";

export default function Projects() {
  return (
    <div id="projects" className={"px-2 my-16 md:mx-32"}>
      <h1 className="font-black text-4xl py-16 text-center ">Projects</h1>
      <div className="flex flex-wrap md:space-x-4 justify-center justify-items-stretch">
        <Project
          src="/images/payroll.gif"
          title="Mage Payroll System"
          description={
            <p>
              A web-based payroll software aimed to greatly reduce complexity of payroll
              preparation.
              <br />
              It features Excel integration, timekeeping, automatic computation, and payroll
              reporting.
            </p>
          }
          codeLink="https://github.com/jmossesgeld/ph-payroll-manager"
          liveLink="https://mage-payroll-system.web.app/"
          techUsed={[
            "React.js",
            "Redux.js",
            "Excel/SheetJS",
            "Firebase Auth",
            "Firebase RD",
            "HTML5",
            "CSS3",
            "Javascript",
            "ES6+",
          ]}
        />
        <Project
          src="/images/typing.gif"
          title="Online Typing Speed Test"
          description="A web-based typing speed test which allows users to test their typing speed. The users' score are
          measured based on typing accuracy and words per minute (WPM)."
          codeLink="https://github.com/jmossesgeld/react-typing-speed"
          liveLink="http://react-typing-speed.herokuapp.com/"
          techUsed={["React.js", "Redux.js", "HTML5", "CSS3", "Javascript", "ES6+"]}
        />
        <Project
          src="/images/emailforwarder.gif"
          title="Email Forwarder"
          description="A Python project which automatically forwards all new mails from one email address to another. It uses pythonanywhere's CRON tasks to run the script every hour."
          codeLink="https://github.com/jmossesgeld/email_forwarder"
          liveLink=""
          techUsed={["Python", "smtplib", "CRON"]}
        />
      </div>
    </div>
  );
}
