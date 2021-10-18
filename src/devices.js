const sizes = {
  tablet: "620px",
  laptop: "960px",
  desktop: "1200px",
};

export const devices = {
  tablet: `screen and (min-width: ${sizes.tablet})`,
  laptop: `screen and (min-width: ${sizes.laptop})`,
  desktop: `screen and (min-width: ${sizes.desktop})`,
};
