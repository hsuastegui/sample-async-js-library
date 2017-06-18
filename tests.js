const Jasmine = require("jasmine");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

const jasmine = new Jasmine();
jasmine.loadConfig({
  spec_files: ["src/*.spec.js"],
  stopSpecOnExpectationFailure: false,
  random: false
});
jasmine.clearReporters();
jasmine.addReporter(
  new SpecReporter({
    spec: {
      displayPending: true,
      displayDuration: true,
      displayStacktrace: true
    },
    summary: {
      displayStacktrace: true
    }
  })
);
jasmine.execute();
