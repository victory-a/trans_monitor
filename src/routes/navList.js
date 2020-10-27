import React from "react";
import { ReactComponent as Overview } from "assets/overview.svg";
import { ReactComponent as Profile } from "assets/merchant-profile.svg";
import { ReactComponent as AllPayments } from "assets/all-payments.svg";
import { ReactComponent as ManualSettlement } from "assets/manual-settlement.svg";
import { ReactComponent as ReconciledPayments } from "assets/reconciled-payments.svg";
import { ReactComponent as UnReconciledPayments } from "assets/unreconciled-payments.svg";
import { ReactComponent as AllOrders } from "assets/all-orders.svg";
import { ReactComponent as PendingOrders } from "assets/pending-orders.svg";
import { ReactComponent as ReconciledOrders } from "assets/reconciled-orders.svg";

export default [
  {
    path: "/",
    title: "Overview",
    logo: <Overview />
  },
  {
    path: "/profile",
    title: "Profile",
    logo: <Profile />
  },
  {
    path: "/all-payments",
    title: "All Payments",
    logo: <AllPayments />
  },
  {
    path: "/manual-settlement",
    title: "Manual Settlement",
    logo: <ManualSettlement />
  },
  {
    path: "/reconciled-payments",
    title: "Reconciled Payments",
    logo: <ReconciledPayments />
  },
  {
    path: "/unreconciled-payments",
    title: "UnReconciled Payments",
    logo: <UnReconciledPayments />
  },
  {
    path: "/all-orders",
    title: "All Orders",
    logo: <AllOrders />
  },
  {
    path: "/pending-orders",
    title: "Pending Orders",
    logo: <PendingOrders />
  },
  {
    path: "/reconciled-orders",
    title: "Reconciled Orders",
    logo: <ReconciledOrders />
  }
];
