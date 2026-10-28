# MMW E-Portfolio

Mathematics in the Modern World — Abdul, Abdul Aziz P.

Based on the structure and violet design of your UTS portfolio. This is a separate website with one sample activity, animated numbers and mathematical symbols, a graph-paper background, and a Pause/Resume motion button. It also respects the visitor's reduced-motion setting.

## Upload to GitHub

Suggested repository name: **mmw-portfolio**

1. Extract `mmw-portfolio.zip`.
2. Create a new GitHub repository named `mmw-portfolio` (public if using GitHub Free).
3. Upload the extracted files and the entire `images` folder to the repository's root on `main`. `index.html` must be at the root, not inside an extra folder. Upload the extracted contents, not the ZIP itself.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
5. Wait for GitHub's Pages deployment to succeed, then open the published link shown in Pages settings.

If the owner is `azizboy2007` and the repository is `mmw-portfolio`, the default project-site address after deployment will be `https://azizboy2007.github.io/mmw-portfolio/`. This package does not create or publish a repository automatically.

Official setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and the reusable activity-card template |
| `styles.css` | Original responsive styling plus the MMW visual refresh |
| `activity-gallery.css` | Image galleries, academic-period headings, and optional reflections |
| `app.js` | JSON loading, validation, rendering, galleries, and animation controls |
| `data.json` | Student details, copy, activity entries, image paths, and background symbols |
| `images/abdulpic.jpg` | Your existing student photo, copied unchanged from the UTS repository |
| `images/sample-activity.svg` | Editable square-number illustration for the one sample card |
| `images/favicon.svg` | Mathematics-themed browser icon |

There is no build command, package installation, backend, or API key. Keep the files and folder names intact.

## Edit your content

Open **data.json**. All displayed portfolio copy is bound from that file, using the same objects and field names as your UTS website. Decorative notation also has a `background.symbols` array. JSON must use double quotes and cannot contain comments or trailing commas.

- `site`: browser title, page language, description.
- `header`: student name in the top bar and course status.
- `introduction`: heading, course name, portrait, short note, and activity-link label.
- `profile`: name, course, section, and school.
- `activities.items`: activity cards. The supplied file has exactly **one** example.
- `activities.terms`: academic-period headings. Only Preliminary is included initially.
- `instructor`: currently `null` because the MMW instructor was not specified.
- `takeaways`: currently `null`; optional reflections remain supported.
- `background`: set `enabled` to `false` to remove the floating background symbols, or edit `symbols`.
- `controls`: Pause/Resume button labels.
- `footer`: footer text.

The example is labelled as a sample. Replace its description and illustration with your actual coursework before submitting the portfolio.

## Add another activity

1. Put your image in `images/`, for example `activity-02.jpg`.
2. Copy the existing object inside `activities.items`.
3. Paste another object after it, separating the two objects with a comma.
4. Change the number, title, description, image path, and image description. Keep a valid `term`.

Example of an additional card object:

```json
{
  "term": "preliminary",
  "number": "02",
  "title": "YOUR ACTIVITY TITLE",
  "description": "Your activity description or reflection.",
  "img": "images/activity-02.jpg",
  "imgAlt": "Describe what your activity image shows.",
  "imgPlaceholder": "ACTIVITY 02"
}
```

No HTML edits are needed. File paths are case-sensitive on GitHub Pages: `Photo.jpg` and `photo.jpg` are different names. Prefer short filenames without spaces.

For an activity without a photo, add `"textOnly": true` to its object and set `img` to an empty string. Keep the other required string fields.

For an image you will upload later, use `"img": ""` and a clear placeholder such as `"imgPlaceholder": "IMAGE COMING SOON"`. Add `"pendingImage": true` for the smaller placeholder text style.

## Add multiple images to one card

Add an `images` array to an activity object:

```json
"images": [
  "images/exam-page-1.jpg",
  "images/exam-page-2.jpg"
]
```

Keep `img` set to the first image. Two or more images automatically enable Previous/Next controls and a page counter. Single images retain their full proportions; gallery pages fit inside a portrait frame without cropping.

## Add Midterm, Pre-Final, or Final

Add an object to `activities.terms`, for example:

```json
{
  "id": "midterm",
  "title": "MIDTERM",
  "description": "My midterm activities and examination."
}
```

Then use `"term": "midterm"` on each matching activity. Terms appear in the array's order; cards appear in their original order within each term. You can restart numbering at `01` per term. The first heading follows the first term automatically; the original `activities.title` and `activities.description` fields remain available for a flat list if you remove `terms`.

## Add your MMW instructor

Replace `"instructor": null` with an object like this, using the actual name and portrait path:

```json
"instructor": {
  "label": "COURSE INSTRUCTOR",
  "name": "YOUR MMW INSTRUCTOR",
  "course": "Mathematics in the Modern World",
  "img": "images/instructor.jpg",
  "imgAlt": "Portrait of your MMW instructor",
  "imgPlaceholder": "MMW"
}
```

If no portrait is available, use `"img": ""`. Keep `instructor` as `null` to hide the instructor card. The UTS instructor has not been assigned to MMW automatically.

## Add your reflection later

Replace `"takeaways": null` with:

```json
"takeaways": {
  "label": "MY REFLECTION",
  "title": "TAKEAWAYS",
  "subtitle": "Mathematics in the Modern World — Personal Reflection",
  "paragraphs": [
    "Your first reflection paragraph.",
    "Your closing reflection paragraph."
  ]
}
```

It appears after all academic periods. The final paragraph receives the highlighted closing style.

## Local preview

GitHub Pages loads `data.json` automatically. If you open `index.html` directly by double-clicking, the browser may block the JSON request. The page will show an error and a file picker; select the supplied `data.json`. Alternatively, serve the extracted folder using a local web server, such as `python3 -m http.server 8000`, then open `http://localhost:8000`.

Google Fonts supplies Archivo Black and Inter when online; local fallback fonts remain available. The portfolio images are included in this package and use relative paths.

## Validation

Checked JavaScript syntax, JSON parsing, local asset references, one-card rendering, desktop layout, 390px and 320px layouts, activity-link navigation, Pause/Resume motion, and image-gallery paging. Optional instructor, second academic period, text-only activity, and reflection sections were exercised in a separate preview fixture; those extra cards are not included in `data.json`.
