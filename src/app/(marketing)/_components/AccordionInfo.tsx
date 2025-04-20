import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";

function AccordionInfo() {
  return (
    <section className="max-w-[620px] w-full mt-10 sm:mt-14 md:mt-16 space-y-4 mx-auto">
      <h2 className="font-medium text-xl md:text-2xl text-black dark:text-white text-left">
        Frequently Asked Questions
      </h2>
      <Accordion className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700 text-left">
        <AccordionItem value="getting-started">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 font-medium">
            What is Memoa?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Memoa is a modern, lightweight application designed to help you organize your workflows and capture your ideas effortlessly. Built with simplicity and flexibility in mind, it empowers users to manage tasks, take notes, and structure projects all in one place.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="animation-properties">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 font-medium">
            Why was Memoa created?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Memoa was created to provide a seamless and distraction-free environment for users who need a simple yet powerful tool to manage their thoughts, tasks, and projects. It focuses on offering an intuitive experience without overwhelming features, helping you stay productive and organized.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="advanced-usage">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 font-medium">
          Who can benefit from Memoa?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
            Anyone looking for a simple yet effective note-taking and workflow management tool can benefit from Memoa. Whether you&lsquo;re a student managing study notes, a professional organizing projects, or a creative mind brainstorming ideas, Memoa adapts to your needs.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="community-and-support">
          <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 font-medium">
            What is the vision behind Memoa?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              The vision behind Memoa is to create a digital space where thoughts, tasks, and ideas can flow naturally. It&lsquo;s about empowering individuals to stay organized, creative, and focused—without fighting against the tool itself.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default AccordionInfo;
