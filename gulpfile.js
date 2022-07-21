// For more info on this Gulpfile, see:
// https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/#step-3-create-a-gulpfile

const uswds = require("@uswds/compile");

uswds.settings.version = 3;

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.default = exports.watch;
