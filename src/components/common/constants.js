import {
  AuditTrailsAltIcon,
  AuditTrailsIcon,
  DashboardAltIcon,
  DashboardIcon,
  DdMandateAltIcon,
  DdMandateIcon,
  DevelopmentAltIcon,
  DevelopmentIcon,
  GetStartedAltIcon,
  GetStartedIcon,
  LogoutAltIcon,
  LogoutIcon,
  PayoutAltIcon,
  PayoutIcon,
  PeopleAltIcon,
  PeopleIcon,
  SettingsIcon,
  SettlementAltIcon,
  SettlementIcon,
  SubAccountAltIcon,
  SubAccountIcon,
  TeamsAltIcon,
  TeamsIcon,
  TransactionAltIcon,
  TransactionIcon,
  VNubanAltIcon,
  VNubanIcon,
} from "./images";

export const generalRoutes = [
  {
    id: 1,
    name: "Get Started",
    path: "/get-started",
    iconComponent: GetStartedIcon,
    secComponent: GetStartedAltIcon,
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard",
    iconComponent: DashboardIcon,
    secComponent: DashboardAltIcon,
  },
];

export const paymentRoutes = [
  {
    id: 1,
    name: "Transactions",
    path: "/transactions",
    iconComponent: TransactionIcon,
    secComponent: TransactionAltIcon,
  },
  {
    id: 2,
    name: "People",
    path: "/people",
    iconComponent: PeopleIcon,
    secComponent: PeopleAltIcon,
  },
  {
    id: 3,
    name: "Settlements",
    path: "/settlements",
    iconComponent: SettlementIcon,
    secComponent: SettlementAltIcon,
  },
  {
    id: 4,
    name: "Payout",
    path: "/Payout",
    iconComponent: PayoutIcon,
    secComponent: PayoutAltIcon,
  },
  {
    id: 5,
    name: "VNUBANs",
    path: "/VNUBANs",
    iconComponent: VNubanIcon,
    secComponent: VNubanAltIcon,
  },
  {
    id: 6,
    name: "Subaccounts",
    path: "/subaccounts",
    iconComponent: SubAccountIcon,
    secComponent: SubAccountAltIcon,
  },
  {
    id: 7,
    name: "DD Mandates",
    path: "/dd-mandates",
    iconComponent: DdMandateIcon,
    secComponent: DdMandateAltIcon,
  },
];

export const otherRoutes = [
  {
    id: 1,
    name: "Audit Trails",
    path: "/audit-trails",
    iconComponent: AuditTrailsIcon,
    secComponent: AuditTrailsAltIcon,
  },
  {
    id: 2,
    name: "Teams",
    path: "/teams",
    iconComponent: TeamsIcon,
    secComponent: TeamsAltIcon,
  },
  {
    id: 3,
    name: "Development",
    path: "/Development",
    iconComponent: DevelopmentIcon,
    secComponent: DevelopmentAltIcon,
  },
];

export const actionRoutes = [
  {
    id: 1,
    name: "Settings",
    path: "/settings",
    iconComponent: SettingsIcon,
    secComponent: SettlementAltIcon,
  },
  {
    id: 2,
    name: "Log Out",
    secName: "Logging Out",
    path: "/log-out",
    iconComponent: LogoutIcon,
    secComponent: LogoutAltIcon,
  },
];

export const cards = [
  {
    id: 1,
    title: "Total Amount Received",
  },
  {
    id: 2,
    title: "Total Payouts",
  },
];

export const filters = ["All Year", "This Month", "This week", "Today"];

export const tableTabs = ["Transactions", "Customers"];

export const transactionsHeader = [
  { id: 1, label: "Customer" },
  { id: 2, label: "amount" },
  { id: 3, label: "reference" },
  { id: 4, label: "channel" },
  { id: 5, label: "status" },
  { id: 6, label: "type" },
  { id: 7, label: "payment date" },
];

export const customersHeader = [
  { id: 1, label: "Customer" },
  { id: 2, label: "Phone" },
  { id: 3, label: "NUBAN" },
  { id: 4, label: "reference" },
  { id: 7, label: "date created" },
];

export const transactionsData = [
  {
    id: 1,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    amount: "₦27,002,075.65",
    reference: "wf_py_53_1xyn9myhgrft",
    channel: "CARD",
    status: "Failed",
    type: "payout",
    createdAt: "March 3, 2023 4:23 PM",
  },
  {
    id: 2,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    amount: "₦27,002,075.65",
    reference: "wf_py_53_1xyn9myhgrft",
    channel: "CARD",
    status: "Failed",
    type: "collection",
    createdAt: "March 3, 2023 4:23 PM",
  },
  {
    id: 3,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    amount: "₦2,007,002,075.65",
    reference: "wf_py_53_1xyn9myhgrft",
    channel: "transfer",
    status: "Successful",
    type: "payout",
    createdAt: "March 3, 2023 4:23 PM",
  },
  {
    id: 4,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    amount: "₦527,002,075.65",
    reference: "wf_py_53_1xyn9myhgrft",
    channel: "CARD",
    status: "Failed",
    type: "collection",
    createdAt: "March 3, 2023 4:23 PM",
  },
  {
    id: 5,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    amount: "₦27,002,075.65",
    reference: "wf_py_53_1xyn9myhgrft",
    channel: "CARD",
    status: "Failed",
    type: "payout",
    createdAt: "March 3, 2023 4:23 PM",
  },
  {
    id: 6,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    amount: "₦27,002,075.65",
    reference: "wf_py_53_1xyn9myhgrft",
    channel: "CARD",
    status: "Failed",
    type: "payout",
    createdAt: "March 3, 2023 4:23 PM",
  },
  {
    id: 7,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    amount: "₦27,002,075.65",
    reference: "wf_py_53_1xyn9myhgrft",
    channel: "CARD",
    status: "Failed",
    type: "payout",
    createdAt: "March 3, 2023 4:23 PM",
  },
];

export const customersData = [
  {
    id: 1,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    phone: "09183746372",
    nuban: "0938475648",
    reference: "complete size",
    createdAt: "March 3, 2023 4:25 PM",
  },
  {
    id: 2,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    phone: "09183746372",
    nuban: "0938475648",
    reference: "bala blu",
    createdAt: "December 23, 2022 4:25 PM",
  },
  {
    id: 3,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    phone: "09183746372",
    nuban: "0938475648",
    reference: "wf_py_53_1",
    createdAt: "March 3, 2023 4:25 PM",
  },
  {
    id: 4,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    phone: "09183746372",
    nuban: "0938475648",
    reference: "bala blu",
    createdAt: "December 23, 2022 4:25 PM",
  },
  {
    id: 5,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    phone: "09183746372",
    nuban: "0938475648",
    reference: "wf_py_53_1",
    createdAt: "March 3, 2023 4:25 PM",
  },
  {
    id: 6,
    fullName: "Sharuk Kahn",
    email: "sharukkibobo@gmail.com",
    phone: "09183746372",
    nuban: "0938475648",
    reference: "bala blu",
    createdAt: "December 23, 2022 4:25 PM",
  },
];
