import React from "react";
import { ReactComponent as Overview } from "assets/overview";
import { ReactComponent as Profile } from "assets/merchant-profile";
import { ReactComponent as AllPayments } from "assets/all-Payments";
import { ReactComponent as ManualSettlement } from "assets/manual-settlement";
import { ReactComponent as ReconciledPayments } from "assets/reconciled-payments";
import { ReactComponent as UnReconciledPayments } from "assets/unreconciled-payments";
import { ReactComponent as AllOrders } from "assets/all-orders";
import { ReactComponent as PendingOrders } from "assets/pending-orders";
import { ReactComponent as ReconciledOrders } from "assets/reconciled-orders";

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
