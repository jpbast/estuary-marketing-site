/**
 * Fix images alt attribute coming from the richtext
 * @param source source is the with unprocessed HTML (Body field)
 * @param options target is the processed HTML (childHtmlRehype.html)
 * @returns fixed HTML
 */
const fixBodyPostAltImgs = (source: string, target: string) => {
  const imgRegex = /<img[^>]+>/g;

  const imgsSource = source.match(imgRegex);
  const imgsTarget = target.match(imgRegex);

  let alts = [] as { name: string; alt: string }[];

  // Get all images file name and alt value
  imgsSource.forEach((img) => {
    const regex = /<img([^>]*)src\s*=\s*['"]([^'"]+)['"]([^>]*)alt\s*=\s*['"]([^'"]+)['"]([^>]*)>/;
    const [, , src, , altSource] = img.match(regex);
    const srcSplit = src.split('/');

    alts.push({
      name: srcSplit[srcSplit.length - 1],
      alt: altSource,
    });
  });

  // Get all target img pairs containing the old tag and the new tag with fixed alt
  const parsedImgsTarget = imgsTarget.map((img) => {
    const selectedAlt = alts.find((alt) => img.includes(alt.name));
    if (!selectedAlt)
      return {
        olgImg: img,
        newImg: img,
      };
    return {
      oldImg: img,
      // Replace wrong alt value with correct one
      newImg: img.replace('Blog Post Image', selectedAlt.alt),
    };
  });

  // Now replace all imgs on the target HTML
  parsedImgsTarget.forEach((img) => {
    target = target.replace(img.oldImg, img.newImg);
  });

  return target;
};

export default fixBodyPostAltImgs;
