import Project from "./project";

export default function Projects() {
  return (
    <div id="projects" className={"px-2 my-16 sm:mx-8"}>
      <h1 className="font-black text-4xl py-16 text-center ">Projects</h1>
      <div className="flex flex-wrap justify-center space-x-2">
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
            "Material UI",
            "Excel/SheetJS",
            "Firebase Auth",
            "Firebase RD",
            "HTML",
            "CSS",
            "Javascript",
          ]}
        />
        <Project
          src="/images/typing.gif"
          title="Online Typing Speed Test"
          description="A web-based typing speed test which allows users to test their typing speed. The users' score are
          measured based on typing accuracy and words per minute (WPM)."
          codeLink="https://github.com/jmossesgeld/react-typing-speed"
          liveLink="http://react-typing-speed.herokuapp.com/"
          techUsed={["React.js", "Redux.js", "HTML", "CSS", "Javascript"]}
          imagePosition="center top"
        />
        <Project
          src="/images/emailforwarder.gif"
          title="Email Forwarder"
          description="A Python project which automatically forwards all new mails from one email address to another. It uses pythonanywhere's CRON tasks to run the script every hour."
          codeLink="https://github.com/jmossesgeld/email_forwarder"
          liveLink=""
          techUsed={["Python", "smtplib", "CRON"]}
        />
        <Project
          src="/images/mangascraper.gif"
          title="Manga Scraper"
          description="A Python project which detects and downloads manga panels from source using Beautiful Soup (bs4). It also features automatic download of the next chapters by searching and scanning through the links."
          codeLink="https://github.com/jmossesgeld/email_forwarder"
          liveLink=""
          techUsed={["Python", "Web Scraping", "beautifulsoup"]}
        />
      </div>
    </div>
  );
}
