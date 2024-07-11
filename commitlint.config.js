
export default {
 rules: {
  "type-emun": [
   2,
   "always",
   [
    // list of emojis and their codes
    "🎉 :tada:", // Initial commit
    "🔖 :bookmark:", // Version tag
    "✨ :sparkles:", // New feature
    "🐛 :bug:", // Bugfix
    "📇 :card_index:", // Metadata
    "📚 :books:", // Documentation
    "💡 :bulb:", // Documenting source code
    "🐎 :racehorse:", // Performance
    "💄 :lipstick:", // Cosmetic
    "🚨 :rotating_light:", // Tests
    "✅ :white_check_mark:", // Adding a test
    "✔️ :heavy_check_mark:", // Make a test pass
    "⚡ :zap:", // General update
    "🎨 :art:", // Improve format/structure
    "🔨 :hammer:", // Refactor code
    "🔥 :fire:", // Removing code/files
    "💚 :green_heart:", // Continuous Integration
    "🔒 :lock:", // Security
    "⬆️ :arrow_up:", // Upgrading dependencies
    "⬇️ :arrow_down:", // Downgrading dependencies
    "👕 :shirt:", // Lint
    "👽 :alien:", // Translation
    "📝 :pencil:", // Text
    "🚑 :ambulance:", // Critical hotfix
    "🚀 :rocket:", // Deploy
    "🍎 :apple:", // Fixing on MacOS
    "🐧 :penguin:", // Fixing on Linux
    "🏁 :checkered_flag:", // Fixing on Windows
    "🚧 :construction:", // Work in progress
    "👷 :construction_worker:", // Adding CI build system
    "📈 :chart_with_upwards_trend:", // Analytics or tracking code
    "➖ :heavy_minus_sign:", // Removing a dependency
    "➕ :heavy_plus_sign:", // Adding a dependency
    "🐳 :whale:", // Docker
    "🔧 :wrench:", // Configuration files
    "📦 :package:", // Package.json in JS
    "🔀 :twisted_rightwards_arrows:", // Merging branches
    "💩 :hankey:", // Bad code / need improv
    "⏪ :rewind:", // Reverting changes
    "💥 :boom:", // Breaking changes
    "👌 :ok_hand:", // Code review changes
    "♿ :wheelchair:", // Accessibility
    "🚚 :truck:", // Move/rename repository
   ],
  ],
  "subject-emty": [2, "never"],
  "subject-full-stop": [2, "never", "."],
  "header-pattern": [
   2,
   "always",
   /^(🎉 :tada:|🔖 :bookmark:|✨ :sparkles:|🐛 :bug:|📇 :card_index:|📚 :books:|💡 :bulb:|🐎 :racehorse:|💄 :lipstick:|🚨 :rotating_light:|✅ :white_check_mark:|✔️ :heavy_check_mark:|⚡ :zap:|🎨 :art:|🔨 :hammer:|🔥 :fire:|💚 :green_heart:|🔒 :lock:|⬆️ :arrow_up:|⬇️ :arrow_down:|👕 :shirt:|👽 :alien:|📝 :pencil:|🚑 :ambulance:|🚀 :rocket:|🍎 :apple:|🐧 :penguin:|🏁 :checkered_flag:|🚧 :construction:|👷 :construction_worker:|📈 :chart_with_upwards_trend:|➖ :heavy_minus_sign:|➕ :heavy_plus_sign:|🐳 :whale:|🔧 :wrench:|📦 :package:|🔀 :twisted_rightwards_arrows:|💩 :hankey:|⏪ :rewind:|💥 :boom:|👌 :ok_hand:|♿ :wheelchair:|🚚 :truck:) - anybank-\d+: .+$/,
  ],
  "header-match": [
   2,
   "always",
   /^<emoji> - <story number>: <commit description>$/,
  ],
 },
 plugins: [
  {
   rules: {
    "header-match": (parsed) => {
     const header = parsed.header;
     const regex =
      /^(🎉 :tada:|🔖 :bookmark:|✨ :sparkles:|🐛 :bug:|📇 :card_index:|📚 :books:|💡 :bulb:|🐎 :racehorse:|💄 :lipstick:|🚨 :rotating_light:|✅ :white_check_mark:|✔️ :heavy_check_mark:|⚡ :zap:|🎨 :art:|🔨 :hammer:|🔥 :fire:|💚 :green_heart:|🔒 :lock:|⬆️ :arrow_up:|⬇️ :arrow_down:|👕 :shirt:|👽 :alien:|📝 :pencil:|🚑 :ambulance:|🚀 :rocket:|🍎 :apple:|🐧 :penguin:|🏁 :checkered_flag:|🚧 :construction:|👷 :construction_worker:|📈 :chart_with_upwards_trend:|➖ :heavy_minus_sign:|➕ :heavy_plus_sign:|🐳 :whale:|🔧 :wrench:|📦 :package:|🔀 :twisted_rightwards_arrows:|💩 :hankey:|⏪ :rewind:|💥 :boom:|👌 :ok_hand:|♿ :wheelchair:|🚚 :truck:) - anybank-\d+: .+$/;
     return [
      regex.test(header),
      `Header does not match the format '<emoji> - <story number>: <commit description>'`,
     ];
    },
   },
  },
 ],
};
