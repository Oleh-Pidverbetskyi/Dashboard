'use strict'
let peopleData = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active"
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active"
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active"
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive"
  },
  {
    name: "Jane CПР",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active"
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive"
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active"
  },
];
const originalData = [...peopleData];
const entries = document.querySelector('.pagination__entries');
const searchInput = document.querySelector('.header__search-input');
let arrayLength = peopleData.length;
const tableSize = 8;
let currentIndex = 1;
let maxIndex = Math.ceil(arrayLength / tableSize);

function generateTableRows() {
  const tableBody = document.getElementById("tableBody");
  const startIdx = (currentIndex - 1) * tableSize;
  const endIdx = Math.min(startIdx + tableSize, arrayLength);

  tableBody.innerHTML = '';

  for (let i = startIdx; i < endIdx; i++) {
    const person = peopleData[i];
    const row = document.createElement("tr");
    row.classList.add('table__rowline');
    row.innerHTML = `
      <td class="table__cell">${person.name}</td>
      <td class="table__cell">${person.company}</td>
      <td class="table__cell">${person.phoneNumber}</td>
      <td class="table__cell">${person.email}</td>
      <td class="table__cell">${person.country}</td>
      <td class="table__cell">
        <p class="table__status-${person.status.toLowerCase()}">${person.status}</p>
      </td>
    `;
    tableBody.appendChild(row);
  }
}

function generateUserCards() {
  const userCardsContainer = document.getElementById("cellphone-version-user-list");
  userCardsContainer.innerHTML = '';

  const startIdx = (currentIndex - 1) * tableSize;
  const endIdx = Math.min(startIdx + tableSize, arrayLength);

  for (let i = startIdx; i < endIdx; i++) {
    const person = peopleData[i];
    const userCard = document.createElement("li");
    userCard.classList.add("cellphone-version-user-list__card");

    userCard.innerHTML = `
      <h3 class="cellphone-version-user-list__name">${person.name}</h3>
      <p class="cellphone-version-user-list__company"><span class="cellphone-version-user-list__text">Company:</span> ${person.company}</p>
      <p class="cellphone-version-user-list__phone"><span class="cellphone-version-user-list__text">Phone Number:</span> ${person.phoneNumber}</p>
      <p class="cellphone-version-user-list__email"><span class="cellphone-version-user-list__text">Email:</span> ${person.email}</p>
      <p class="cellphone-version-user-list__country"><span class="cellphone-version-user-list__text">Country:</span>${person.country}</p>
      <p class="cellphone-version-user-list__status table__status-${person.status.toLowerCase()}">${person.status}</p>
    `;

    userCardsContainer.appendChild(userCard);
  }
}

function displayPagination() {
  const pagination = document.querySelector('.pagination__box');
  pagination.innerHTML = "";
  const prevBtn = createPaginationButton('‹', 'prev', () => {
    if (currentIndex > 1) {
      currentIndex--;
      displayPagination();
    }
  });

  pagination.appendChild(prevBtn);
  const visiblePages = 4;
  const halfVisiblePages = Math.floor(visiblePages / 2);
  const firstVisiblePage = Math.min(Math.max(currentIndex - halfVisiblePages, 1), maxIndex - visiblePages + 1);
  const lastVisiblePage = Math.min(firstVisiblePage + visiblePages - 1, maxIndex);

  if (firstVisiblePage > 1) {
    const firstBtn = createPaginationButton(1, '', () => {
      paginationBtn(1);
    });
    pagination.appendChild(firstBtn);

    if (firstVisiblePage > 2) {
      const intervalStart = Math.max(firstVisiblePage - visiblePages, 1);
      const intervalBtn = createPaginationButton('...', '', () => {
        paginationBtn(intervalStart - 1);
      });
      pagination.appendChild(intervalBtn);
    }
  }

  for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
    const btn = createPaginationButton(i, '', () => {
      paginationBtn(i);
    });
    pagination.appendChild(btn);
  }

  if (lastVisiblePage < maxIndex) {
    if (lastVisiblePage < maxIndex - 1) {
      const intervalEnd = Math.min(lastVisiblePage + visiblePages, maxIndex);
      const intervalBtn = createPaginationButton('...', '', () => {
        paginationBtn(intervalEnd + 1);
      });
      pagination.appendChild(intervalBtn);
    }

    const lastBtn = createPaginationButton(maxIndex, '', () => {
      paginationBtn(maxIndex);
    });
    pagination.appendChild(lastBtn);
  }

  const nextBtn = createPaginationButton('›', 'next', () => {
    if (currentIndex < maxIndex) {
      if (currentIndex < maxIndex - halfVisiblePages) {
        currentIndex++;
      } else {
        currentIndex = maxIndex;
      }
      displayPagination();
    }
  });
  pagination.appendChild(nextBtn);
  highlightPagination();
}

function createPaginationButton(text, className, clickHandler) {
  const btn = document.createElement('button');
  btn.textContent = text;
  if (className) {
    btn.classList.add('pagination__btn', className);
  } else {
    btn.classList.add('pagination__btn');
  }
  btn.addEventListener('click', clickHandler);
  return btn;
}

function highlightPagination() {
  const startIdx = (currentIndex - 1) * tableSize + 1;
  const endIdx = Math.min(startIdx + tableSize - 1, arrayLength);

  entries.textContent = `Showing data ${startIdx} to ${endIdx} of ${arrayLength}K entries`;

  const paginationBtns = document.querySelectorAll('.pagination__box button');
  paginationBtns.forEach(btn => {
    btn.classList.remove('pagination__active-btn');
    if (btn.textContent === currentIndex.toString()) {
      btn.classList.add('pagination__active-btn');
    }
  });

  generateTableRows();
  generateUserCards();
}

function paginationBtn(i) {
  if (i >= 1 && i <= maxIndex) {
    currentIndex = i;
    displayPagination();
  } else if (i < 1) {
    currentIndex = 1;
    displayPagination();
  } else if (i > maxIndex) {
    currentIndex = maxIndex;
    displayPagination();
  }
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm !== "") {
    const filteredData = peopleData.filter((person) => {
      const fullName = person.name.toLowerCase();
      const company = person.company.toLowerCase();
      const country = person.country.toLowerCase();
      const status = person.status.toLowerCase();

      return (
        fullName.includes(searchTerm) ||
        company.includes(searchTerm) ||
        country.includes(searchTerm) ||
        status.includes(searchTerm)
      );
    });
    peopleData = filteredData;
    currentIndex = 1;
    maxIndex = Math.ceil(filteredData.length / tableSize);
    displayPagination();

    const startIdx = (currentIndex - 1) * tableSize + 1;
    const endIdx = Math.min(startIdx + tableSize - 1, filteredData.length);
    entries.textContent = `Showing data ${startIdx} to ${endIdx} of ${filteredData.length} entries`;
  } else {
    peopleData = [...originalData];
    currentIndex = 1;
    maxIndex = Math.ceil(peopleData.length / tableSize);
    displayPagination();
    const startIdx = (currentIndex - 1) * tableSize + 1;
    const endIdx = Math.min(startIdx + tableSize - 1, peopleData.length);
    entries.textContent = `Showing data ${startIdx} to ${endIdx} of ${peopleData.length} entries`;
  }
});

displayPagination();
