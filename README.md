# Exercices for Egghead courses

- https://egghead.io/courses/building-react-applications-with-idiomatic-redux
- https://egghead.io/courses/getting-started-with-redux

When learning Redux - and later React - I wanted to avoid "noise" from stuff like Webpack
as much as possible. So for a while I did the exercises on JSBin, then Plunkr (for multi-file
support). This worked quite well, until the `react-router` parts, which more or less need a
local environment.

Since I don't have an Egghead membership, I can't download the sources. And I don't want to
just copy stuff from the plunks; so I will go back and skim through the first course, coding
along. I'm going through the lectures much quicker, but it's still useful as a refresher.

Since Chrome currently implements 97% of ES6, I considered avoiding Babel since I can replace
JSX expressions by assigning `ReactDOM.createElement` to a shorthand variable and just use that.
But that would mean a loss of readability, so I decied to stick with Babel for now. In addition,
when working with Redux, non-standard features - such as the spread operator - are very useful.

Howver, I ran into some issues: by default, Chrome does not allow CORS requests for the `file:///`
protocol scheme. To get around this, we must start Chrome with the ` --allow-file-access-from-files`
command line option:

  /c/Program\ Files\ \(x86\)/Google/Chrome/Application/chrome.exe --allow-file-access-from-files

Or, we can use Firefox which allows it "out-of-the-box".