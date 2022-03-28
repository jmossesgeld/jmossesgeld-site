import ProjectItem from "./projectItem";

export default function Projects() {
  return (
    <div id="projects" className={"px-2 my-16"}>
      <h1 className="font-black text-4xl py-16 text-center ">Projects</h1>
      <p className="text-center px-2 max-w-4xl mx-auto">
        The majority of the projects listed herein are specifically made based on my actual needs. I
        use these tools personally on a regular basis and on other business activities. 🙂
      </p>
      <div className="flex flex-wrap justify-center md:space-x-4">
        <ProjectItem
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
        <ProjectItem
          src="/images/typing.gif"
          title="Online Typing Speed Test"
          description="A web-based typing speed test which allows users to test their typing speed. The users' score are
          measured based on typing accuracy and words per minute (WPM)."
          codeLink="https://github.com/jmossesgeld/react-typing-speed"
          liveLink="http://typing-speedtest.web.app/"
          techUsed={["React.js", "Redux.js", "HTML", "CSS", "Javascript"]}
          imagePosition="center top"
        />
        <ProjectItem
          src="/images/emailforwarder.gif"
          title="Email Forwarder"
          description="A Python project which automatically forwards all new mails from one email address to another. It uses pythonanywhere's CRON tasks to run the script every hour."
          codeLink="https://github.com/jmossesgeld/email_forwarder"
          liveLink=""
          techUsed={["Python", "smtplib", "CRON"]}
        />
        <ProjectItem
          src="/images/mangascraper.gif"
          title="Manga Scraper"
          description="A Python project which detects and downloads manga panels from source using Beautiful Soup (bs4). It also features automatic skipping of raws and automatic download of the next chapters by searching and scanning through the links."
          codeLink="https://github.com/jmossesgeld/manga-scraper"
          liveLink=""
          techUsed={["Python", "Web Scraping", "beautifulsoup"]}
        />
        <ProjectItem
          src="/images/jmossesgeld.gif"
          title="My Portfolio Site"
          description="My portfolio site which is built using React.js, Next.js and Tailwind for styling."
          codeLink="https://github.com/jmossesgeld/jmossesgeld-site"
          liveLink="https://jmossesgeld.site"
          techUsed={["Next.js", "React.js", "Tailwind.css", "HTML", "CSS", "Javascript"]}
          imagePosition="center top"
        />
      </div>
    </div>
  );
}
