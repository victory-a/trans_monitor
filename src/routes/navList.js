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
    logo: <Overview />,
    category: "main"
  },
  {
    path: "/profile",
    title: "Profile",
    logo: <Profile />,
    category: "profile"
  },
  {
    path: "/all-payments",
    title: "All Payments",
    logo: <AllPayments />,
    category: "payments"
  },
  {
    path: "/manual-settlement",
    title: "Manual Settlement",
    logo: <ManualSettlement />,
    category: "payments"
  },
  {
    path: "/reconciled-payments",
    title: "Reconciled Payments",
    logo: <ReconciledPayments />,
    category: "payments"
  },
  {
    path: "/unreconciled-payments",
    title: "UnReconciled Payments",
    logo: <UnReconciledPayments />,
    category: "payments"
  },
  {
    path: "/all-orders",
    title: "All Orders",
    logo: <AllOrders />,
    category: "orders"
  },
  {
    path: "/pending-orders",
    title: "Pending Orders",
    logo: <PendingOrders />,
    category: "orders"
  },
  {
    path: "/reconciled-orders",
    title: "Reconciled Orders",
    logo: <ReconciledOrders />,
    category: "orders"
  }
];
