<?php
session_start();
error_reporting(0);

define('INQUIRY_LOG_FILE', 'inquiry-logs.txt');
define('CATALOGUE_LOG_FILE', 'cat-inquiry-logs.txt');

define('WEBSITE_DOMAIN', 'harsiddhind.com');
define('COMPANY_NAME', 'HARSIDDH PHARMAMACH PVT LTD');

define('CONTACT_PAGE', 'contact-us.html');
define('THANK_YOU_PAGE', 'thankyou.html');
define('THANK_YOU_CATALOGUE_PAGE', 'thankyou-catalogue.html');
define('IS_DOMESTIC', false);

## EMAIL Settings
define('FROM_EMAIL', 'jayesh@harsiddhind.com');
define('TO_EMAIL', 'jayesh@harsiddhind.com');
define('CC_EMAIL', '');
define('EMAIL_SUBJECT', 'New Inquiry From '.COMPANY_NAME.' Website');
define('CATALOGUE_EMAIL_SUBJECT', 'New Catalogue Request From '.COMPANY_NAME.' Website');
## SMTP2GO Username & Password
define('SMTP2GO_USERNAME', 'harsiddhind.com');
define('SMTP2GO_PASSWORD', 'gNcV93MSFp89N3eA');

## For inquiry testing configuration
define('DCB_INQUIRY_TEST_EMAILS_ARR', array("dcbindia@dcbindia.in", "dcb@dcbindia.in"));
define('DCB_INQUIRY_EMAIL', 'dcbrainsinquiry@gmail.com');
?>
