$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/View_Applicant/View_Applicant/src/test/java/View_Applicant/View_Applicants.feature");
formatter.feature({
  "line": 3,
  "name": "Job portal",
  "description": "",
  "id": "job-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-713"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-6"
    }
  ]
});
formatter.before({
  "duration": 6053347400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify if business owner can view all job applicants",
  "description": "",
  "id": "job-portal;verify-if-business-owner-can-view-all-job-applicants",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@TEST_COMMUNITY-746"
    },
    {
      "line": 5,
      "name": "@REQ_COMMUNITY-25"
    },
    {
      "line": 5,
      "name": "@TESTSET_COMMUNITY-712"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user logs in (employer)",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on view applicants (employer)",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to filter (employer)",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#\t\tAnd user can select a particular applicant (employer)"
    }
  ],
  "line": 11,
  "name": "user can delete a particular applicant (employer)",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be able to select applicant CV to download (employer)",
  "keyword": "And "
});
formatter.match({
  "location": "ViewApplicants_steps.user_logs_in_employer()"
});
formatter.result({
  "duration": 8603879700,
  "status": "passed"
});
formatter.match({
  "location": "ViewApplicants_steps.user_clicks_on_view_applicants_employer()"
});
formatter.result({
  "duration": 8108155200,
  "status": "passed"
});
formatter.match({
  "location": "ViewApplicants_steps.user_should_be_able_to_filter_employer()"
});
formatter.result({
  "duration": 3090576600,
  "status": "passed"
});
formatter.match({
  "location": "ViewApplicants_steps.user_can_delete_a_particular_applicant_employer()"
});
formatter.result({
  "duration": 40425200,
  "status": "passed"
});
formatter.match({
  "location": "ViewApplicants_steps.user_should_be_able_to_select_applicant_CV_to_download_employer()"
});
formatter.result({
  "duration": 49777700,
  "status": "passed"
});
});