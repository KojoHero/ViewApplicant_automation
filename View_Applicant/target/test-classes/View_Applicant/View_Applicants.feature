@COMMUNITY-713
@REQ_COMMUNITY-6
Feature: Job portal

	@TEST_COMMUNITY-746 @REQ_COMMUNITY-25 @TESTSET_COMMUNITY-712
	Scenario: Verify if business owner can view all job applicants
		When user logs in (employer)
		And user clicks on view applicants (employer)
		And user should be able to filter (employer)
#		And user can select a particular applicant (employer)
		And   user can delete a particular applicant (employer)
		And user should be able to select applicant CV to download (employer)
