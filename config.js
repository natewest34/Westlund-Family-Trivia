// ============================================
// CONFIG — fill in the JSONBin values below.
// See README.md for step-by-step setup.
// ============================================

const CONFIG = {
  // Starting roster. Anyone can add more from the "+ Add a player" link;
  // new names get saved into the QUESTIONS_BIN... no wait, PLAYERS_BIN below.
  PLAYERS: ["Nathan", "Doug", "Michaela", "Cindy", "Blake", "Chloe"],
  
  JSONBIN_API_KEY: "$2a$10$MqPA77pNEPiQjKQkQqwAyuPWf66/TCNVaNEU63TeydlRx.CMSvJUq",
  QUESTIONS_BIN_ID: "6a6ff017da38895dfeb18595",
  SCORES_BIN_ID: "6a6ff01ef5f4af5e29e2f9c3",
  PLAYERS_BIN_ID: "6a6ff03cda38895dfeb18602",

  // How many questions per day, split by difficulty.
  DIFFICULTY_MIX: { easy: 6, medium: 3, hard: 1 },
  
  // Category names to never include in a daily set. Matching is case-insensitive
  // and matches on "contains" — so "Entertainment" excludes every Entertainment:
  // subcategory at once (Books, Film, Music, TV, Video Games, etc.), while
  // "Sports" only excludes that one. Spelling needs to reasonably match OpenTDB's
  // own names, listed below for reference (current as of when this was written —
  // OpenTDB's category list has been stable for years, but if an exclusion doesn't
  // seem to be taking effect, double check the exact name against
  // https://opentdb.com/api_category.php).
  //
  // General Knowledge · Entertainment: Books · Entertainment: Film ·
  // Entertainment: Music · Entertainment: Musicals & Theatres ·
  // Entertainment: Television · Entertainment: Video Games ·
  // Entertainment: Board Games · Science & Nature · Science: Computers ·
  // Science: Mathematics · Mythology · Sports · Geography · History ·
  // Politics · Art · Celebrities · Animals · Vehicles ·
  // Entertainment: Comics · Science: Gadgets ·
  // Entertainment: Japanese Anime & Manga · Entertainment: Cartoon & Animations
  //
  // Example: EXCLUDED_CATEGORIES: ["Celebrities", "Science: Mathematics"]
  EXCLUDED_CATEGORIES: ["Entertainment: Video Games", "Entertainment: Comics", "Entertainment: Musicals & Theatres", "Mythology", "Entertainment: Japanese Anime & Manga", "Entertainment: Cartoon & Animations"],
};

// Node (the GitHub Action script) can `import CONFIG from "../config.js"` thanks to this.
// The browser ignores it entirely (no `module` global there).
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
