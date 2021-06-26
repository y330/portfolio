// const scrapedin = require("scrapedin");

// async function getLinkedProfile(user) {
//   const options = {
//     email: "avivyonah@gmail.com",
//     password: "Two-housand-&-fiur",
//   };
//   const profileScraper = await scrapedin(options);
//   const profile = await profileScraper(`https://www.linkedin.com/in/${user}/`);
//   return {
//     name: profile.name,
//     headline: profile.headline,
//     summary: profile.summary,
//     skills: skills,
//   };
// }

// export default getLinkedProfile(username);
export let username;

export default function getLinkedProfile(username) {
  return {
    name: "Yonah Aviv",
    headline: "Student at TanenbaumCHAT, Coding Tutor, Computer Programmer",
    summary:
      "I am a high school student who actively studies various STEM topics, mainly web development(web extensions, progressive web apps) and computer science. I teach coding to children as a self-employed tutor, and I work on various self initiated coding/tech projects in my own time. Technologies I use on a day-to-day basis include Python, JavaScript, Svelte(web-dev), Node.js, Git, and a little bit of React.",
  };
}
