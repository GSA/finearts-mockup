module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy({ 'node_modules/@fortawesome/fontawesome-free': 'assets/fontawesome-free' });
  eleventyConfig.setWatchThrottleWaitTime(100); // Delay for USWDS compile

  return {
    pathPrefix: '/',
  }
};
